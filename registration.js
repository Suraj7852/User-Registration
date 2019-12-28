let input = require('readline-sync');
let firstName = input.question("Enter your name: ");
let nameRegex = RegExp('^[a-zA-Z ]{3,30}$');
if(nameRegex.test(firstName))
	console.log("valid firstName");
else
	console.log("Not valid");

let lastName = input.question("Enter last name: ");
if(nameRegex.test(lastName))
        console.log("valid lastName");
else
        console.log("Not valid");

