'use strict';

angular.module('indiesoundsApp')
  .service('soundcloudService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;

    self.getAll = function(artist) {
      return $http.get('/api/soundclouds/' + artist);
    };

    self.add = function(music) {
  	return $http.post('/api/soundclouds', music);
  	};  
  });
