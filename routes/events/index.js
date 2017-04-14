var express = require('express');
var router = express.Router();
const getEvents = require('./controller.js')
const db = require('../../db/knex.js')

/* GET events listing. */
router.get('/:id', getEvents, eventsShow);
router.get('/:id/register', getEvents, eventsRegister);

function eventsShow (req, res) {
  const title = 'EVENT MASTER BLASTER';
  const allEvents = req.allEvents;
  res.render('index', {allEvents, title});
}

function eventsRegister (req, res, next) {
  const title = 'EVENT MASTER BLASTER';
  const allEvents = req.allEvents;
  db('tickets').where('event_id', allEvents[0].id).then(tickets => {
    console.log(tickets);
    res.render('events/register', {title, allEvents, tickets})
  })
}

module.exports = router;
