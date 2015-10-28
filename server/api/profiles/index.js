'use strict';

var express = require('express');
var controller = require('./profiles.controller');
// requiring the authorization files to check auth
var auth = require('../../auth/auth.service');

var router = express.Router();

// A user can search and view others profile
router.get('/', controller.index);
router.get('/:id', controller.show);
// A user has to be logged in to do the following to their profile
router.post('/',      auth.isAuthenticated(), controller.create);
router.put('/:id',    auth.isAuthenticated(), controller.update);
router.patch('/:id',  auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;