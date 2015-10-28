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
	  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Profiles', ProfilesSchema);
