'use strict';

angular.module('indiesoundsApp')
  .service('soundcloudService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;

    self.getAll = function() {
      return $http.get('/api/soundclouds/');
    };
  });
