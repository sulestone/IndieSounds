'use strict';

angular.module('indiesoundsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.message = 'Hello';
  });

  angular.module('ui.bootstrap').controller('CarouselCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.slides = [
      {name: 'M.I.A', image: '/assets/images/photo_mia.jpg'},
      {name: 'Santigold',image: '/assets/images/santigold.jpg'},
      {name: 'Santigold',image: '/assets/images/macklemore.jpg'}
    ];
  });
