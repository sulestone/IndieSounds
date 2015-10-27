'use strict';

angular.module('indiesoundsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('concerts', {
        url: '/concerts',
        templateUrl: 'app/concerts/concerts.html',
        controller: 'ConcertsCtrl'
      });
  });