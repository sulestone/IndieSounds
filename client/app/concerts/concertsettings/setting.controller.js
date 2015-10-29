'use strict';

angular.module('indiesoundsApp')
   .controller('ConcertSetCtrl', function($scope, $stateParams, Auth, concertsService) {

       var concertId = $stateParams.concertId;
       console.log('this is concertId: ' + concertId);


       concertsServices.getMyProfile(concertId).then(function(response) {
           $scope.myProfile = response.data;
           console.log($scope.myProfile);
       });

       $scope.updateProfile = function() {
           concertsServices.update(concertId).then(function(response) {
               console.log('concert successfully updated: ' + response);
               $location.path('/concerts/' + concertId);
           });
       };

   });
