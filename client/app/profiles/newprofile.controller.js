'use strict';

angular.module('indiesoundsApp')
.controller('NewProfileCtrl', function ($scope, $stateParams, Auth, profilesServices, $location, soundcloudService) {

	console.log('Im Alive and kicking');

	$scope.sounds = [];

	Auth.getCurrentUser().$promise.then(function(currentUser) {
		$scope.userid = currentUser._id;
		$scope.name = currentUser.name;
		$scope.newName = $scope.name;
		console.log('$scope.userid is: ' + JSON.stringify($scope.userid + ' ' + $scope.name));
	});

     
	$scope.add = function() {
		soundcloudService.getAll($scope.newArtist).then(function(response) {
    	    $scope.sounds = response.data;

			var profile = {
				name: $scope.name,
				location: $scope.newLocation,
				artist: $scope.newArtist,
				biography: $scope.newBio,
				music: $scope.sounds,
				owner: $scope.userid
			};
			console.log('this is profile' + JSON.stringify(profile));
			profilesServices.add(profile).then(function(res) {
			    console.log('your profle has been added.:' + JSON.stringify(res.data));
			    $location.path('/profiles/' + res.data._id);
			});
		});
	};
});

