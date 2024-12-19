const express = require('express');
const albumController = require('../controllers/albumController');

const router = express.Router();

// Routes
router.post('/:artisteId', albumController.createAlbum); // Ajouter un album à un artiste
router.get('/:artisteId', albumController.getAlbums); // Récupérer les albums d'un artiste
router.get('/:artisteId/:albumId', albumController.getAlbumById); // Récupérer un album spécifique
router.put('/:artisteId/:albumId', albumController.updateAlbum); // Mettre à jour un album
router.delete('/:artisteId/:albumId', albumController.deleteAlbum); // Supprimer un album

module.exports = router;
