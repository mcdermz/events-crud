var express = require('express');
var router = express.Router();
const db = require('../../db/knex.js')
const moment = require('moment')
const eventsShow = require('./controller.js')

/* GET events listing. */
router.get('/:id', eventsShow);

module.exports = router;
