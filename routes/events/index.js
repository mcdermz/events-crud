var express = require('express');
var router = express.Router();
const getEvents = require('./controller.js')
const db = require('../../db/knex.js')

/* GET events listing. */
router.post('/', registerAttendee);
router.get('/', getEvents, eventsShow);
router.get('/:id', getEvents, eventsShow);
router.get('/:id/register', getEvents, eventsRegister);

function registerAttendee (req, res, next) {
  const { pref_name, last_name, birthday, email } = req.body;
  const ticket_id = parseInt(req.body.ticket_id);
  console.log(req.body);
  db('attendees').insert({pref_name, last_name, birthday, email}, 'id')
  .then( attendee_id => {
    db('tickets_attendees').insert(attendee_id, ticket_id)
    .then(() => {
      res.redirect('/')
    })
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
