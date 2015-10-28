'use strict';

angular.module('indiesoundsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.message = 'Hello';
  });

  angular.module('ui.bootstrap').controller('CarouselCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [
      {name: 'Adele', image: 'http://static.stereogum.com/uploads/2015/08/27152018/Adele-620x410.jpg'},
      {name: 'Radiohead',image: 'http://i.huffpost.com/gen/1622309/images/o-RADIOHEAD-facebook.jpg'},
      {name: 'Mumford and Sons',image: 'http://amherststudent.amherst.edu/sites/default/files/field/image/mumford--sons-4e1192cd90c4d%20(1).jpg'},
      {name: 'Janet Jackson',image: 'http://static1.squarespace.com/static/52fecf57e4b05b37403221de/t/560ede5de4b006ccc1131de2/1443815006540/'},
      {name: 'Macklemore',image: 'http://technori.com/wp-content/uploads/tumblr_static_image.jpeg'}
    ];
  });
