var express = require('express');
var router = express.Router();
const getEvents = require('./controller.js')

/* GET events listing. */
router.get('/:id', getEvents, eventsShow);

function eventsShow (req, res, next) {
  const title = 'EVENT MASTER BLASTER';
  const allEvents = req.allEvents;
  res.render('index', {allEvents, title});
}

module.exports = router;
