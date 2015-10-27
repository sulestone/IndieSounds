'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ConcertsSchema = new Schema({
  location: String,
  date: Date,
  time: String,
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }
});

module.exports = mongoose.model('Concerts', ConcertsSchema);
