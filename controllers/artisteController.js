const fs = require('fs');
const path = require('path');

// Chemin vers le fichier JSON
const dataPath = path.join(__dirname, '../data.json');

// Lire les données du fichier JSON
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
      albums: [],
      sons: [],
      image: req.body.image
    };

    data.artistes.push(newArtiste);
    writeData(data);

    res.status(201).json(newArtiste);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer tous les artistes
exports.getArtistes = (req, res) => {
  try {
    const data = readData();
    res.json(data.artistes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Récupérer un artiste par ID
exports.getArtisteById = (req, res) => {
  try {
    const data = readData();
    const artiste = data.artistes.find((artiste) => artiste.id === req.params.id);

    if (!artiste) {
      return res.status(404).json({ message: 'Artiste non trouvé' });
    }

    res.json(artiste);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour un artiste
exports.updateArtiste = (req, res) => {
  try {
    const data = readData();
    const artisteIndex = data.artistes.findIndex((artiste) => artiste.id === req.params.id);

    if (artisteIndex === -1) {
      return res.status(404).json({ message: 'Artiste non trouvé' });
    }

    data.artistes[artisteIndex] = {
      ...data.artistes[artisteIndex],
      ...req.body
    };

    writeData(data);

    res.json(data.artistes[artisteIndex]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Supprimer un artiste
exports.deleteArtiste = (req, res) => {
  try {
    const data = readData();
    const filteredArtistes = data.artistes.filter((artiste) => artiste.id !== req.params.id);

    if (filteredArtistes.length === data.artistes.length) {
      return res.status(404).json({ message: 'Artiste non trouvé' });
    }

    data.artistes = filteredArtistes;
    writeData(data);

    res.json({ message: 'Artiste supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
