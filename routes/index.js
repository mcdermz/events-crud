var express = require('express');
var router = express.Router();
const db = require('../db/knex.js');
const moment = require('moment')
const eventsIndex = require('./events/controller.js')

/* GET home page. */
router.get('/', eventsIndex);

module.exports = router;
