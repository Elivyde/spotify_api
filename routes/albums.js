const express = require('express');
const albumController = require('../controllers/albumController');
const router = express.Router();

router.post('/:artisteId', albumController.createAlbum);
router.get('/:artisteId', albumController.getAlbums);

module.exports = router;
