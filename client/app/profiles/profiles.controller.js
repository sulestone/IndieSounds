'use strict';

angular.module('indiesoundsApp')
  .controller('ProfilesCtrl', function ($scope, profilesService) {

    $scope.profiles = [];    // This line will store all JSON objects for profile into an empty array
    $scope.newProfileName = '';
    $scope.newProfileLocation = '';
    $scope.newProfileGenres = '';
    $scope.newProfileBiography = '';

    $scope.getAll = function() {
      profilesService.getAll().then(function(response) {
        $scope.profiles = response.data;
      });
    };
    $scope.getAll();
    console.log($scope.profiles);
    // The function below will implement image files into the user profile
    $scope.imageStrings = [];

    $scope.processFiles = function(files){
      angular.forEach(files, function(flowFile, i){
         var fileReader = new FileReader();
            fileReader.onload = function (event) {
              var uri = event.target.result;
                $scope.imageStrings[i] = uri;
            };
            fileReader.readAsDataURL(flowFile.file);
          });
        };

    $scope.add = function() {
      var newProfile = {
        name: $scope.newProfileName,
        location: $scope.newProfileLocation,
        genres: $scope.newProfileGenres,
        biography: $scope.newProfileBiography };

        profilesService.add(newProfile).then(function(response) {
          // $state.go here to redirect to different url
          console.log(response);
          $scope.newProfileName = '';
          $scope.newProfileLocation = '';
          $scope.newProfileGenres = '';
          $scope.newProfileBiography = '';
        });
      };
  });
  // .controller('newProfilesCtrl', function() {
  //
  // });
