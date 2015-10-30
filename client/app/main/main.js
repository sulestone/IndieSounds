'use strict';

angular.module('indiesoundsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        onEnter: function($rootScope) {
			$rootScope.theBackgroundImageUrl = '../assets/images/oldradio.jpg';
    	},
    	onExit: function($rootScope) {
    		$rootScope.theBackgroundImageUrl = '';	
    	}
     });
});