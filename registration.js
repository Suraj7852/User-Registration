
class userValidator {
	nameRegex(name) {
		let nameRegex = RegExp('^[A-Z]{1}[a-z ]{2,30}$');
		return nameRegex.test(name);
	}

	emailRegex(email) {
		let emailRegex = RegExp('^[0-9a-zA-Z]+([-,_,+,.]{1}[0-9A-Za-z]+){0,1}@[0-9A-Za-z]+.[A-Za-z]{1,3}(.[a-zA-Z]{1,3}){0,1}$');
		return emailRegex.test(email);
	}

	passwordRegex(pwd){
		let passwordRegex = RegExp("^[a-zA-Z0-9!@#$%^&*()<>-_+]{8,}");
		let uppercaseRegex = RegExp("[A-Z]");
		let digitRegex = RegExp("[0-9]");
		let specialCharacter = RegExp("^[a-zA-Z0-9]*[!@#$%^&*()<>-_+]{1}[a-zA-Z0-9]*$");
		if(specialCharacter.test(pwd)){
			return passwordRegex.test(pwd) && uppercaseRegex.test(pwd) && digitRegex.test(pwd);
		}else{
			return false;
		}
	}

	mobileRegex(num) {
		let mobileRegex=RegExp("^[0-9]{2}[ ]{1}[0-9]{10}$");
           	return mobileRegex.test(num);
	}
}
module.exports = new userValidator();

