/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Soundcloud = require('./soundcloud.model');

exports.register = function(socket) {
  Soundcloud.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Soundcloud.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('soundcloud:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('soundcloud:remove', doc);
}