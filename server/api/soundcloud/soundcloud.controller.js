'use strict';

var _ = require('lodash');
var Soundcloud = require('./soundcloud.model');
var SC = require('node-soundcloud');
var clientId = '853fdb79a14a9ed748ec9fe482e859dd';

SC.init({
    id: clientId
});
// Get list of information pulled from soundcloud 
exports.index = function(req, res) {
  SC.get('/tracks', {q: 'beyonce'},
      function(err, track) {
        if(err) { return handleError(res, err); }
        console.log('\n\ntrack.length:', track.length);
        return res.status(200).json(track);
        });
};

// Get a single soundcloud
exports.show = function(req, res) {
  Soundcloud.findById(req.params.id, function (err, soundcloud) {
    if(err) { return handleError(res, err); }
    if(!soundcloud) { return res.status(404).send('Not Found'); }
    return res.json(soundcloud);
  });
};

// Creates a new soundcloud in the DB.
exports.create = function(req, res) {
  Soundcloud.create(req.body, function(err, soundcloud) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(soundcloud);
  });
};

// Updates an existing soundcloud in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Soundcloud.findById(req.params.id, function (err, soundcloud) {
    if (err) { return handleError(res, err); }
    if(!soundcloud) { return res.status(404).send('Not Found'); }
    var updated = _.merge(soundcloud, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(soundcloud);
    });
  });
};

// Deletes a soundcloud from the DB.
exports.destroy = function(req, res) {
  Soundcloud.findById(req.params.id, function (err, soundcloud) {
    if(err) { return handleError(res, err); }
    if(!soundcloud) { return res.status(404).send('Not Found'); }
    soundcloud.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
