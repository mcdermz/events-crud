var express = require('express');
var router = express.Router();
const db = require('../../db/knex.js')

/* GET events listing. */
router.get('/', eventsIndex);
router.get('/:id', eventsShow);

function eventsShow(req, res, next) {
  const id = req.params.id
  db('events').where({ id }).first()
  .then( thisEvent => {
    res.render('events/show', {thisEvent})
  })
}

function eventsIndex(req, res, next) {
  db('events').then( allEvents => {
    res.render('events/index', {allEvents})
  })
}

module.exports = router;
