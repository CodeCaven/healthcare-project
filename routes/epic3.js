var express = require('express');
var router = express.Router();

// Require controller modules.
var maps_controller = require('../controllers/mapsController');

// Routes
router.get('/', maps_controller.maps);

module.exports = router;