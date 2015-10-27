'use strict';

angular.module('indiesoundsApp')
  .service('concertsService', function ($http) {
    var self = this;
    self.getAll = function() {
      return $http.get('api/concerts/');     //send request and return promise
    };
    self.add = function(concert) {
      return $http.post('/api/concerts/', { concert: concert });
    };

    self.update = function(concert) {
      return $http.put('api/concerts/' + concert._id, { concert: concert});
    };
    self.remove = function(concert) {
      return $http.delete('/api/concerts/' + concert._id);
    };
  });
