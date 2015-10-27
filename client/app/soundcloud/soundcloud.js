'use strict';

angular.module('indiesoundsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('soundcloud', {
        url: '/soundcloud',
        templateUrl: 'app/soundcloud/soundcloud.html',
        controller: 'SoundcloudCtrl'
      });
  });