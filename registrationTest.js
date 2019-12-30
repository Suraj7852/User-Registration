var assert = require('assert');
var validator = require('./registration.js');

describe('Test for user name validator', function() {
	it('should return true if valid name', function() {
		let firstName = validator.nameRegex("suraj");
		assert.equal(firstName,false);
	});

	it('should return true if valid name', function() {
      let firstName = validator.nameRegex("Suraj");
      assert.equal(firstName,true);
   });
});
