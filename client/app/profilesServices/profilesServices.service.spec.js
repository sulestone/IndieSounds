'use strict';

describe('Service: profilesServices', function () {

  // load the service's module
  beforeEach(module('indiesoundsApp'));

  // instantiate service
  var profilesServices;
  beforeEach(inject(function (_profilesServices_) {
    profilesServices = _profilesServices_;
  }));

  it('should do something', function () {
    expect(!!profilesServices).toBe(true);
  });

});
