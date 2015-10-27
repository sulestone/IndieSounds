'use strict';

var _ = require('lodash');
var Concerts = require('./concerts.model');
// connecting profiles model to the concerts model 
var Profile = require('../profiles/profiles.model');



// Get list of concertss
exports.index = function(req, res) {
  Concerts.find(function (err, concertss) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(concertss);
  });
};

// Get a single concerts
exports.show = function(req, res) {
  Concerts.findById(req.params.id, function (err, concerts) {
    if(err) { return handleError(res, err); }
    if(!concerts) { return res.status(404).send('Not Found'); }
    return res.json(concerts);
  });
};

// Creates a new concerts in the DB.
exports.create = function(req, res) {
  Concerts.create(req.body, function(err, concerts) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(concerts);
  });
};

// Updates an existing concerts in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Concerts.findById(req.params.id, function (err, concerts) {
    if (err) { return handleError(res, err); }
    if(!concerts) { return res.status(404).send('Not Found'); }
    var updated = _.merge(concerts, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(concerts);
    });
  });
};

// Deletes a concerts from the DB.
exports.destroy = function(req, res) {
  Concerts.findById(req.params.id, function (err, concerts) {
    if(err) { return handleError(res, err); }
    if(!concerts) { return res.status(404).send('Not Found'); }
    concerts.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}