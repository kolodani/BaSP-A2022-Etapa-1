window.onload = function () {
	// create variables
	var name = document.getElementById("name");
	var lastName = document.getElementById("lastName");
	var ID = document.getElementById("ID");
	var dateOfBirth = document.getElementById("dateOfBirth");
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

	// set attributes
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

	// functions to set boolean variables
	function toTrue(a) {
		a = true;
	}
	function toFalse(a) {
		a = false;
	}

	// functions to set error messages
	function nameErrorSet(a) {
		nameError = a;
	}
	function lastNameErrorSet(a) {
		lastNameError = a;
	}
	function IDErrorSet(a) {
		IDError = a;
	}
	function dateOfBirthErrorSet(a) {
		dateOfBirthError = a;
	}
	function phoneNumberErrorSet(a) {
		phoneNumberError = a;
	}
	function addressErrorSet(a) {
		addressError = a;
	}
	function localityErrorSet(a) {
		localityError = a;
	}
	function postalCodeErrorSet(a) {
		postalCodeError = a;
	}
	function emailErrorSet(a) {
		emailError = a;
	}
	function passwordErrorSet(a) {
		passwordError = a;
	}
	function confirmPasswordErrorSet(a) {
		confirmPasswordError = a;
	}

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
		}
		else {
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
		}
		else {
			return false;
		}
	}

	// validate name length > 3
	function validateNameLength(name) {
		if (name.value.length > 3) {
			return true;
		} else {
			return false;
		}
	}

	// validate last name length > 3
	function validateLastNameLength(lastName) {
		if (lastName.value.length > 3) {
			return true;
		} else {
			return false;
		}
	}

	// validate ID length > 7
	function validateDNILength(ID) {
		if (ID.value.length > 7) {
			return true;
		} else {
			return false;
		}
	}

	// validate phone number length = 10
	function validatePhoneNumberLength(phoneNumber) {
		if (phoneNumber.value.length == 10) {
			return true;
		} else {
			return false;
		}
	}

	// validate location length > 3
	function validateLocalityLength(locality) {
		if (locality.value.length > 3) {
			return true;
		} else {
			return false;
		}
	}

	// validate postal code, only numbers
	function validatePostalCode(postalCode) {
		if (postalCodeExpression.test(postalCode.value)) {
			return true;
		} else {
			return false;
		}
	}

	// validate postal code length = 4 or 5
	function validatePostalCodeLength(postalCode) {
		if (postalCode.value.length == 4 || postalCode.value.length == 5) {
			return true;
		} else {
			return false;
		}
	}

	// validate email
	function validateEmail(email) {
		if (emailExpression.test(email.value)) {
			return true;
		} else {
			return false;
		}
	}

	// validate password
	function validatePassword(password) {
		if (password.value.length > 7) {
			return true;
		} else {
			return false;
		}
	}

	// validate confirm password
	function validateConfirmPassword(password, confirmPassword) {
		if (password.value == confirmPassword.value) {
			return true;
		} else {
			return false;
		}
	}

	// empty field
	function emptyField(field) {
		if (field.value == "") {
			return true;
		} else {
			return false;
		}
	}

	// blur event

	// on blur name
	name.onblur = function () {
		if (emptyField(name)) {
			name.classList.add("errorRed");
			pName.innerHTML = "Name is requited";
			name.parentNode.appendChild(pName);
			toFalse(nameCorrect);
			nameErrorSet(pName.innerHTML);
		} else if (!onlyLetters(name)) {
			name.classList.add("errorRed");
			pName.innerHTML = "Name is not valid, only letters";
			name.parentNode.appendChild(pName);
			toFalse(nameCorrect);
			nameErrorSet(pName.innerHTML);
		} else if (!validateNameLength(name)) {
			name.classList.add("errorRed");
			pName.innerHTML = "Name is too short";
			name.parentNode.appendChild(pName);
			toFalse(nameCorrect);
			nameErrorSet(pName.innerHTML);
		} else {
			name.classList.add("okGreen");
			pName.innerHTML = "Name is valid";
			name.parentNode.appendChild(pName);
			toTrue(nameCorrect);
			nameErrorSet(pName.innerHTML);
		}
	};

	// on blur last name
	lastName.onblur = function () {
		if (emptyField(lastName)) {
			lastName.classList.add("errorRed");
			pLastName.innerHTML = "Last name is requited";
			lastName.parentNode.appendChild(pLastName);
			toFalse(lastNameCorrect);
			lastNameErrorSet(pLastName.innerHTML);
		} else if (!onlyLetters(lastName)) {
			lastName.classList.add("errorRed");
			pLastName.innerHTML = "Name is not valid, only letters";
			lastName.parentNode.appendChild(pLastName);
			toFalse(lastNameCorrect);
			lastNameErrorSet(pLastName.innerHTML);
		} else if (!validateLastNameLength(lastName)) {
			lastName.classList.add("errorRed");
			pLastName.innerHTML = "Last name is too short";
			lastName.parentNode.appendChild(pLastName);
			toFalse(lastNameCorrect);
			lastNameErrorSet(pLastName.innerHTML);
		} else {
			lastName.classList.add("okGreen");
			pLastName.innerHTML = "Last name is valid";
			lastName.parentNode.appendChild(pLastName);
			toTrue(lastNameCorrect);
			lastNameErrorSet(pLastName.innerHTML);
		}
	};

	// on blur ID
	ID.onblur = function () {
		if (emptyField(ID)) {
			ID.classList.add("errorRed");
			pID.innerHTML = "ID is requited";
			ID.parentNode.appendChild(pID);
			toFalse(IDCorrect);
			IDErrorSet(pID.innerHTML);
		} else if (!onlyNumbers(ID)) {
			ID.classList.add("errorRed");
			pID.innerHTML = "ID is not valid, only numbers";
			ID.parentNode.appendChild(pID);
			toFalse(IDCorrect);
			IDErrorSet(pID.innerHTML);
		} else if (!validateDNILength(ID)) {
			ID.classList.add("errorRed");
			pID.innerHTML = "ID is too short";
			ID.parentNode.appendChild(pID);
			toFalse(IDCorrect);
			IDErrorSet(pID.innerHTML);
		} else {
			ID.classList.add("okGreen");
			pID.innerHTML = "ID is valid";
			ID.parentNode.appendChild(pID);
			toTrue(IDCorrect);
			IDErrorSet(pID.innerHTML);
		}
	};

	// on blur date of birth
	dateOfBirth.onblur = function () {
		var splitvalue = dateOfBirth.value.split("-");
		var year = splitvalue[0];
		if (emptyField(dateOfBirth)) {
			dateOfBirth.classList.add("errorRed");
			pDateOfBirth.innerHTML = "Date of birth is requited";
			dateOfBirth.parentNode.appendChild(pDateOfBirth);
			toFalse(dateOfBirthCorrect);
			dateOfBirthErrorSet(pDateOfBirth.innerHTML);
		} else if (2020 - year < 18) {
			dateOfBirth.classList.add("errorRed");
			pDateOfBirth.innerHTML = "Date of birth is not valid (too young)";
			dateOfBirth.parentNode.appendChild(pDateOfBirth);
			toFalse(dateOfBirthCorrect);
			dateOfBirthErrorSet(pDateOfBirth.innerHTML);
		} else {
			dateOfBirth.classList.add("okGreen");
			pDateOfBirth.innerHTML = "Date of birth is valid";
			dateOfBirth.parentNode.appendChild(pDateOfBirth);
			toTrue(dateOfBirthCorrect);
			dateOfBirthErrorSet(pDateOfBirth.innerHTML);
		}
	};

	// on blur phone number
	phoneNumber.onblur = function () {
		if (emptyField(phoneNumber)) {
			phoneNumber.classList.add("errorRed");
			pPhoneNumber.innerHTML = "Phone number is requited";
			phoneNumber.parentNode.appendChild(pPhoneNumber);
			toFalse(phoneNumberCorrect);
			phoneNumberErrorSet(pPhoneNumber.innerHTML);
		} else if (!onlyNumbers(phoneNumber)) {
			phoneNumber.classList.add("errorRed");
			pPhoneNumber.innerHTML = "Phone number is not valid, only numbers";
			phoneNumber.parentNode.appendChild(pPhoneNumber);
			toFalse(phoneNumberCorrect);
			phoneNumberErrorSet(pPhoneNumber.innerHTML);
		} else if (!validatePhoneNumberLength(phoneNumber)) {
			phoneNumber.classList.add("errorRed");
			pPhoneNumber.innerHTML = "Phone number is too short";
			phoneNumber.parentNode.appendChild(pPhoneNumber);
			toFalse(phoneNumberCorrect);
			phoneNumberErrorSet(pPhoneNumber.innerHTML);
		} else {
			phoneNumber.classList.add("okGreen");
			pPhoneNumber.innerHTML = "Phone number is valid";
			phoneNumber.parentNode.appendChild(pPhoneNumber);
			toTrue(phoneNumberCorrect);
			phoneNumberErrorSet(pPhoneNumber.innerHTML);
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
		if (emptyField(address)) {
			address.classList.add("errorRed");
			pAddress.innerHTML = "Address is requited";
			address.parentNode.appendChild(pAddress);
			toFalse(addressCorrect);
			addressErrorSet(pAddress.innerHTML);
		} else if (isNaN(number) == true) {
			console.log("not a number");
			address.classList.add("errorRed");
			pAddress.innerHTML = "Address don't have a number";
			address.parentNode.appendChild(pAddress);
			toFalse(addressCorrect);
			addressErrorSet(pAddress.innerHTML);
		} else if ((wordsCount != splitvalue.length - 1) || (wordsCount == 0)) {
			address.classList.add("errorRed");
			pAddress.innerHTML = "Address is not valid";
			address.parentNode.appendChild(pAddress);
			toFalse(addressCorrect);
			addressErrorSet(pAddress.innerHTML);
		} else if (notWords > 0) {
			address.classList.add("errorRed");
			pAddress.innerHTML = "Address is not valid, only letters in the name of the street";
			address.parentNode.appendChild(pAddress);
			toFalse(addressCorrect);
			addressErrorSet(pAddress.innerHTML);
		}else {
            address.classList.add("okGreen");
            pAddress.innerHTML = "Address is valid";
            address.parentNode.appendChild(pAddress);
			toTrue(addressCorrect);
            addressErrorSet(pAddress.innerHTML);
        }
    };

	// on blur locality
	locality.onblur = function () {
		if (emptyField(locality)) {
			locality.classList.add("errorRed");
			pLocality.innerHTML = "Locality is requited";
			locality.parentNode.appendChild(pLocality);
			toFalse(localityCorrect);
			localityErrorSet(pLocality.innerHTML);
		} else if (!onlyLetters(locality)) {
			locality.classList.add("errorRed");
			pLocality.innerHTML = "Locality is not valid, only letters";
			locality.parentNode.appendChild(pLocality);
			toFalse(localityCorrect);
			localityErrorSet(pLocality.innerHTML);
		} else if (!validateLocalityLength(locality)) {
			locality.classList.add("errorRed");
			pLocality.innerHTML = "Locality is too short";
			locality.parentNode.appendChild(pLocality);
			toFalse(localityCorrect);
			localityErrorSet(pLocality.innerHTML);
		} else {
			locality.classList.add("okGreen");
			pLocality.innerHTML = "Locality is valid";
			locality.parentNode.appendChild(pLocality);
			toTrue(localityCorrect);
			localityErrorSet(pLocality.innerHTML);
		}
	};

	// on blur postal code
	postalCode.onblur = function () {
		if (emptyField(postalCode)) {
			postalCode.classList.add("errorRed");
			pPostalCode.innerHTML = "Postal code is requited";
			postalCode.parentNode.appendChild(pPostalCode);
			toFalse(postalCodeCorrect);
			postalCodeErrorSet(pPostalCode.innerHTML);
		} else if (!validatePostalCodeLength(postalCode)) {
			postalCode.classList.add("errorRed");
			if (postalCode.value.length < 4) {
				pPostalCode.innerHTML = "Postal code is too short";
			} else if (postalCode.value.length > 5) {
				pPostalCode.innerHTML = "Postal code is too long";
			}
			postalCode.parentNode.appendChild(pPostalCode);
			toFalse(postalCodeCorrect);
			postalCodeErrorSet(pPostalCode.innerHTML);
		} else if (!onlyNumbers(postalCode)) {
			postalCode.classList.add("errorRed");
			pPostalCode.innerHTML = "Postal code is not valid, only numbers";
			postalCode.parentNode.appendChild(pPostalCode);
			toFalse(postalCodeCorrect);
			postalCodeErrorSet(pPostalCode.innerHTML);
		} else {
			postalCode.classList.add("okGreen");
			pPostalCode.innerHTML = "Postal code is valid";
			postalCode.parentNode.appendChild(pPostalCode);
			toTrue(postalCodeCorrect);
			postalCodeErrorSet(pPostalCode.innerHTML);
		}
	};

	// on blur event for email
	email.onblur = function () {
		if (emptyField(email)) {
			email.classList.add("errorRed");
			pEmail.innerHTML = "Email is requited";
			email.parentNode.appendChild(pEmail);
			toFalse(emailCorrect);
			emailErrorSet(pEmail.innerHTML);
		} else if (!validateEmail(email)) {
			email.classList.add("errorRed");
			pEmail.innerHTML = "Email is not valid";
			email.parentNode.appendChild(pEmail);
			toFalse(emailCorrect);
			emailErrorSet(pEmail.innerHTML);
		} else {
			email.classList.add("okGreen");
			pEmail.innerHTML = "Email is valid";
			email.parentNode.appendChild(pEmail);
			toTrue(emailCorrect);
			emailErrorSet(pEmail.innerHTML);
		}
	};

	password.onblur = function () {
		var passwordSlipt = password.value.split("");
		var space = 0, number = 0, letter = 0, special = 0;
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
		if (letter + number < passwordSlipt.length) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password invalid, contains special characters";
			password.parentNode.appendChild(pPassword);
			toFalse(passwordCorrect);
			errorInPassword(pPassword.innerHTML);
		} else if (letter == 0) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password invalid, contains no letters";
			password.parentNode.appendChild(pPassword);
			toFalse(passwordCorrect);
			errorInPassword(pPassword.innerHTML);
		} else if (number == 0) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password invalid, contains no numbers";
			password.parentNode.appendChild(pPassword);
			toFalse(passwordCorrect);
			errorInPassword(pPassword.innerHTML);
		} else if (emptyField(password)) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password is required";
			password.parentNode.appendChild(pPassword);
			toFalse(passwordCorrect);
			errorInPassword(pPassword.innerHTML);
		} else if (!validatePassword(password)) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password is not valid";
			password.parentNode.appendChild(pPassword);
			toFalse(passwordCorrect);
			errorInPassword(pPassword.innerHTML);
		} else {
			password.classList.add("okGreen");
			pPassword.innerHTML = `Password is valid`;
			password.parentNode.appendChild(pPassword);
			toTrue(passwordCorrect);
			errorInPassword(pPassword.innerHTML);
		}
	};

	// on blur event for confirm password
	confirmPassword.onblur = function () {
		if (emptyField(confirmPassword)) {
			confirmPassword.classList.add("errorRed");
			pConfirmPassword.innerHTML = "Confirm password is requited";
			confirmPassword.parentNode.appendChild(pConfirmPassword);
			toFalse(confirmPasswordCorrect);
			confirmPasswordErrorSet(pConfirmPassword.innerHTML);
		} else if (!validateConfirmPassword(password, confirmPassword)) {
			confirmPassword.classList.add("errorRed");
			pConfirmPassword.innerHTML =
				"Confirm password is not the same as password";
			confirmPassword.parentNode.appendChild(pConfirmPassword);
			toFalse(confirmPasswordCorrect);
			confirmPasswordErrorSet(pConfirmPassword.innerHTML);
		} else {
			confirmPassword.classList.add("okGreen");
			pConfirmPassword.innerHTML = "Confirm password is valid";
			confirmPassword.parentNode.appendChild(pConfirmPassword);
			toTrue(confirmPasswordCorrect);
			confirmPasswordErrorSet(pConfirmPassword.innerHTML);
		}
	};

	// on focus event

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
				alert("Welcome to our website" + "\nName: " + name.value + "\nLast name: " + lastName.value + 
				"\nID: " + ID.value + "\nDate of birth: " + dateOfBirth.value + "\nPhone number: " + 
				phoneNumber.value + "\nAddress: " + address.value + "\nLocality: " + locality.value + 
				"\nPostal code: " + postalCode.value + "\nEmail: " + email.value + "\nPassword: " + 
				password.value + "\nConfirm password: " + confirmPassword.value);
			} else {
				alert("Please, check your data" + "\nName: " + nameError + "\nLast name: " + lastNameError + 
				"\nID: " + IDError + "\nDate of birth: " + dateOfBirthError + "\nPhone number: " + 
				phoneNumberError + "\nAddress: " + addressError + "\nLocality: " + localityError + 
				"\nPostal code: " + postalCodeError + "\nEmail: " + emailError + "\nPassword: " + 
				passwordError + "\nConfirm password: " + confirmPasswordError);
			}
	};
};