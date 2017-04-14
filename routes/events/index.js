var express = require('express');
var router = express.Router();
const db = require('../../db/knex.js')

/* GET events listing. */
router.get('/:id', eventsShow);

function eventsShow(req, res, next) {
  const id = req.params.id;
  let thisEvent;
  db('events').where({ id }).first()
  .then( ret => {
    thisEvent = ret;
    return db.select('capacity')
    .from('venues')
    .where('id', thisEvent.venue_id)
  }).then( cap => {
    const venueCapacity = cap[0].capacity;
    res.render('events/show', {venueCapacity, thisEvent})
  })
}


module.exports = router;
