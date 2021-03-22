var express = require('express');
var controller = require('../controllers/adlController.js');
var router = express.Router();

router.get('/', controller.load_all_adl);
router.get('/:activity', controller.load_adl);
router.get('/:activity/date/:date', controller.load_adl);
router.post('/', controller.create_adl);
router.put('/id/:id', controller.update_adl);
router.delete('/id/:id', controller.delete_adl);

module.exports = router;
