const express = require('express');
const router = express.Router();
const db = require('../../db/knex.js')

router.get('/:id', attendeeEvents);

function attendeeEvents (req, res, next) {
  const id = req.params.id
  db('attendees').where({ id })
  .then (response => {
    const attendee = response[0]
    db.distinct('events.title', 'events.description', 'events.start_time', 'events.end_time', 'events.id', 'events.over_21')
    .from('attendees')
    .innerJoin('tickets_attendees', 'tickets_attendees.attendee_id', attendee.id)
    .innerJoin('tickets', 'tickets.id', 'tickets_attendees.ticket_id')
    .innerJoin('events', 'events.id', 'tickets.event_id')
    .then(allEvents => {
      console.log(allEvents);
      res.render('attendees/', { attendee, allEvents })
    })
  })
}


module.exports = router
