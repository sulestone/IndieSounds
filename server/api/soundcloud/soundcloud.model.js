'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SoundcloudSchema = new Schema({
  name: String,
  title: String,
  url: String,
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }
});

module.exports = mongoose.model('Soundcloud', SoundcloudSchema);
