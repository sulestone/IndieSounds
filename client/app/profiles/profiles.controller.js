'use strict';

angular.module('indiesoundsApp')
  .controller('ProfilesCtrl', function ($scope, profilesServices) {
    $scope.message = 'Hello';

$scope.getMyProfile = function() {
	profilesServices.getMyProfile().then(function(response){
		$scope.myProfile = response.data;
		console.log($scope.myProfile);
	});
};
$scope.getMyProfile();

});
