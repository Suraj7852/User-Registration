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

describe('Test for email validator', function() {
   it('should return true if valid email', function() {
      let email = validator.emailRegex("surajpj7852@gmail.com");
      assert.equal(email,true);
   });

   it('should return true if valid email', function() {
      let email = validator.emailRegex("abc@yahoo.com");
      assert.equal(email,true);
   });

	it('should return false if not valid email', function() {
      let email = validator.emailRegex("abc");
      assert.equal(email,false);
   });

   it('should return true if valid email', function() {
      let email = validator.emailRegex("abc-00@yahoo.com");
      assert.equal(email,true);
   });

	it('should return true if valid email', function() {
      let email = validator.emailRegex("sur@1gmail.com");
      assert.equal(email,true);
   });

   it('should return false if not valid email', function() {
      let email = validator.emailRegex("abc@%*.com");
      assert.equal(email,false);
   });

	it('should return true if valid email', function() {
      let email = validator.emailRegex("sur+100@gmail.com");
      assert.equal(email,true);
   });

   it('should return true if valid email', function() {
      let email = validator.emailRegex("abc@yahoo.com.com");
      assert.equal(email,true);
   });
});

describe('Test for password validator', function() {
   it('should return true if valid password', function() {
      let password = validator.passwordRegex("Suraj@7852");
      assert.equal(password,true);
   });

   it('should return false if Invalid password', function() {
      let password = validator.passwordRegex("Suraj");
      assert.equal(password,false);
   });

   it('should return false if Invalid password', function() {
      let password = validator.passwordRegex("Aghjkkll$%45");
      assert.equal(password,false);
   });
});

describe('Test for mobile number validator', function() {
   it('should return false if Invalid mobile number', function() {
      let mobileNumber = validator.mobileRegex("9334158709");
      assert.equal(mobileNumber,false);
   });

   it('should return true if valid number', function() {
      let mobileNumber = validator.mobileRegex("91 9334145702");
      assert.equal(mobileNumber,true);
   });
});

