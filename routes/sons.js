const express = require('express');
const sonController = require('../controllers/sonController');
const router = express.Router();

// Routes pour les sons
router.post('/', sonController.createSon);
router.get('/artiste/:artisteId', sonController.getSonsByArtiste);
router.get('/album/:albumId', sonController.getSonsByAlbum);
router.get('/:id', sonController.getSonById); // Nouveau
router.put('/:id', sonController.updateSon); // Nouveau
router.delete('/:id', sonController.deleteSon); // Nouveau

module.exports = router;
