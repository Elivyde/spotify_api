const Son = require('../models/Son');

// Créer un son
exports.createSon = async (req, res) => {
  try {
    const { nom, dateDeCreation, duree, featuring, genre, albumId, artisteId, image } = req.body;
    const newSon = new Son({ nom, dateDeCreation, duree, featuring, genre, albumId, artisteId, image });
    await newSon.save();
    res.status(201).json(newSon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer tous les sons
exports.getAllSons = async (req, res) => {
  try {
    const sons = await Son.find();
    res.json(sons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer les sons d'un artiste
exports.getSonsByArtiste = async (req, res) => {
  try {
    const { artisteId } = req.params;
    const sons = await Son.find({ artisteId });
    res.json(sons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer les sons d'un album
exports.getSonsByAlbum = async (req, res) => {
  try {
    const { albumId } = req.params;
    const sons = await Son.find({ albumId });
    res.json(sons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un son par ID
exports.getSonById = async (req, res) => {
  try {
    const son = await Son.findById(req.params.id).populate('artisteId').populate('albumId');
    res.json(son);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un son
exports.updateSon = async (req, res) => {
  try {
    const updatedSon = await Son.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedSon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un son
exports.deleteSon = async (req, res) => {
  try {
    const deletedSon = await Son.findByIdAndDelete(req.params.id);
    res.json({ message: 'Son supprimé avec succès.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
