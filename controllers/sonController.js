const Artiste = require('../models/Artiste');

// Ajouter un son à un album
exports.createSon = async (req, res) => {
  try {
    const artiste = await Artiste.findOne({ "albums._id": req.params.albumId });
    if (!artiste) return res.status(404).json({ message: 'Album non trouvé' });

    const album = artiste.albums.id(req.params.albumId);
    const newSon = {
      nom: req.body.nom,
      dateDeCreation: req.body.dateDeCreation,
      artiste: req.body.artiste,
      featuring: req.body.featuring,
      image: req.body.image
    };

    album.sons.push(newSon);
    await artiste.save();
    res.status(201).json(newSon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Récupérer tous les sons d'un album
exports.getSons = async (req, res) => {
  try {
    const artiste = await Artiste.findOne({ "albums._id": req.params.albumId });
    if (!artiste) return res.status(404).json({ message: 'Album non trouvé' });

    const album = artiste.albums.id(req.params.albumId);
    res.json(album.sons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un son spécifique
exports.getSonById = async (req, res) => {
  try {
    const artiste = await Artiste.findOne({ "albums._id": req.params.albumId });
    if (!artiste) return res.status(404).json({ message: 'Album non trouvé' });

    const album = artiste.albums.id(req.params.albumId);
    const son = album.sons.id(req.params.sonId);
    if (!son) return res.status(404).json({ message: 'Son non trouvé' });
    res.json(son);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un son
exports.updateSon = async (req, res) => {
  try {
    const artiste = await Artiste.findOne({ "albums._id": req.params.albumId });
    if (!artiste) return res.status(404).json({ message: 'Album non trouvé' });

    const album = artiste.albums.id(req.params.albumId);
    const son = album.sons.id(req.params.sonId);
    if (!son) return res.status(404).json({ message: 'Son non trouvé' });

    son.set(req.body);
    await artiste.save();
    res.json(son);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer un son
exports.deleteSon = async (req, res) => {
  try {
    const artiste = await Artiste.findOne({ "albums._id": req.params.albumId });
    if (!artiste) return res.status(404).json({ message: 'Album non trouvé' });

    const album = artiste.albums.id(req.params.albumId);
    const son = album.sons.id(req.params.sonId);
    if (!son) return res.status(404).json({ message: 'Son non trouvé' });

    son.remove();
    await artiste.save();
    res.json({ message: 'Son supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
