var express = require('express');
var router = express.Router();
const db = require('../db/knex.js');
const moment = require('moment')

/* GET home page. */
router.get('/', eventsIndex);

function eventsIndex(req, res, next) {
  const title = 'EVENT MASTER BLASTER';
  db('events').where('start_time', '>', moment())
  .then(allEvents => {
    res.render('events/index', { allEvents, title })
  })
}

module.exports = router;
