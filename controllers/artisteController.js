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

// Créer un artiste
exports.createArtiste = (req, res) => {
  try {
    const data = readData();
    const newArtiste = {
      id: Date.now().toString(),
      nom: req.body.nom,
      nombreDAbonnes: req.body.nombreDAbonnes,
      genres: req.body.genres,
      image: req.body.image,
      biographie: req.body.biographie
    };

    data.artistes.push(newArtiste);
    writeData(data);
    res.status(201).json(newArtiste);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtenir tous les artistes
exports.getArtistes = (req, res) => {
  try {
    const data = readData();
    res.json(data.artistes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
