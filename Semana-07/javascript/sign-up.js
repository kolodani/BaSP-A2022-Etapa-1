window.onload = function () {
	// create variables
	var name = document.getElementById("name");
	var lastName = document.getElementById("lastName");
	var ID = document.getElementById("ID");
	var dateOfBirth = document.getElementById("dateOfBirth");
	var dateOfBirthServer;
	var phoneNumber = document.getElementById("phoneNumber");
	var address = document.getElementById("address");
	var locality = document.getElementById("locality");
	var postalCode = document.getElementById("postalCode");
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var confirmPassword = document.getElementById("confirmPassword");
	var continueButton = document.getElementById("continueButton");

	// expresion to compare
	var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

	// create elements
	var pName = document.createElement("p");
	var pLastName = document.createElement("p");
	var pID = document.createElement("p");
	var pDateOfBirth = document.createElement("p");
	var pPhoneNumber = document.createElement("p");
	var pAddress = document.createElement("p");
	var pLocality = document.createElement("p");
	var pPostalCode = document.createElement("p");
	var pEmail = document.createElement("p");
	var pPassword = document.createElement("p");
	var pConfirmPassword = document.createElement("p");

	// bollean variables
	var nameCorrect = false;
	var lastNameCorrect = false;
	var IDCorrect = false;
	var dateOfBirthCorrect = false;
	var phoneNumberCorrect = false;
	var addressCorrect = false;
	var localityCorrect = false;
	var postalCodeCorrect = false;
	var emailCorrect = false;
	var passwordCorrect = false;
	var confirmPasswordCorrect = false;

	// error messages
	var nameError = "Name is required";
	var lastNameError = "Last name is required";
	var IDError = "ID is required";
	var dateOfBirthError = "Date of birth is required";
	var phoneNumberError = "Phone number is required";
	var addressError = "Address is required";
	var localityError = "Locality is required";
	var postalCodeError = "Postal code is required";
	var emailError = "Email is required";
	var passwordError = "Password is required";
	var confirmPasswordError = "Confirm password is required";

	name.setAttribute("placeholder", "Name");
	lastName.setAttribute("placeholder", "Last Name");
	ID.setAttribute("placeholder", "ID");
	dateOfBirth.setAttribute("placeholder", "Date of Birth");
	phoneNumber.setAttribute("placeholder", "Phone Number");
	address.setAttribute("placeholder", "Address");
	locality.setAttribute("placeholder", "Locality");
	postalCode.setAttribute("placeholder", "Postal Code");
	email.setAttribute("placeholder", "Email");
	password.setAttribute("placeholder", "Password");
	confirmPassword.setAttribute("placeholder", "Confirm Password");

	// validate is only letters
	function onlyLetters(a) {
		var aSplit = a.value.split("");
		var letters = 0;
		for (var i = 0; i < aSplit.length; i++) {
			if (aSplit[i].toLowerCase() != aSplit[i].toUpperCase()) {
				letters++;
			}
		}
		if (letters == aSplit.length) {
			return true;
		} else {
			return false;
		}
	}

	// validate is only numbers
	function onlyNumbers(a) {
		var aSplit = a.value.split("");
		var numbers = 0;
		for (var i = 0; i < aSplit.length; i++) {
			if (aSplit[i] == parseInt(aSplit[i])) {
				numbers++;
			}
		}
		if (numbers == aSplit.length) {
			return true;
		} else {
			return false;
		}
	}

	function serverRequest() {
		var url =
			"https://basp-m2022-api-rest-server.herokuapp.com/signup?name=" +
			name.value +
			"&lastName=" +
			lastName.value +
			"&dni=" +
			ID.value +
			"&dob=" +
			dateOfBirthServer +
			"&phone=" +
			phoneNumber.value +
			"&address=" +
			address.value +
			"&city=" +
			locality.value +
			"&zip=" +
			postalCode.value +
			"&email=" +
			email.value +
			"&password=" +
			password.value;
		fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				if (data.success) {
					saveInLocalStorage(data);
					alert(
						"Success Request: " +
							data.msg +
							"\nName: " +
							data.data.name +
							"\nLast Name: " +
							data.data.lastName +
							"\nID: " +
							data.data.dni +
							"\nDate of Birth: " +
							data.data.dob +
							"\nPhone Number: " +
							data.data.phone +
							"\nAddress: " +
							data.data.address +
							"\nLocality: " +
							data.data.city +
							"\nPostal Code: " +
							data.data.zip +
							"\nEmail: " +
							data.data.email +
							"\nPassword: " +
							data.data.password
					);
				} else {
					alert(
						"Error Request: " +
							data.msg +
							"\nCheck your information with the error message:" +
							"\nName: " +
							data.data.name +
							"\nLast Name: " +
							data.data.lastName +
							"\nID: " +
							data.data.dni +
							"\nDate of Birth: " +
							data.data.dob +
							"\nPhone Number: " +
							data.data.phone +
							"\nAddress: " +
							data.data.address +
							"\nLocality: " +
							data.data.city +
							"\nPostal Code: " +
							data.data.zip +
							"\nEmail: " +
							data.data.email +
							"\nPassword: " +
							data.data.password
					);
				}
			})
			.catch(function (error) {
				alert("Error !!!\n" + error);
			});
	}

	// save in local storage
	function saveInLocalStorage(data) {
		localStorage.setItem("nameStorage", data.data.name);
		localStorage.setItem("lastNameStorage", data.data.lastName);
		localStorage.setItem("IDStorage", data.data.dni);
		localStorage.setItem("dateOfBirthStorage", data.data.dob);
		localStorage.setItem("phoneNumberStorage", data.data.phone);
		localStorage.setItem("addressStorage", data.data.address);
		localStorage.setItem("localityStorage", data.data.city);
		localStorage.setItem("postalCodeStorage", data.data.zip);
		localStorage.setItem("emailStorage", data.data.email);
		localStorage.setItem("passwordStorage", data.data.password);
	}

	// set values of local storage in the form
	function setValues() {
		if (
			localStorage.getItem("dateOfBirthStorage") &&
			localStorage.getItem("nameStorage") &&
			localStorage.getItem("lastNameStorage") &&
			localStorage.getItem("IDStorage") &&
			localStorage.getItem("phoneNumberStorage") &&
			localStorage.getItem("addressStorage") &&
			localStorage.getItem("localityStorage") &&
			localStorage.getItem("postalCodeStorage") &&
			localStorage.getItem("emailStorage") &&
			localStorage.getItem("passwordStorage") &&
			localStorage.getItem("passwordStorage")
		){
			var correctDOB = localStorage.getItem("dateOfBirthStorage");
			var correctDOBSplit = correctDOB.split("/");
			name.value = localStorage.getItem("nameStorage");
			lastName.value = localStorage.getItem("lastNameStorage");
			ID.value = localStorage.getItem("IDStorage");
			dateOfBirth.value = correctDOBSplit[2] + "-" + correctDOBSplit[0] + "-" + correctDOBSplit[1];
			phoneNumber.value = localStorage.getItem("phoneNumberStorage");
			address.value = localStorage.getItem("addressStorage");
			locality.value = localStorage.getItem("localityStorage");
			postalCode.value = localStorage.getItem("postalCodeStorage");
			email.value = localStorage.getItem("emailStorage");
			password.value = localStorage.getItem("passwordStorage");
			confirmPassword.value = localStorage.getItem("passwordStorage");
		}
	}

	// on blur name
	name.onblur = function () {
		if (name.value == "") {
			name.classList.add("errorRed");
			pName.innerHTML = "Name is requited";
			name.parentNode.appendChild(pName);
			nameCorrect = false;
			nameError = pName.innerHTML;
		} else if (!onlyLetters(name)) {
			name.classList.add("errorRed");
			pName.innerHTML = "Name is not valid, only letters";
			name.parentNode.appendChild(pName);
			nameCorrect = false;
			nameError = pName.innerHTML;
		} else if (name.value.length < 2) {
			name.classList.add("errorRed");
			pName.innerHTML = "Name is too short";
			name.parentNode.appendChild(pName);
			nameCorrect = false;
			nameError = pName.innerHTML;
		} else {
			name.classList.add("okGreen");
			pName.innerHTML = "Name is valid";
			name.parentNode.appendChild(pName);
			nameCorrect = true;
			nameError = pName.innerHTML;
		}
	};

	// on blur last name
	lastName.onblur = function () {
		if (lastName.value == "") {
			lastName.classList.add("errorRed");
			pLastName.innerHTML = "Last name is requited";
			lastName.parentNode.appendChild(pLastName);
			lastNameCorrect = false;
			lastNameError = pLastName.innerHTML;
		} else if (!onlyLetters(lastName)) {
			lastName.classList.add("errorRed");
			pLastName.innerHTML = "Name is not valid, only letters";
			lastName.parentNode.appendChild(pLastName);
			lastNameCorrect = false;
			lastNameError = pLastName.innerHTML;
		} else if (lastName.value.length < 2) {
			lastName.classList.add("errorRed");
			pLastName.innerHTML = "Last name is too short";
			lastName.parentNode.appendChild(pLastName);
			lastNameCorrect = false;
			lastNameError = pLastName.innerHTML;
		} else {
			lastName.classList.add("okGreen");
			pLastName.innerHTML = "Last name is valid";
			lastName.parentNode.appendChild(pLastName);
			lastNameCorrect = true;
			lastNameError = pLastName.innerHTML;
		}
	};

	// on blur ID
	ID.onblur = function () {
		if (ID.value == "") {
			ID.classList.add("errorRed");
			pID.innerHTML = "ID is requited";
			ID.parentNode.appendChild(pID);
			IDCorrect = false;
			IDError = pID.innerHTML;
		} else if (!onlyNumbers(ID)) {
			ID.classList.add("errorRed");
			pID.innerHTML = "ID is not valid, only numbers";
			ID.parentNode.appendChild(pID);
			IDCorrect = false;
			IDError = pID.innerHTML;
		} else if (ID.value.length < 7) {
			ID.classList.add("errorRed");
			pID.innerHTML = "ID is too short";
			ID.parentNode.appendChild(pID);
			IDCorrect = false;
			IDError = pID.innerHTML;
		} else if (ID.value.length > 8) {
			ID.classList.add("errorRed");
			pID.innerHTML = "ID is too long";
			ID.parentNode.appendChild(pID);
			IDCorrect = false;
			IDError = pID.innerHTML;
		} else {
			ID.classList.add("okGreen");
			pID.innerHTML = "ID is valid";
			ID.parentNode.appendChild(pID);
			IDCorrect = true;
			IDError = pID.innerHTML;
		}
	};

	// on blur date of birth
	dateOfBirth.onblur = function () {
		var splitvalue = dateOfBirth.value.split("-");
		var year = splitvalue[0];
		if (dateOfBirth.value == "") {
			dateOfBirth.classList.add("errorRed");
			pDateOfBirth.innerHTML = "Date of birth is requited";
			dateOfBirth.parentNode.appendChild(pDateOfBirth);
			dateOfBirthCorrect = false;
			dateOfBirthError = pDateOfBirth.innerHTML;
		} else if (2020 - year < 18) {
			dateOfBirth.classList.add("errorRed");
			pDateOfBirth.innerHTML = "Date of birth is not valid (too young)";
			dateOfBirth.parentNode.appendChild(pDateOfBirth);
			dateOfBirthCorrect = false;
			dateOfBirthError = pDateOfBirth.innerHTML;
		} else if (2020 - year > 100) {
			dateOfBirth.classList.add("errorRed");
			pDateOfBirth.innerHTML = "Date of birth is not valid (too old)";
			dateOfBirth.parentNode.appendChild(pDateOfBirth);
			dateOfBirthCorrect = false;
			dateOfBirthError = pDateOfBirth.innerHTML;
		} else {
			dateOfBirth.classList.add("okGreen");
			pDateOfBirth.innerHTML = "Date of birth is valid";
			dateOfBirth.parentNode.appendChild(pDateOfBirth);
			dateOfBirthCorrect = true;
			dateOfBirthError = pDateOfBirth.innerHTML;
			dateOfBirthServer =
				splitvalue[1] + "/" + splitvalue[2] + "/" + splitvalue[0];
		}
	};

	// on blur phone number
	phoneNumber.onblur = function () {
		if (phoneNumber.value == "") {
			phoneNumber.classList.add("errorRed");
			pPhoneNumber.innerHTML = "Phone number is requited";
			phoneNumber.parentNode.appendChild(pPhoneNumber);
			phoneNumberCorrect = false;
			phoneNumberError = pPhoneNumber.innerHTML;
		} else if (!onlyNumbers(phoneNumber)) {
			phoneNumber.classList.add("errorRed");
			pPhoneNumber.innerHTML = "Phone number is not valid, only numbers";
			phoneNumber.parentNode.appendChild(pPhoneNumber);
			phoneNumberCorrect = false;
			phoneNumberError = pPhoneNumber.innerHTML;
		} else if (phoneNumber.value.length < 9) {
			phoneNumber.classList.add("errorRed");
			pPhoneNumber.innerHTML = "Phone number is too short";
			phoneNumber.parentNode.appendChild(pPhoneNumber);
			phoneNumberCorrect = false;
			phoneNumberError = pPhoneNumber.innerHTML;
		} else if (phoneNumber.value.length > 10) {
			phoneNumber.classList.add("errorRed");
			pPhoneNumber.innerHTML = "Phone number is too long";
			phoneNumber.parentNode.appendChild(pPhoneNumber);
			phoneNumberCorrect = false;
			phoneNumberError = pPhoneNumber.innerHTML;
		} else {
			phoneNumber.classList.add("okGreen");
			pPhoneNumber.innerHTML = "Phone number is valid";
			phoneNumber.parentNode.appendChild(pPhoneNumber);
			phoneNumberCorrect = true;
			phoneNumberError = pPhoneNumber.innerHTML;
		}
	};

	// on blur address
	address.onblur = function () {
		var splitvalue = address.value.split(" ");
		var number = splitvalue[splitvalue.length - 1];
		var wordsCount = 0;
		var notWords = 0;
		for (var i = 0; i < splitvalue.length - 1; i++) {
			if (typeof splitvalue[i] === "string") {
				wordsCount++;
			}
			var letters = splitvalue[i].split("");
			for (var j = 0; j < letters.length; j++) {
				if (letters[j].toLowerCase() == letters[j].toUpperCase()) {
					notWords++;
				}
			}
		}
		if (address.value == "") {
			address.classList.add("errorRed");
			pAddress.innerHTML = "Address is requited";
			address.parentNode.appendChild(pAddress);
			addressCorrect = false;
			addressError = pAddress.innerHTML;
		} else if (isNaN(number) == true) {
			address.classList.add("errorRed");
			pAddress.innerHTML = "Address don't have a number";
			address.parentNode.appendChild(pAddress);
			addressCorrect = false;
			addressError = pAddress.innerHTML;
		} else if (wordsCount != splitvalue.length - 1 || wordsCount == 0) {
			address.classList.add("errorRed");
			pAddress.innerHTML = "Address is not valid";
			address.parentNode.appendChild(pAddress);
			addressCorrect = false;
			addressError = pAddress.innerHTML;
		} else if (notWords > 0) {
			address.classList.add("errorRed");
			pAddress.innerHTML = "Address is not valid, only letters in the name of the street";
			address.parentNode.appendChild(pAddress);
			addressCorrect = false;
			addressError = pAddress.innerHTML;
		} else {
			address.classList.add("okGreen");
			pAddress.innerHTML = "Address is valid";
			address.parentNode.appendChild(pAddress);
			addressCorrect = true;
			addressError = pAddress.innerHTML;
		}
	};

	// on blur locality
	locality.onblur = function () {
		if (locality.value == "") {
			locality.classList.add("errorRed");
			pLocality.innerHTML = "Locality is requited";
			locality.parentNode.appendChild(pLocality);
			localityCorrect = false;
			localityError = pLocality.innerHTML;
		} else if (!onlyLetters(locality)) {
			locality.classList.add("errorRed");
			pLocality.innerHTML = "Locality is not valid, only letters";
			locality.parentNode.appendChild(pLocality);
			localityCorrect = false;
			localityError = pLocality.innerHTML;
		} else if (locality.value.length < 3) {
			locality.classList.add("errorRed");
			pLocality.innerHTML = "Locality is too short";
			locality.parentNode.appendChild(pLocality);
			localityCorrect = false;
			localityError = pLocality.innerHTML;
		} else {
			locality.classList.add("okGreen");
			pLocality.innerHTML = "Locality is valid";
			locality.parentNode.appendChild(pLocality);
			localityCorrect = true;
			localityError = pLocality.innerHTML;
		}
	};

	// on blur postal code
	postalCode.onblur = function () {
		if (postalCode.value == "") {
			postalCode.classList.add("errorRed");
			pPostalCode.innerHTML = "Postal code is requited";
			postalCode.parentNode.appendChild(pPostalCode);
			postalCodeCorrect = false;
			postalCodeError = pPostalCode.innerHTML;
		} else if (postalCode.value.length < 4) {
			postalCode.classList.add("errorRed");
			pPostalCode.innerHTML = "Postal code is too short";
			postalCode.parentNode.appendChild(pPostalCode);
			postalCodeCorrect = false;
			postalCodeError = pPostalCode.innerHTML;
		} else if (postalCode.value.length > 5) {
			postalCode.classList.add("errorRed");
			pPostalCode.innerHTML = "Postal code is too long";
			postalCode.parentNode.appendChild(pPostalCode);
			postalCodeCorrect = false;
			postalCodeError = pPostalCode.innerHTML;
		} else if (!onlyNumbers(postalCode)) {
			postalCode.classList.add("errorRed");
			pPostalCode.innerHTML = "Postal code is not valid, only numbers";
			postalCode.parentNode.appendChild(pPostalCode);
			postalCodeCorrect = false;
			postalCodeError = pPostalCode.innerHTML;
		} else {
			postalCode.classList.add("okGreen");
			pPostalCode.innerHTML = "Postal code is valid";
			postalCode.parentNode.appendChild(pPostalCode);
			postalCodeCorrect = true;
			postalCodeError = pPostalCode.innerHTML;
		}
	};

	// on blur event for email
	email.onblur = function () {
		if (email.value == "") {
			email.classList.add("errorRed");
			pEmail.innerHTML = "Email is requited";
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
		var space = 0,
			number = 0,
			letter = 0,
			special = 0;
		for (var i = 0; i < passwordSlipt.length; i++) {
			if (passwordSlipt[i] == " ") {
				space++;
			} else if (
				passwordSlipt[i].toUpperCase() !== passwordSlipt[i].toLowerCase()
			) {
				letter++;
			} else if (passwordSlipt[i] == parseInt(passwordSlipt[i])) {
				number++;
			} else {
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
		confirmPassword.onfocus();
		confirmPassword.onblur();
	};

	// on blur event for confirm password
	confirmPassword.onblur = function () {
		if (confirmPassword.value == "") {
			confirmPassword.classList.add("errorRed");
			pConfirmPassword.innerHTML = "Confirm password is requited";
			confirmPassword.parentNode.appendChild(pConfirmPassword);
			confirmPasswordCorrect = false;
			confirmPasswordError = pConfirmPassword.innerHTML;
		} else if (confirmPassword.value !== password.value) {
			confirmPassword.classList.add("errorRed");
			pConfirmPassword.innerHTML = "Confirm password is not the same as password";
			confirmPassword.parentNode.appendChild(pConfirmPassword);
			confirmPasswordCorrect = false;
			confirmPasswordError = pConfirmPassword.innerHTML;
		} else {
			confirmPassword.classList.add("okGreen");
			pConfirmPassword.innerHTML = "Confirm password is valid";
			confirmPassword.parentNode.appendChild(pConfirmPassword);
			confirmPasswordCorrect = true;
			confirmPasswordError = pConfirmPassword.innerHTML;
		}
	};

	// set values when open the page
	setValues();

	// on focus name
	name.onfocus = function () {
		name.classList.remove("errorRed", "okGreen");
	};

	// on focus last name
	lastName.onfocus = function () {
		lastName.classList.remove("errorRed", "okGreen");
	};

	// on focus ID
	ID.onfocus = function () {
		ID.classList.remove("errorRed", "okGreen");
	};

	// on focus date of birth
	dateOfBirth.onfocus = function () {
		dateOfBirth.classList.remove("errorRed", "okGreen");
	};

	// on focus phone number
	phoneNumber.onfocus = function () {
		phoneNumber.classList.remove("errorRed", "okGreen");
	};

	// on focus address
	address.onfocus = function () {
		address.classList.remove("errorRed", "okGreen");
	};

	// on focus locality
	locality.onfocus = function () {
		locality.classList.remove("errorRed", "okGreen");
	};

	// on focus postal code
	postalCode.onfocus = function () {
		postalCode.classList.remove("errorRed", "okGreen");
	};

	// on focus event for email
	email.onfocus = function () {
		email.classList.remove("errorRed", "okGreen");
	};

	// on focus event for password
	password.onfocus = function () {
		password.classList.remove("errorRed", "okGreen");
	};

	// on focus event for confirm password
	confirmPassword.onfocus = function () {
		confirmPassword.classList.remove("errorRed", "okGreen");
	};

	// on submit event
	continueButton.onclick = function () {
		if (
			nameCorrect &&
			lastNameCorrect &&
			IDCorrect &&
			dateOfBirthCorrect &&
			phoneNumberCorrect &&
			addressCorrect &&
			localityCorrect &&
			postalCodeCorrect &&
			emailCorrect &&
			passwordCorrect &&
			confirmPasswordCorrect
		) {
			serverRequest();
		} else {
			alert(
				"Please, check your data" +
					"\nName: " +
					nameError +
					"\nLast name: " +
					lastNameError +
					"\nID: " +
					IDError +
					"\nDate of birth: " +
					dateOfBirthError +
					"\nPhone number: " +
					phoneNumberError +
					"\nAddress: " +
					addressError +
					"\nLocality: " +
					localityError +
					"\nPostal code: " +
					postalCodeError +
					"\nEmail: " +
					emailError +
					"\nPassword: " +
					passwordError +
					"\nConfirm password: " +
					confirmPasswordError
			);
		}
	};
};
