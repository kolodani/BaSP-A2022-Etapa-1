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

	function serverRequest() {
		var url = "https://basp-m2022-api-rest-server.herokuapp.com/login?email=" + email.value + 
		"&password=" + password.value;
		fetch(url)
		.then(function(res) {
			return res.json();
		})
		.then(function(data) {
			if (data.success) {
				alert("Welcome " + email.value + "\n" + "The result of your request: " + data.msg);
			} else {
				alert("Error !!!\n" + "The result of your request: " + data.msg);
			}
		})
		.catch(function(error) {
			alert("Error !!!\n" + error);
		})
	}

	email.onblur = function () {
		if (email.value == "") {
			email.classList.add("errorRed");
			pEmail.innerHTML = "Email is required";
			email.parentNode.appendChild(pEmail);
			emailCorrect = false;
			emailError = pEmail.innerHTML;
		} else if (!emailExpression.test(email.value)) {
			email.classList.add("errorRed");
			pEmail.innerHTML = "Email is not valid";
			email.parentNode.appendChild(pEmail);
			emailCorrect = false;
			emailError = pEmail.innerHTML;
		} else {
			email.classList.add("okGreen");
			pEmail.innerHTML = "Email is valid";
			email.parentNode.appendChild(pEmail);
			emailCorrect = true;
			emailError = pEmail.innerHTML;
		}
	};

	password.onblur = function () {
		var passwordSlipt = password.value.split("");
		var space = 0, number = 0, letter = 0, special = 0;
		for (var i = 0; i < passwordSlipt.length; i++) {
			if (passwordSlipt[i] == " ") {
				space++;
			} else if (passwordSlipt[i].toUpperCase() !== passwordSlipt[i].toLowerCase()) {
				letter++;
			} else if (passwordSlipt[i] == parseInt(passwordSlipt[i])) {
				number++;
			}else {
				special++;
			}
		}
		if (password.value == "") {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password is required";
			password.parentNode.appendChild(pPassword);
			passwordCorrect = false;
			passwordError = pPassword.innerHTML;
		} else if (special > 0) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password invalid, contains special characters";
			password.parentNode.appendChild(pPassword);
			passwordCorrect = false;
			passwordError = pPassword.innerHTML;
		} else if (space > 0) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password invalid, contains spaces";
			password.parentNode.appendChild(pPassword);
			passwordCorrect = false;
			passwordError = pPassword.innerHTML;
		} else if (letter == 0) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password invalid, contains no letters";
			password.parentNode.appendChild(pPassword);
			passwordCorrect = false;
			passwordError = pPassword.innerHTML;
		} else if (number == 0) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password invalid, contains no numbers";
			password.parentNode.appendChild(pPassword);
			passwordCorrect = false;
			passwordError = pPassword.innerHTML;
		} else if (password.value.length < 8) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password is too short";
			password.parentNode.appendChild(pPassword);
			passwordCorrect = false;
			passwordError = pPassword.innerHTML;
		} else {
			password.classList.add("okGreen");
			pPassword.innerHTML = `Password is valid`;
			password.parentNode.appendChild(pPassword);
			passwordCorrect = true;
			passwordError = pPassword.innerHTML;
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
			serverRequest();
		} else {
			alert("Please, check your data\n" + "Email: " + emailError + "\nPassword: " + passwordError);
		}
	};
}