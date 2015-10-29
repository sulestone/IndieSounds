'use strict';

angular.module('indiesoundsApp')
  .controller('ConcertsCtrl', function ($scope, concertsService) {
    $scope.message = 'Hello';

    concertsService.getAll().then(function(response) {
      $scope.concerts = response.data;
    });
  });

