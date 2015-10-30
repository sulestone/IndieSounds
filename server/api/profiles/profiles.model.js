'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProfilesSchema = new Schema({
	  name: String,
	  location: String,
	  artist: String,
	  music: [],
	  likes: [],
	  biography: String,
	  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Profiles', ProfilesSchema);
