'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProfilesSchema = new Schema({
  name: String,
  location: String,
  genres: String,
  image: { profile: String, img: [] },
  likes: [],
  biography: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  artistMusic: { type: mongoose.Schema.Types.ObjectId, ref: 'Soundcloud' }
});

module.exports = mongoose.model('Profiles', ProfilesSchema);
