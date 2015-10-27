'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ConcertsSchema = new Schema({
  username: String,
  title: String,
  url: String,
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }
});

module.exports = mongoose.model('Concerts', ConcertsSchema);
