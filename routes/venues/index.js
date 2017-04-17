const express = require('express');
const router = express.Router();
const db = require('../../db/knex.js')

router.get('/:id', venueEvents)


function venueEvents (req, res, next) {
  const id = req.params.id
  db('venues').where({ id })
  .then(response => {
    const venue = response[0];
    db('events').where('venue_id', id).orderBy('start_time')
    .then(allEvents => {
      res.render('venues/', { venue, allEvents })
    })
  }).catch(err => {
    next(err)
  })
}

module.exports = router
