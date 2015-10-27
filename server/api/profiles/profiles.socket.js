/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Profiles = require('./profiles.model');

exports.register = function(socket) {
  Profiles.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Profiles.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('profiles:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('profiles:remove', doc);
}