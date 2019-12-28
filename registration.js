let input = require('readline-sync');
let firstName = input.question("Enter your name");
let firstNameRegex = RegExp('^[a-zA-Z ]{3,30}$');
if(firstNameRegex.test(firstName))
	console.log("valid firstName");
else
	console.log("Not valid");


