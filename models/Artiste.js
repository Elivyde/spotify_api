const mongoose = require('mongoose');

const ArtisteSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    nombreDAbonnes: { type: Number, required: true },
    albums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }], // Références vers les albums
    sons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Son' }], // Références vers les sons
    image: { type: String },
    biographie: { type: String }
  },
  { timestamps: true } // Ajoute automatiquement createdAt et updatedAt
);

const Artiste = mongoose.model('Artiste', ArtisteSchema);
module.exports = Artiste;
