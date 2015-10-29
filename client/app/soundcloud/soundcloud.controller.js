'use strict';

angular.module('indiesoundsApp')
  .controller('SoundcloudCtrl', function ($scope, soundcloudService) {

    $scope.sounds = [];

    $scope.closed = true;

    $scope.openCd = false;

    $scope.active = null;

    $scope.spinning = false;
    $scope.play = 'ion-ios7-play';

    var status = false;
    var musicState = 'new';
    var audioPlayer = false;

    $scope.getAll = function() {
      soundcloudService.getAll().then(function(response) {
        $scope.sounds = response.data;
      });
    };

    $scope.getAll();


    // if audioPlayfalse call playMusic, if true call playerToggle
    $scope.playMusic = function(index) {
      $scope.active = index;
      if (musicState == 'new') {
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

    $scope.playerToggle = function(index) {
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
