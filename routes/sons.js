const express = require('express');
const sonController = require('../controllers/sonController');
const router = express.Router();

// Routes pour les sons
router.post('/', sonController.createSon);
router.get('/', sonController.getAllSons); // Récupérer tous les sons
router.get('/artiste/:artisteId', sonController.getSonsByArtiste);
router.get('/album/:albumId', sonController.getSonsByAlbum);
router.get('/:id', sonController.getSonById);
router.put('/:id', sonController.updateSon);
router.delete('/:id', sonController.deleteSon);

module.exports = router;
