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

// Créer un son
exports.createSon = (req, res) => {
  try {
    const data = readData();
    const newSon = {
      id: Date.now().toString(),
      nom: req.body.nom,
      dateDeCreation: req.body.dateDeCreation,
      duree: req.body.duree,
      featuring: req.body.featuring,
      genre: req.body.genre,
      albumId: req.body.albumId,
      artisteId: req.body.artisteId,
      image: req.body.image
    };

    data.sons.push(newSon);
    writeData(data);
    res.status(201).json(newSon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir tous les sons d'un artiste
exports.getSonsByArtiste = (req, res) => {
  try {
    const data = readData();
    const sons = data.sons.filter(son => son.artisteId === req.params.artisteId);
    res.json(sons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir tous les sons d'un album
exports.getSonsByAlbum = (req, res) => {
  try {
    const data = readData();
    const sons = data.sons.filter(son => son.albumId === req.params.albumId);
    res.json(sons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
