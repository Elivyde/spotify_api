const express = require('express');
const sonController = require('../controllers/sonController');
const router = express.Router();

router.post('/', sonController.createSon);
router.get('/artiste/:artisteId', sonController.getSonsByArtiste);
router.get('/album/:albumId', sonController.getSonsByAlbum);

module.exports = router;
