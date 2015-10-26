'use strict';

angular.module('indiesoundsApp')
  .controller('MainCtrl', function ($scope, soundcloudService) {

    $scope.sounds = [];

    $scope.closed = true;

    $scope.open = false;

    var status = false;

    $scope.getAll = function() {
      soundcloudService.getAll().then(function(response) {
        $scope.sounds = response.data;
      });
    };

    $scope.getAll();

    $scope.playerToggle = function() {

      if(status === false) {
        $scope.open = true;

        status = !status;
      }
      else {
        $scope.open = false;

        status = !status;
      }
    };

  });
