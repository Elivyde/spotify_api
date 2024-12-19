const express = require('express');
const sonController = require('../controllers/sonController');

const router = express.Router();

// Routes
router.post('/:albumId', sonController.createSon); // Ajouter un son à un album
router.get('/:albumId', sonController.getSons); // Récupérer les sons d'un album
router.get('/:albumId/:sonId', sonController.getSonById); // Récupérer un son spécifique
router.put('/:albumId/:sonId', sonController.updateSon); // Mettre à jour un son
router.delete('/:albumId/:sonId', sonController.deleteSon); // Supprimer un son

module.exports = router;
