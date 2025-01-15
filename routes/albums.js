const express = require('express');
const albumController = require('../controllers/albumController');
const router = express.Router();

// Routes pour les albums
router.post('/', albumController.createAlbum);
router.get('/', albumController.getAllAlbums);
router.get('/:artisteId', albumController.getAlbumsByArtiste);
router.get('/:id', albumController.getAlbumById);
router.put('/:id', albumController.updateAlbum);
router.delete('/:id', albumController.deleteAlbum);

module.exports = router;
