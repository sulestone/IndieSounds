'use strict';

angular.module('indiesoundsApp')
  .controller('SettingsCtrl', function ($scope, User, Auth) {
    $scope.errors = {};
    console.log('This is: ' + $scope.user);
    $scope.changePassword = function(form) {
      $scope.submitted = true;
      if(form.$valid) {
        console.log('This is: ' + $scope.user);
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
          $scope.message = '';
        });
      }
		};
  });
