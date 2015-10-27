'use strict';

describe('Controller: ConcertsCtrl', function () {

  // load the controller's module
  beforeEach(module('indiesoundsApp'));

  var ConcertsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConcertsCtrl = $controller('ConcertsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
