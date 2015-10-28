'use strict';

angular.module('indiesoundsApp')
  .service('profilesServices', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  var self = this;

  //get all Profiles
  self.getAll = function() {
  	return $http.get('/api/profiles');
  };

  self.getMyProfile = function() {
  	return $http.get('/api/users/me');
  }
  self.add = function(profile) {
  	return $http.post('/api/profiles', {profile: profile});
  };  

  self.update = function(profile) {
  	return $http.put('/api/profiles/' + profile._id, {profile: profile});
  };
});
