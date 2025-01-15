const Album = require('../models/Album');

// Créer un album
exports.createAlbum = async (req, res) => {
  try {
    const { nom, dateDeCreation, description, artisteId, image } = req.body;
    if (!nom || !dateDeCreation || !artisteId) {
      return res.status(400).json({ error: 'Champs manquants ou invalides.' });
    }
    const newAlbum = new Album({ nom, dateDeCreation, description, artisteId, image });
    await newAlbum.save();
    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer les albums d'un artiste
exports.getAlbumsByArtiste = async (req, res) => {
  try {
    const { artisteId } = req.params;
    const albums = await Album.find({ artisteId });
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un album par ID
exports.getAlbumById = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id).populate('artisteId');
    if (!album) {
      return res.status(404).json({ error: 'Album non trouvé.' });
    }
    res.json(album);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un album
exports.updateAlbum = async (req, res) => {
  try {
    const updatedAlbum = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAlbum);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un album
exports.deleteAlbum = async (req, res) => {
  try {
    const deletedAlbum = await Album.findByIdAndDelete(req.params.id);
    res.json({ message: 'Album supprimé avec succès.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
