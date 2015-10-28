'use strict';

angular.module('indiesoundsApp')
  .controller('ConcertsCtrl', function ($scope) {
    $scope.message = 'Hello';
  });

  function ConcertsCtrl() {
    this.newConcert = {};
    this.concerts = [];
    this.createNewConcert = createNewConcert;

    function createNewConcert() {
      this.concerts.push(this.newConcert);
      this.newConcert = {};
    }
  }
