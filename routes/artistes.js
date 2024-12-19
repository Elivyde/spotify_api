const express = require('express');
const artisteController = require('../controllers/artisteController');
const router = express.Router();

router.post('/', artisteController.createArtiste);
router.get('/', artisteController.getArtistes);

module.exports = router;
