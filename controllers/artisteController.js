const Artiste = require('../models/Artiste');

// Créer un artiste
exports.createArtiste = async (req, res) => {
  try {
    const artiste = new Artiste(req.body);
    await artiste.save();
    res.status(201).json(artiste);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
    const artiste = await Artiste.findById(req.params.id);
    if (!artiste) return res.status(404).json({ message: 'Artiste non trouvé' });
    res.json(artiste);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un artiste
exports.updateArtiste = async (req, res) => {
  try {
    const artiste = await Artiste.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!artiste) return res.status(404).json({ message: 'Artiste non trouvé' });
    res.json(artiste);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un artiste
exports.deleteArtiste = async (req, res) => {
  try {
    const artiste = await Artiste.findByIdAndDelete(req.params.id);
    if (!artiste) return res.status(404).json({ message: 'Artiste non trouvé' });
    res.json({ message: 'Artiste supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
