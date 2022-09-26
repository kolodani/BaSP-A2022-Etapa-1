window.onload = function () {
	var email = document.getElementById("emailUser");
	var password = document.getElementById("passwordUser");
	var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
	var continueButton = document.getElementById("continueButton");
	var pEmail = document.createElement("p");
	var pPassword = document.createElement("p");
	var emailCorrect = false;
	var passwordCorrect = false;
	var emailError = "Email is empty";
	var passwordError = "Password is empty";
	
	email.setAttribute("placeholder", "Email");
	password.setAttribute("placeholder", "Password");
	
	function emailTrue() {
		emailCorrect = true;
	}
	function emailFalse() {
		emailCorrect = false;
	}
	function passwordTrue() {
		passwordCorrect = true;
	}
	function passwordFalse() {
		passwordCorrect = false;
	}
	
	function errorInEmail(a) {
		emailError = a;
	}
	function errorInPassword(a) {
		passwordError = a;
	}

	function validateEmail(email) {
		if (emailExpression.test(email.value)) {
			return true;
		} else {
			return false;
		}
	}

	function validatePassword(password) {
		if (password.value.length > 7) {
			return true;
		} else {
			return false;
		}
	}

	function emptyField(field) {
		if (field.value == "") {
			return true;
		} else {
			return false;
		}
	}

	email.onblur = function () {
		if (emptyField(email)) {
			email.classList.add("errorRed");
			pEmail.innerHTML = "Email is required";
			email.parentNode.appendChild(pEmail);
			emailFalse();
			errorInEmail(pEmail.innerHTML);
		} else if (!validateEmail(email)) {
			email.classList.add("errorRed");
			pEmail.innerHTML = "Email is not valid";
			email.parentNode.appendChild(pEmail);
			emailFalse();
			errorInEmail(pEmail.innerHTML);
		} else {
			email.classList.add("okGreen");
			pEmail.innerHTML = "Email is valid";
			email.parentNode.appendChild(pEmail);
			emailTrue();
			errorInEmail(pEmail.innerHTML);
		}
	};

	password.onblur = function () {
		if (emptyField(password)) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password is required";
			password.parentNode.appendChild(pPassword);
			passwordFalse();
			errorInPassword(pPassword.innerHTML);
		} else if (!validatePassword(password)) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password is not valid";
			password.parentNode.appendChild(pPassword);
			passwordFalse();
			errorInPassword(pPassword.innerHTML);
		} else {
			password.classList.add("okGreen");
			pPassword.innerHTML = `Password is valid`;
			password.parentNode.appendChild(pPassword);
			passwordTrue();
			errorInPassword(pPassword.innerHTML);
		}
	};

	email.onfocus = function () {
		email.classList.remove("errorRed", "okGreen");
	};

	password.onfocus = function () {
		password.classList.remove("errorRed", "okGreen");
	};
	
	// on submit event
	continueButton.onclick = function () {
		if (emailCorrect && passwordCorrect) {
			alert("Welcome to the system\n" + "Email: " + email.value + "\nPassword: " + password.value);
		} else {
			alert("Please, check your data\n" + "Email: " + emailError + "\nPassword: " + passwordError);
		}
	};
}