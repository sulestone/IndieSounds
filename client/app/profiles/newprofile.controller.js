'use strict';

angular.module('indiesoundsApp')
.controller('NewProfileCtrl', function ($scope, $stateParams, Auth, profilesServices, $location) {

	console.log('Im Alive and kicking');

	Auth.getCurrentUser().$promise.then(function(currentUser) {
		$scope.userid = currentUser._id;
		console.log('$scope.userid is: ' + JSON.stringify($scope.userid));
	});
	

	$scope.add = function() {
		var profile = {
			name: $scope.newName,
			location: $scope.newLocation,
			genres: $scope.newGenres,
			biography: $scope.newBio,
			owner: $scope.userid
		};
		console.log("this is profile" + JSON.stringify(profile));
		profilesServices.add(profile).then(function(res) {
		    console.log('your profle has been added.:' + JSON.stringify(res.data));
		});
	};
});

