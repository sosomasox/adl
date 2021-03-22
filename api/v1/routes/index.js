var express = require('express');
var router = express.Router();

router.use('/supports', require('./supportsRoute.js'));
router.use('/activities', require('./adlRoute.js'));
router.use('/healthz', require('./healthzRoute.js'));

module.exports = router;
