'use strict';

angular.module('indiesoundsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state({
      	name:'concerts', 
        url: '/concerts',
        templateUrl: 'app/concerts/concerts.html',
        controller: 'ConcertsCtrl'
      })
      .state({
      	name:'concert', 
        url: '/concerts/:concertId',
        templateUrl: 'app/concerts/concert.html',
        controller: 'ConcertCtrl'
      })
      .state({
      	name:'newConcert', 
        url: '/newconcert',
        templateUrl: 'app/concerts/newconcert.html',
        controller: 'NewConcertCtrl'
      })
      .state({
      	name:'concertsSettings', 
        url: '/concerts/edit/:concertId',
        templateUrl: 'app/concerts/concertsettings/concertsettings.html',
        controller: 'ConcertSetCtrl'
      });
  });




  