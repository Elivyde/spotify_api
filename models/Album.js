const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    dateDeCreation: { type: Date, required: true },
    description: { type: String },
    artisteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artiste', required: true },
    image: { type: String },
  },
  { timestamps: true } // Ajoute les champs createdAt et updatedAt automatiquement
);

const Album = mongoose.model('Album', AlbumSchema);
module.exports = Album;
