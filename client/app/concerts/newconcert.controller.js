'use strict';

angular.module('indiesoundsApp')
    .controller('NewConcertCtrl', function($scope, $stateParams, Auth, concertsServices) {

        Auth.getCurrentUser().$promise.then(function(currentUser) {
            $scope.userid = currentUser._id;
            console.log('$scope.userid is: ' + JSON.stringify($scope.userid));
        });


        $scope.add = function() {
            var concert = {
                name: $scope.newName,
                location: $scope.newLocation,
                date: $scope.newDate,
                time: $scope.newTime,
                owner: $scope.userid
            };
            console.log("this is concert" + JSON.stringify(concert));
            concertsServices.add(concert).then(function(res) {
                console.log('your profle has been added.:' + JSON.stringify(res.data));
            });
        };
    });
