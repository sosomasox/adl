var express = require('express');
var controller = require('../controllers/supportsController.js');
var router = express.Router();

router.get('/', controller.load_supports);
router.post('/', controller.create_supports);
router.put('/id/:id', controller.update_supports);
router.delete('/id/:id', controller.delete_supports);

module.exports = router;
