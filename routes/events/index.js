var express = require('express');
var router = express.Router();
const getEvents = require('./controller.js')
const db = require('../../db/knex.js')
const moment = require('moment')

/* GET events listing. */
router.get('/', getEvents, eventsShow);
router.post('/:id', getEvents, registerAttendee);
router.get('/:id', getEvents, eventsShow);
router.get('/:id/register', getEvents, eventsRegister);

function registerAttendee (req, res, next) {
  const allEvents = req.allEvents;
  const { pref_name, last_name, birthday, email } = req.body;
  const ticket_id = parseInt(req.body.ticket_id);
  const attendeeData = { pref_name, last_name, birthday, email };
  const eventId = parseInt(req.body.data)

  if (moment() < moment(birthday).add(21, 'year')) {
    const error = {message: 'You need to be 21 to register for this event'};
    res.render(`events/register`, {allEvents, attendeeData, error});
  }

  db.select('email').from('attendees').where('email', email)
  .then(emails => {
    if (emails.length) {
      db.select('attendees.email', 'events.id as event_id').from('events')
      .innerJoin('tickets', 'events.id', 'tickets.event_id')
      .where('tickets.id', ticket_id)
      .innerJoin('tickets_attendees', 'tickets.id', 'tickets_attendees.ticket_id')
      .innerJoin('attendees', 'attendees.id', 'tickets_attendees.attendee_id')
      .where('attendees.email', email)
      .then( attendeeEvent => {
        if (attendeeEvent.length) {
          db('tickets').where('event_id', allEvents[0].id).then(tickets => {
            const error = {message: 'You have already used this email to register for this event.'};
            res.render('events/register', {attendeeData, allEvents, tickets, error})
          })
        } else {
          db.select('id').from('attendees').where('email', email)
          .then( attendee_id => {
            console.log(attendee_id[0].id);
            let attendee = attendee_id[0].id
            db('tickets_attendees').insert([{attendee_id: attendee, ticket_id}])
            .then(() => {
              res.redirect(`/attendees/${attendee}`)
            })
          })
        }
      })
    } else {
      db('attendees').insert({pref_name, last_name, birthday, email}, 'id')
      .then( attendee_id => {
        let attendee = attendee_id[0]
        db('tickets_attendees').insert([{attendee_id: attendee, ticket_id}])
        .then(() => {
          res.redirect(`/attendees/${attendee}`)
        })
      })
    }
  }).catch(err => {
      next(err)
  })
};

function eventsShow (req, res) {
  const title = 'EVENT MASTER BLASTER';
  const allEvents = req.allEvents;
  res.render('index', {allEvents, title});
};

function eventsRegister (req, res, next) {
  const title = 'EVENT MASTER BLASTER';
  const allEvents = req.allEvents;
  db('tickets').where('event_id', allEvents[0].id).then(tickets => {
    res.render('events/register', {title, allEvents, tickets})
  })
};

module.exports = router;
