const express = require('express');
const mongoose = require('mongoose');
const artisteRoutes = require('./routes/artistes');
const albumRoutes = require('./routes/albums');
const sonRoutes = require('./routes/sons');

const app = express();
app.use(express.json());

// Routes
app.use('/api/artistes', artisteRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/sons', sonRoutes);

// Démarrer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
