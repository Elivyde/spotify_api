const mongoose = require('mongoose');

const SonSchema = new mongoose.Schema(
  {
    nom: { type: String, required: true },
    dateDeCreation: { type: Date, required: true },
    duree: { type: String, match: /^[0-9]{1,2}:[0-9]{2}$/ },
    featuring: [{ type: String }],
    genre: { type: String },
    artisteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Artiste', required: true },
    albumId: { type: mongoose.Schema.Types.ObjectId, ref: 'Album', default: null },
    image: { type: String },
    url: { type: String },
  },
  { timestamps: true }
);

const Son = mongoose.model('Son', SonSchema);
module.exports = Son;
