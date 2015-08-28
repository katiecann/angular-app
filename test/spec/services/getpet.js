'use strict';

describe('Service: getPet', function () {

  // load the service's module
  beforeEach(module('angularAppApp'));

  // instantiate service
  var getPet;
  beforeEach(inject(function (_getPet_) {
    getPet = _getPet_;
  }));

  it('should do something', function () {
    expect(!!getPet).toBe(true);
  });

});
