/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Concerts = require('./concerts.model');

exports.register = function(socket) {
  Concerts.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Concerts.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('concerts:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('concerts:remove', doc);
}