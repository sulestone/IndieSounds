'use strict';

var _ = require('lodash');
var Profiles = require('./profiles.model');

// Get list of profiless
exports.index = function(req, res) {
  Profiles.find(function (err, profiless) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(profiless);
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
  Profiles.create(req.body, function(err, profiles) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(profiles);
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