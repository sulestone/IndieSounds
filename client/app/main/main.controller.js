'use strict';

angular.module('indiesoundsApp')
  .controller('MainCtrl', function ($scope, soundcloudService) {
    
    $scope.sounds = [];

    $scope.getAll = function() {
      console.log('getting sounds');
      soundcloudService.getAll().then(function(response) {
        $scope.sounds = response.data;
        var x = $scope.sounds;
        console.log('This is x:', x);
      });
    };

    $scope.getAll();
  });
