'use strict';

angular.module('indiesoundsApp')
    .controller('ProfileSetCtrl', function ($scope, $stateParams, Auth, $location, profilesServices) {



        var profileId = $stateParams.profileId;
        console.log('this is profileid: ' + profileId);


        profilesServices.getMyProfile(profileId).then(function(response) {
            $scope.myProfile = response.data;
            console.log($scope.myProfile);
        });

        $scope.updateProfile = function(profile) {
            profilesServices.update(profile).then(function(response) {
                console.log('profile successfully updated: ' + response);
                $location.path('/profiles/' + profileId);
            });
        };

         $scope.deleteProfile = function (profileId) {
            profilesServices.delete(profileId).then(function() {
                console.log('profile successfully deleted');
            });
        };
    });
