'use strict';

angular.module('indiesoundsApp')
  .service('profilesService', function ($http) {    //pass $http into function so that the code below will work
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;
    self.getAll = function() {
      return $http.get('api/profiles/');    //send request and return promise
    };

    self.add = function(profile) {
      return $http.post('/api/profiles/', { profile: profile });
    };

    self.update = function(profile) {
      return $http.put('api/profiles/' + profile._id, { profile: profile});
    };
  });
