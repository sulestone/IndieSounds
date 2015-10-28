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
  Profiles.create(req.body, function(err, profile) {
    if(err) { return handleError(res, err); }
    var userId = req.user._id;
    User.findById(userId, function (err, user) {
      user.myProfile = profile;
      user.save(function(err) {
        if(err) { return handleError(res, err); }
        return res.status(201).json(profile);
      });
    });
  });
};

// Updates an existing profiles in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Profiles.findById(req.params.id, function (err, profiles) {
    if (err) { return handleError(res, err); }
    if(!profiles) { return res.status(404).send('Not Found'); }
    var updated = _.merge(profiles, req.body);
    updated.save(function (err) {
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