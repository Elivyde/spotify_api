const express = require('express');
const albumController = require('../controllers/albumController');
const router = express.Router();

// Routes pour les albums
router.post('/', albumController.createAlbum);
router.get('/:artisteId', albumController.getAlbumsByArtiste);
router.get('/:id', albumController.getAlbumById); // Nouveau
router.put('/:id', albumController.updateAlbum); // Nouveau
router.delete('/:id', albumController.deleteAlbum); // Nouveau

module.exports = router;
