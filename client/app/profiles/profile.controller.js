'use strict';

angular.module('indiesoundsApp')
.controller('ProfileCtrl', function ($scope, $stateParams, Auth, profilesServices) {

	$scope.email = Auth.getCurrentUser().email;
  // var currentUser = Auth.getCurrentUser();
  // var profileId = currentUser.myProfile;
  var profileId = $stateParams.profileId;

$scope.sounds = [];

    $scope.closed = true;

    $scope.openCd = false;

    $scope.active = null;

    $scope.spinning = false;
    $scope.play = 'ion-ios7-play';

    var status = false;
    var musicState = 'new';
    var audioPlayer = false;

  profilesServices.getMyProfile(profileId).then(function(response) {
	$scope.myProfile = response.data;
	console.log('This is my profile: ' + JSON.stringify($scope.myProfile.music[1]));
	$scope.sounds = $scope.myProfile.music;
  });



    // if audioPlayfalse call playMusic, if true call playerToggle
    $scope.playMusic = function(index) {
      $scope.active = index;
      if (musicState === 'new') {
        console.log('new audio');
        musicState = index; 
        audioPlayer = new Audio($scope.sounds[index].uri + '/stream?client_id=853fdb79a14a9ed748ec9fe482e859dd' );
      }
      else if(index !== musicState){
        console.log('2nd or later audio');
        musicState = index;
        audioPlayer.pause();
        audioPlayer = new Audio($scope.sounds[index].uri + '/stream?client_id=853fdb79a14a9ed748ec9fe482e859dd' );
        status = false;
        // audioPlayer.load();
      }
      $scope.playerToggle(index);
    };

    $scope.playerToggle = function() {
      if(status === false) {
        console.log('starting audio');
        $scope.openCd = true;
        $scope.spinning = true;
        status = !status;
        $scope.play = 'ion-ios7-pause';
        audioPlayer.play();
      }
      else {
        console.log('pausing audio');
        $scope.openCd = false;
        $scope.spinning = false;
        $scope.play = 'ion-ios7-play';
        audioPlayer.pause();

        status = !status;
      }
    };
});
