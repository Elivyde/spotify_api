const { readData, writeData } = require('./artisteController');

// Ajouter un album à un artiste
exports.createAlbum = (req, res) => {
  try {
    const data = readData();
    const artiste = data.artistes.find((artiste) => artiste.id === req.params.artisteId);

    if (!artiste) return res.status(404).json({ message: 'Artiste non trouvé' });

    const newAlbum = {
      id: Date.now().toString(),
      nom: req.body.nom,
      dateDeCreation: req.body.dateDeCreation,
      sons: [],
      image: req.body.image
    };

    artiste.albums.push(newAlbum);
    writeData(data);

    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer les albums d'un artiste
exports.getAlbums = (req, res) => {
  try {
    const data = readData();
    const artiste = data.artistes.find((artiste) => artiste.id === req.params.artisteId);

    if (!artiste) return res.status(404).json({ message: 'Artiste non trouvé' });

    res.json(artiste.albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
