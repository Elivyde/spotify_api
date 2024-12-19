const mongoose = require('mongoose');

const SonSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  dateDeCreation: { type: Date, required: true },
  artiste: { type: String, required: true },
  featuring: [{ type: String }],
  image: { type: String }
});

const AlbumSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  dateDeCreation: { type: Date, required: true },
  sons: [SonSchema],
  image: { type: String }
});

const ArtisteSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  nombreDAbonnes: { type: Number, required: true },
  albums: [AlbumSchema],
  sons: [SonSchema],
  image: { type: String }
});

const Artiste = mongoose.model('Artiste', ArtisteSchema);
module.exports = Artiste;
