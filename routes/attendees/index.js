const express = require('express');
const router = express.Router();
const db = require('../../db/knex.js')

router.get('/:id', attendeeEvents);

function attendeeEvents (req, res, next) {
  res.render('attendees/')
}


module.exports = router
