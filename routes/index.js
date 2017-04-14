var express = require('express');
var router = express.Router();
const db = require('../db/knex.js');
const moment = require('moment')

/* GET home page. */
router.get('/', eventsIndex);

function eventsIndex(req, res, next) {
  const title = 'EVENT MASTER BLASTER';
  db.select('events.title', 'events.description', 'events.start_time', 'events.end_time', 'events.id', 'venues.capacity')
  .count('tickets_attendees.* as tickets')
  .from('venues')
  .innerJoin('events', 'venues.id', 'events.venue_id')
  .innerJoin('tickets', 'tickets.event_id', 'events.id')
  .innerJoin('tickets_attendees', 'tickets_attendees.ticket_id', 'tickets.id')
  .groupBy('events.title', 'events.description', 'events.start_time', 'events.end_time', 'events.id', 'venues.capacity')
  .where('start_time', '>', moment())
  .orderBy('start_time')
  .then( allEvents => {
    allEvents.forEach(el  => {
      el.soldOut = el.tickets >= el.capacity
    })
    console.log(allEvents);
    res.render('index', {allEvents, title});
  })
}

module.exports = router;
