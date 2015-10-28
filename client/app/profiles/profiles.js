'use strict';

angular.module('indiesoundsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profiles', {
        url: '/profiles/',
        templateUrl: 'app/profiles/profiles.html',
        controller: 'ProfilesCtrl'
      })
      .state('profilesettings', {
        url: '/profiles/:id',
        templateUrl: 'app/profiles/profilesettings/profilesettings.html',
        controller: 'ProfileSetCtrl'
      });
  });