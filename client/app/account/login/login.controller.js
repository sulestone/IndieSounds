'use strict';

angular.module('indiesoundsApp')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to user profile page
          // will need to add a path to go to users profile page - user.profile.id
          Auth.getCurrentUser().$promise.then(function(currentUser) {
            console.log('currentUser.name:', currentUser.name);
            $location.path('/profiles/' + currentUser.myProfile);
          });
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };

  });
