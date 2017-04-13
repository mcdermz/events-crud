var express = require('express');
var router = express.Router();
const db = require('../../db/knex.js')

/* GET events listing. */
router.get('/', eventsIndex);

function eventsIndex(req, res, next) {
  db('events').then(allEvents => {
    res.render('events/index', {allEvents})
  })
}

module.exports = router;
