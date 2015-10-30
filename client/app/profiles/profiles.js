'use strict';

angular.module('indiesoundsApp')
  .config(function ($stateProvider) {
    $stateProvider
      //Allow a user to add information to their profile
      .state({
        name: 'newprofile',
        url: '/newprofile',
        templateUrl: 'app/profiles/newprofile.html',
        controller: 'NewProfileCtrl'
      })
      //profiles listing for all IndieSounds users
      .state({
        name: 'profiles',
        url: '/profiles',
        templateUrl: 'app/profiles/profiles.html',
        controller: 'ProfilesCtrl'
      })
      //show individual user profile
      .state({
        name: 'profile',
        url: '/profiles/:profileId',
        templateUrl: 'app/profiles/profile.html',
        controller: 'ProfileCtrl'
      })
      //show a user's profile settings
      .state({
        name: 'profilesettings',
        url: '/profiles/edit/:profileId',
        templateUrl: 'app/profiles/profilesettings/profilesettings.html',
        controller: 'ProfileSetCtrl'
      });
  });
