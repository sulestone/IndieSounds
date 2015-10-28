'use strict';

angular.module('indiesoundsApp')
  .controller('ProfilesCtrl', function ($scope, profilesServices) {
    $scope.message = 'Hello';

	profilesServices.getAll().then(function(response){
		$scope.allProfiles = response.data;
		console.log($scope.allProfiles);
	});


});
