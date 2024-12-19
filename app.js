const express = require('express');
const artisteRoutes = require('./routes/artistes');
const albumRoutes = require('./routes/albums');
const sonRoutes = require('./routes/sons');

const app = express();
app.use(express.json()); // Pour parser les données JSON

// Routes
app.use('/api/artistes', artisteRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/sons', sonRoutes);

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
