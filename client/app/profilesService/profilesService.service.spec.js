'use strict';

describe('Service: profilesService', function () {

  // load the service's module
  beforeEach(module('indiesoundsApp'));

  // instantiate service
  var profilesService;
  beforeEach(inject(function (_profilesService_) {
    profilesService = _profilesService_;
  }));

  it('should do something', function () {
    expect(!!profilesService).toBe(true);
  });

});
