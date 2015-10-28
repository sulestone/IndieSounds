'use strict';

angular.module('indiesoundsApp')
.controller('ProfileCtrl', function ($scope, $stateParams, Auth, profilesServices) {

	
  // var currentUser = Auth.getCurrentUser();
  // var profileId = currentUser.myProfile;
  var profileId = $stateParams.profileId;

  profilesServices.getMyProfile(profileId).then(function(response) {
	$scope.myProfile = response.data;
	console.log($scope.myProfile);
  });

});
