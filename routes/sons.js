const express = require('express');
const sonController = require('../controllers/sonController');
const router = express.Router();

router.post('/:albumId', sonController.createSon);

module.exports = router;
