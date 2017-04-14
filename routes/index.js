var express = require('express');
var router = express.Router();
const db = require('../db/knex.js');
const moment = require('moment')

/* GET home page. */
router.get('/', eventsIndex);

function eventsIndex(req, res, next) {
  const title = 'EVENT MASTER BLASTER';
  db.select('events.title', 'events.description', 'events.start_time', 'events.end_time', 'events.id', 'venues.capacity').from('events')
  .innerJoin('venues', 'venues.id', 'events.venue_id')
  .where('start_time', '>', moment())
  .then( allEvents => {
    console.log(allEvents);
    res.render('index', {allEvents, title});
  })
}

module.exports = router;
