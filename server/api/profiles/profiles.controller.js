'use strict';

var _ = require('lodash');
var Profiles = require('./profiles.model');
// adding the User schema to be be able to search the User db
var User = require('../user/user.model');

//Lookup  user by their id when called
function findProfileById(user, id) {
  return _.find(user.userProfile, function(profile) {
    return profile._id.equals(id);
  });
}

// Get list of profiles
exports.index = function(req, res) {
  Profiles.find(function (err, profiles) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(profiles);
  });
};

// Get a single profiles
exports.show = function(req, res) {
  Profiles.findById(req.params.id, function (err, profiles) {
    if(err) { return handleError(res, err); }
    if(!profiles) { return res.status(404).send('Not Found'); }
    return res.json(profiles);
  });
};

// Creates a new profiles in the DB.
exports.create = function(req, res) {
  var UserId = req.user._id;
  User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if (!user) { return res.status(404).send('Not Found'); }
    var userinfo = {
      name: req.body.name,
      location: req.body.location,
      genres: req.body.genres,
      biography: req.body.biography
    };
  user.userProfile.push(new Profile(userinfo));
  user.save(function() {
    return res.status(201).json(profiles);
    });
  });
};

// Updates an existing profiles in the DB.
exports.update = function(req, res) {
    var UserId = req.user._id;
    User.findById(userId, function(err, user) {
    if (err) { return handleError(res, err); }
    if(!user) { return res.status(404).send('Not Found'); }
    var userinfo = findProfileById(user, req.params.id); 
    console.log(req.body);
    _.merge(userinfo, req.body);
    user.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(profiles);
    });
  });
};

// Deletes a profiles from the DB.
exports.destroy = function(req, res) {
  Profiles.findById(req.params.id, function (err, profiles) {
    if(err) { return handleError(res, err); }
    if(!profiles) { return res.status(404).send('Not Found'); }
    profiles.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}