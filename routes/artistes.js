const express = require('express');
const artisteController = require('../controllers/artisteController');
const router = express.Router();

// Routes pour les artistes
router.post('/', artisteController.createArtiste);
router.get('/', artisteController.getArtistes);
router.get('/:id', artisteController.getArtisteById); // Nouveau
router.put('/:id', artisteController.updateArtiste); // Nouveau
router.delete('/:id', artisteController.deleteArtiste); // Nouveau

module.exports = router;
