let validator = require('./registration');
let input = require('readline-sync');
let firstName = input.question("Enter your name: ");

let fName = validator.nameRegex(firstName);
if(fName)
	console.log("valid firstName");
else
	console.log("Not valid");

let lastName = input.question("Enter last name: ");
let lName = validator.nameRegex(lastName)
if(lName)
        console.log("valid lastName");
else
        console.log("Not valid");

let email = input.question("Enter email id");
let emailValidator = validator.emailRegex(email);
if(emailValidator)
        console.log("valid Email");
else
        console.log("Not valid");

let password = input.question("Enter password");
let passwordValidator = validator.emailRegex(password);
if(passwordValidator)
        console.log("valid Email");
else
        console.log("Not valid");

