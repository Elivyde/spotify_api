const Artiste = require('../models/Artiste');

// Créer un artiste
exports.createArtiste = async (req, res) => {
  try {
    const { nom, nombreDAbonnes, genres, image, biographie } = req.body;
    if (!nom || !nombreDAbonnes || !Array.isArray(genres)) {
      return res.status(400).json({ error: 'Champs manquants ou invalides.' });
    }
    const newArtiste = new Artiste({ nom, nombreDAbonnes, genres, image, biographie });
    await newArtiste.save();
    res.status(201).json(newArtiste);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer tous les artistes
exports.getArtistes = async (req, res) => {
  try {
    const artistes = await Artiste.find();
    res.json(artistes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un artiste par ID
exports.getArtisteById = async (req, res) => {
  try {
    const artiste = await Artiste.findById(req.params.id).populate('albums').populate('sons');
    if (!artiste) {
      return res.status(404).json({ error: 'Artiste non trouvé.' });
    }
    res.json(artiste);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un artiste
exports.updateArtiste = async (req, res) => {
  try {
    const updatedArtiste = await Artiste.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedArtiste) {
      return res.status(404).json({ error: 'Artiste non trouvé.' });
    }
    res.json(updatedArtiste);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un artiste
exports.deleteArtiste = async (req, res) => {
  try {
    const deletedArtiste = await Artiste.findByIdAndDelete(req.params.id);
    if (!deletedArtiste) {
      return res.status(404).json({ error: 'Artiste non trouvé.' });
    }
    res.json({ message: 'Artiste supprimé avec succès.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
