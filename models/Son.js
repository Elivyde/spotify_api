const mongoose = require('mongoose');

const sonSchema = new mongoose.Schema({
  nom: { type: String, required: true }, // Nom du son
  dateDeCreation: { type: Date, required: true }, // Date de sortie du son
  duree: { type: String }, // Durée du son (format "mm:ss")
  featuring: [{ type: String }], // Artistes en featuring
  genre: { type: String }, // Genre musical
  artisteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artiste', required: true }, // Référence à l'artiste
  albumId: { type: mongoose.Schema.Types.ObjectId, ref: 'Album', default: null }, // Référence à l'album (null si le son est indépendant)
  image: { type: String } // URL de l'image associée au son
});

const Son = mongoose.model('Son', sonSchema);

module.exports = Son;
