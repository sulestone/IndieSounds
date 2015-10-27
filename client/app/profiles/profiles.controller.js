'use strict';

angular.module('indiesoundsApp')
  .controller('ProfilesCtrl', function ($scope, profilesService) {
    $scope.profiles = [];    // This line will store all JSON objects for profile into an empty array
    $scope.getAll = function() {
      profilesService.getAll().then(function(response) {
        $scope.profiles = response.data;
        console.log($scope.profiles);
      });
    };
    $scope.getAll();
    console.log($scope.profiles);
  });
