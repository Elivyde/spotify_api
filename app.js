const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const artisteRoutes = require('./routes/artistes');
const albumRoutes = require('./routes/albums');
const sonRoutes = require('./routes/sons');
require('dotenv').config();

const app = express();
app.use(express.json());

// Configurer CORS
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch((error) => console.error('Erreur de connexion à MongoDB :', error));


app.use('/api/artistes', artisteRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/sons', sonRoutes);

// Middleware de gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Une erreur interne est survenue.' });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
