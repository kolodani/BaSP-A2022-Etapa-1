window.onload = function () {
	var email = document.getElementById("emailUser");
	var password = document.getElementById("passwordUser");
	var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

	// set attributes
	email.setAttribute("placeholder", "Email");
	password.setAttribute("placeholder", "Password");

	// validar email
	function validateEmail(email) {
		if (emailExpression.test(email.value)) {
			return true;
		} else {
			return false;
		}
	}

	// validar password
	function validatePassword(password) {
		if (password.value.length > 7) {
			return true;
		} else {
			return false;
		}
	}

	// casilla de vacia
	function emptyField(field) {
		if (field.value == "") {
			return true;
		} else {
			return false;
		}
	}

	// on blur event listener for email
	email.addEventListener("blur", function () {
		if (emptyField(email)) {
            email.classList.add("errorRed");
		} else if (!validateEmail(email)) {
            email.classList.add("errorRed");
		} else {
            email.classList.add("okGreen");
		}
	});

	// on blur event listener for password
	password.addEventListener("blur", function () {
		if (emptyField(password)) {
            password.classList.add("errorRed");
		} else if (!validatePassword(password)) {
            password.classList.add("errorRed");
		} else {
            password.classList.add("okGreen");
		}
	});
}