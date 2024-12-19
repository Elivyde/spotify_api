const { readData, writeData } = require('./artisteController');

// Ajouter un son à un album
exports.createSon = (req, res) => {
  try {
    const data = readData();
    const artiste = data.artistes.find((artiste) =>
      artiste.albums.some((album) => album.id === req.params.albumId)
    );

    if (!artiste) return res.status(404).json({ message: 'Album non trouvé' });

    const album = artiste.albums.find((album) => album.id === req.params.albumId);

    const newSon = {
      id: Date.now().toString(),
      nom: req.body.nom,
      dateDeCreation: req.body.dateDeCreation,
      artiste: req.body.artiste,
      featuring: req.body.featuring,
      image: req.body.image
    };

    album.sons.push(newSon);
    writeData(data);

    res.status(201).json(newSon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
