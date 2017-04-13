var express = require('express');
var router = express.Router();

/* GET events listing. */
router.get('/', eventsIndex);

function eventsIndex(req, res, next) {
  res.send('EVENTS');
}

module.exports = router;
