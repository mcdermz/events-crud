const express = require('express');
const router = express.Router();
const db = require('../../db/knex.js')

router.get('/:id', venueEvents)

function venueEvents (req, res, next) {
  res.render('venues/')
}

module.exports = router
