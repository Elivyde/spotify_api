const express = require('express');
const albumController = require('../controllers/albumController');
const router = express.Router();

router.post('/', albumController.createAlbum);
router.get('/:artisteId', albumController.getAlbumsByArtiste);

module.exports = router;
