const express = require('express');
const artisteController = require('../controllers/artisteController');
const router = express.Router();

// Routes pour les artistes
router.post('/', artisteController.createArtiste);        // Ajouter un artiste
router.get('/', artisteController.getArtistes);          // Récupérer tous les artistes
router.get('/:id', artisteController.getArtisteById);    // Récupérer un artiste par ID
router.put('/:id', artisteController.updateArtiste);     // Mettre à jour un artiste
router.delete('/:id', artisteController.deleteArtiste);  // Supprimer un artiste

module.exports = router;
