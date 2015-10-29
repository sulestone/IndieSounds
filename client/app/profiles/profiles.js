'use strict';

angular.module('indiesoundsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state({
        name: 'newprofile',
        url: '/newprofile',
        templateUrl: 'app/profiles/newprofile.html',
        controller: 'NewProfileCtrl'
      })
      .state({
        name: 'profiles',
        url: '/profiles',
        templateUrl: 'app/profiles/profiles.html',
        controller: 'ProfilesCtrl'
      })
      .state({
        name: 'profile',
        url: '/profiles/:profileId',
        templateUrl: 'app/profiles/profile.html',
        controller: 'ProfileCtrl'
      })
      .state({
        name: 'profilesettings',
        url: '/profiles/edit/:profileId',
        templateUrl: 'app/profiles/profilesettings/profilesettings.html',
        controller: 'ProfileSetCtrl'
      });
  });
