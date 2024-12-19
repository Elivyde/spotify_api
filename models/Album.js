const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  nom: { type: String, required: true }, // Nom de l'album
  dateDeCreation: { type: Date, required: true }, // Date de sortie de l'album
  description: { type: String }, // Description de l'album
  artisteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artiste', required: true }, // Référence à l'artiste
  image: { type: String } // URL de l'image de l'album
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
