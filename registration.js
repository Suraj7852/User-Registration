let input = require('readline-sync');
let firstName = input.question("Enter your name: ");
let nameRegex = RegExp('^[a-zA-Z ]{3,30}$');
let emailRegex = RegExp('^[0-9a-zA-Z]+([-,_,+,.]{1}[0-9A-Za-z]+){0,1}@[0-9A-Za-z]+.[A-Za-z]{1,3}(.[a-zA-Z]{1,3}){0,1}$');
if(nameRegex.test(firstName))
	console.log("valid firstName");
else
	console.log("Not valid");

let lastName = input.question("Enter last name: ");
if(nameRegex.test(lastName))
        console.log("valid lastName");
else
        console.log("Not valid");

let email = input.question("Enter email id");
if(emailRegex.test(email))
        console.log("valid Email");
else
        console.log("Not valid");


