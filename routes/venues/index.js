const express = require('express');
const router = express.Router();
const db = require('../../db/knex.js')

router.get('/:id', venueEvents)

function venueEvents (req, res, next) {
  res.send('Venue events works!')
}

module.exports = router
