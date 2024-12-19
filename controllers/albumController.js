const fs = require('fs');
const path = require('path');

// Chemin vers le fichier JSON
const dataPath = path.join(__dirname, '../data.json');

// Lire les données depuis le fichier JSON
const readData = () => {
  const data = fs.readFileSync(dataPath, 'utf8');
  return JSON.parse(data);
};

// Écrire les données dans le fichier JSON
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// Créer un album
exports.createAlbum = (req, res) => {
  try {
    const data = readData();
    const newAlbum = {
      id: Date.now().toString(),
      nom: req.body.nom,
      dateDeCreation: req.body.dateDeCreation,
      description: req.body.description,
      artisteId: req.body.artisteId,
      image: req.body.image
    };

    data.albums.push(newAlbum);
    writeData(data);
    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir tous les albums d'un artiste
exports.getAlbumsByArtiste = (req, res) => {
  try {
    const data = readData();
    const albums = data.albums.filter(album => album.artisteId === req.params.artisteId);
    res.json(albums);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
