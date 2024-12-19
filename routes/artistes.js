const express = require('express');
const artisteController = require('../controllers/artisteController');

const router = express.Router();

// Routes
router.post('/', artisteController.createArtiste);
router.get('/', artisteController.getArtistes);
router.get('/:id', artisteController.getArtisteById);
router.put('/:id', artisteController.updateArtiste);
router.delete('/:id', artisteController.deleteArtiste);

module.exports = router;
