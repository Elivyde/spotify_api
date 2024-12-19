require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const artisteRoutes = require('./routes/artistes');
const albumRoutes = require('./routes/albums');
const sonRoutes = require('./routes/sons');

const app = express();
app.use(express.json()); // Parse les données JSON des requêtes

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur MongoDB:', err));

// Routes
app.use('/api/artistes', artisteRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/sons', sonRoutes);

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
