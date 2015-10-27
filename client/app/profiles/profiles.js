'use strict';

angular.module('indiesoundsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profiles', {
        url: '/profiles',
        templateUrl: 'app/profiles/profiles.html',
        controller: 'ProfilesCtrl'
      });
  });
