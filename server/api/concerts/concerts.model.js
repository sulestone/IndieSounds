'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ConcertsSchema = new Schema({
  	name: String,
  	location: String,
  	date: Date,
  	time: String,
  	owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Concerts', ConcertsSchema);
