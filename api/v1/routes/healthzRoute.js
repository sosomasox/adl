var express = require('express');
var controller = require('../controllers/healthzController.js');
var router = express.Router();

router.get('/', controller.healthz);

module.exports = router;
