const Artiste = require('../models/Artiste');

// Ajouter un album à un artiste
exports.createAlbum = async (req, res) => {
  try {
    const artiste = await Artiste.findById(req.params.artisteId);
    if (!artiste) return res.status(404).json({ message: 'Artiste non trouvé' });

    const newAlbum = {
      nom: req.body.nom,
      dateDeCreation: req.body.dateDeCreation,
      sons: [],
      image: req.body.image
    };

    artiste.albums.push(newAlbum);
    await artiste.save();
    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Récupérer tous les albums d'un artiste
exports.getAlbums = async (req, res) => {
  try {
    const artiste = await Artiste.findById(req.params.artisteId);
    if (!artiste) return res.status(404).json({ message: 'Artiste non trouvé' });
    res.json(artiste.albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un album spécifique
exports.getAlbumById = async (req, res) => {
  try {
    const artiste = await Artiste.findById(req.params.artisteId);
    if (!artiste) return res.status(404).json({ message: 'Artiste non trouvé' });

    const album = artiste.albums.id(req.params.albumId);
    if (!album) return res.status(404).json({ message: 'Album non trouvé' });
    res.json(album);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un album
exports.updateAlbum = async (req, res) => {
  try {
    const artiste = await Artiste.findById(req.params.artisteId);
    if (!artiste) return res.status(404).json({ message: 'Artiste non trouvé' });

    const album = artiste.albums.id(req.params.albumId);
    if (!album) return res.status(404).json({ message: 'Album non trouvé' });

    album.set(req.body);
    await artiste.save();
    res.json(album);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un album
exports.deleteAlbum = async (req, res) => {
  try {
    const artiste = await Artiste.findById(req.params.artisteId);
    if (!artiste) return res.status(404).json({ message: 'Artiste non trouvé' });

    const album = artiste.albums.id(req.params.albumId);
    if (!album) return res.status(404).json({ message: 'Album non trouvé' });

    album.remove();
    await artiste.save();
    res.json({ message: 'Album supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
