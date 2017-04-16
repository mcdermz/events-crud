const db = require('../../db/knex.js');
const moment = require('moment')

module.exports = function (req, res, next) {
  db.select('events.title', 'events.description', 'events.start_time', 'events.end_time', 'events.id', 'events.over_21', 'venues.capacity')
  .count('tickets_attendees.* as tickets')
  .from('venues')
  .innerJoin('events', 'venues.id', 'events.venue_id')
  .innerJoin('tickets', 'tickets.event_id', 'events.id')
  .innerJoin('tickets_attendees', 'tickets_attendees.ticket_id', 'tickets.id')
  .groupBy('events.title', 'events.description', 'events.start_time', 'events.end_time', 'events.id', 'events.over_21', 'venues.capacity')
  .where('start_time', '>', moment())
  .orderBy('start_time')
  .then( allEvents => {
    allEvents.forEach(el  => {
      el.soldOut = el.tickets >= el.capacity;
      el.reqId = parseInt(req.params.id);
      el.start_time = moment(el.start_time).format('MMMM Do YYYY, h:mm a');
      el.end_time = moment(el.end_time).format('MMMM Do YYYY, h:mm a')
    });
    req.allEvents = req.params.id ? allEvents.filter(el => {
      return el.id === el.reqId
    }) : allEvents
    next();
  }).catch(err => {
    next(err)
  })
};
