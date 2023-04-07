var express = require('express');
var router = express.Router();

// Require controller modules.
var private_controller = require('../controllers/privateController');

// Routes
router.get('/', private_controller.private);

module.exports = router;
