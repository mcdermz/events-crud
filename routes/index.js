var express = require('express');
var router = express.Router();
const getEvents = require('./events/controller.js')

/* GET home page. */
router.get('/', getEvents, eventsIndex);


function eventsIndex (req, res, next) {
  const title = 'EVENT MASTER BLASTER';
  const allEvents = req.allEvents;
  res.render('index', {allEvents, title});
}


module.exports = router;
