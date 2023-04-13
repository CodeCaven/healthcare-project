var express = require('express');
var router = express.Router();

// Require controller modules.
var met_controller = require('../controllers/metController');

// Routes
router.get('/', met_controller.met);

module.exports = router;