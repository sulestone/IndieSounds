'use strict';

angular.module('indiesoundsApp')
  .controller('MainCtrl', function ($scope, soundcloudService) {
    
    $scope.sounds = [];

    $scope.closed = true;

    $scope.open = false;

    $scope.spinning = false;
    $scope.play = "ion-ios7-play";

    var status = false;
    var musicState;

    $scope.getAll = function() {
      soundcloudService.getAll().then(function(response) {
        $scope.sounds = response.data;
      });
    };

    $scope.getAll();

    $scope.playMusic = function(index) {
      if (index !== musicState) {
        musicState = index;
        var audioPlayer = new Audio($scope.sounds[index].uri + '/stream?client_id=853fdb79a14a9ed748ec9fe482e859dd' );
        audioPlayer.play();
        $scope.playerToggle(index);
      }
    }

    $scope.playerToggle = function(index) {
      
      if(status === false) {
        $scope.open = true;
        $scope.spinning = true;
        status = !status;
        $scope.play = "ion-ios7-pause"; 
      }
      else {
        $scope.open = false;
        $scope.spinning = false;
        $scope.play = "ion-ios7-play";
        audioPlayer.pause();

        status = !status;
      }
    };
  });
