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

	// expresion to compare
	var nameExpression = /^[a-zA-Z]{3,}$/;
	var lastNameExpression = /^[a-zA-Z]{3,}$/;
	var IDExpression = /^[0-9]{8,}$/;
	var dateOfBirthExpression = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
	var phoneNumberExpression = /^[0-9]{8,}$/;
	var addressExpressionWord = /^[a-zA-Z]{5,}$/;
	var addressExpressionNumber = /^[0-9]{1,}$/;
	var localityExpression = /^[a-zA-Z]{3,}$/;
	var postalCodeExpression = /^[0-9]{4,}$/;
	var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
	var passwordExpression = /^[a-zA-Z0-9]{8,}$/;

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
	function nameTrue() {
		nameCorrect = true;
	}
	function nameFalse() {
		nameCorrect = false;
	}
	function lastNameTrue() {
		lastNameCorrect = true;
	}
	function lastNameFalse() {
		lastNameCorrect = false;
	}
	function IDTrue() {
		IDCorrect = true;
	}
	function IDFalse() {
		IDCorrect = false;
	}
	function dateOfBirthTrue() {
		dateOfBirthCorrect = true;
	}
	function dateOfBirthFalse() {
		dateOfBirthCorrect = false;
	}
	function phoneNumberTrue() {
		phoneNumberCorrect = true;
	}
	function phoneNumberFalse() {
		phoneNumberCorrect = false;
	}
	function addressTrue() {
		addressCorrect = true;
	}
	function addressFalse() {
		addressCorrect = false;
	}
	function localityTrue() {
		localityCorrect = true;
	}
	function localityFalse() {
		localityCorrect = false;
	}
	function postalCodeTrue() {
		postalCodeCorrect = true;
	}
	function postalCodeFalse() {
		postalCodeCorrect = false;
	}
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
	function confirmPasswordTrue() {
		confirmPasswordCorrect = true;
	}
	function confirmPasswordFalse() {
		confirmPasswordCorrect = false;
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

	// validate name, only letters
	function validateName(name) {
		if (nameExpression.test(name.value)) {
			return true;
		} else {
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

	// validate last name, only letters
	function validateLastName(lastName) {
		if (lastNameExpression.test(lastName.value)) {
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

	// validate ID, only numbers
	function validateDNI(ID) {
		if (IDExpression.test(ID.value)) {
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

	// validate date of birth
	function validateDateOfBirth(dateOfBirth) {
		if (dateOfBirthExpression.test(dateOfBirth.value)) {
			return true;
		} else {
			return false;
		}
	}

	// validate phone number, only numbers
	function validatePhoneNumber(phoneNumber) {
		if (phoneNumberExpression.test(phoneNumber.value)) {
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
	// TODO ********************************************************************************
	// check if address have a space
	function validateAddressSpace(address) {
		if (address.value.indexOf(" ") >= 0) {
			return true;
		} else {
			return false;
		}
	}

	// check if address have a word in first position
	function validateAddressFirstWord(address) {
		var space = address.value.indexOf(" ");
		var firstWord = address.value.substring(0, space);
		if (addressExpressionWord.test(firstWord)) {
			return true;
		} else {
			return false;
		}
	}

	// check if address have a number in second position
	function validateAddressSecondNumber(address) {
		var space = address.value.indexOf(" ");
		var secondNumber = address.value.substring(space + 1, address.value.length);
		if (addressExpressionNumber.test(secondNumber)) {
			return true;
		} else {
			return false;
		}
	}
	// TODO ********************************************************************************

	// validate location, only letters
	function validateLocality(locality) {
		if (localityExpression.test(locality.value)) {
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
			nameFalse();
			nameErrorSet(pName.innerHTML);
		} else if (!validateName(name)) {
			name.classList.add("errorRed");
			pName.innerHTML = "Name is not valid";
			name.parentNode.appendChild(pName);
			nameFalse();
			nameErrorSet(pName.innerHTML);
		} else if (!validateNameLength(name)) {
			name.classList.add("errorRed");
			pName.innerHTML = "Name is too short";
			name.parentNode.appendChild(pName);
			nameFalse();
			nameErrorSet(pName.innerHTML);
		} else {
			name.classList.add("okGreen");
			pName.innerHTML = "Name is valid";
			name.parentNode.appendChild(pName);
			nameTrue();
			nameErrorSet(pName.innerHTML);
		}
	};

	// on blur last name
	lastName.onblur = function () {
		if (emptyField(lastName)) {
			lastName.classList.add("errorRed");
			pLastName.innerHTML = "Last name is requited";
			lastName.parentNode.appendChild(pLastName);
			lastNameFalse();
			lastNameErrorSet(pLastName.innerHTML);
		} else if (!validateLastName(lastName)) {
			lastName.classList.add("errorRed");
			pLastName.innerHTML = "Last name is not valid";
			lastName.parentNode.appendChild(pLastName);
			lastNameFalse();
			lastNameErrorSet(pLastName.innerHTML);
		} else if (!validateLastNameLength(lastName)) {
			lastName.classList.add("errorRed");
			pLastName.innerHTML = "Last name is too short";
			lastName.parentNode.appendChild(pLastName);
			lastNameFalse();
			lastNameErrorSet(pLastName.innerHTML);
		} else {
			lastName.classList.add("okGreen");
			pLastName.innerHTML = "Last name is valid";
			lastName.parentNode.appendChild(pLastName);
			lastNameTrue();
			lastNameErrorSet(pLastName.innerHTML);
		}
	};

	// on blur ID
	ID.onblur = function () {
		if (emptyField(ID)) {
			ID.classList.add("errorRed");
			pID.innerHTML = "ID is requited";
			ID.parentNode.appendChild(pID);
			IDFalse();
			IDErrorSet(pID.innerHTML);
		} else if (!validateDNI(ID)) {
			ID.classList.add("errorRed");
			pID.innerHTML = "ID is not valid";
			ID.parentNode.appendChild(pID);
			IDFalse();
			IDErrorSet(pID.innerHTML);
		} else if (!validateDNILength(ID)) {
			ID.classList.add("errorRed");
			pID.innerHTML = "ID is too short";
			ID.parentNode.appendChild(pID);
			IDFalse();
			IDErrorSet(pID.innerHTML);
		} else {
			ID.classList.add("okGreen");
			pID.innerHTML = "ID is valid";
			ID.parentNode.appendChild(pID);
			IDTrue();
			IDErrorSet(pID.innerHTML);
		}
	};

	// on blur date of birth
	dateOfBirth.onblur = function () {
		if (emptyField(dateOfBirth)) {
			dateOfBirth.classList.add("errorRed");
			pDateOfBirth.innerHTML = "Date of birth is requited";
			dateOfBirth.parentNode.appendChild(pDateOfBirth);
			dateOfBirthFalse();
			dateOfBirthErrorSet(pDateOfBirth.innerHTML);
		} else if (!validateDateOfBirth(dateOfBirth)) {
			dateOfBirth.classList.add("errorRed");
			pDateOfBirth.innerHTML = "Date of birth is not valid";
			dateOfBirth.parentNode.appendChild(pDateOfBirth);
			dateOfBirthFalse();
			dateOfBirthErrorSet(pDateOfBirth.innerHTML);
		} else {
			dateOfBirth.classList.add("okGreen");
			pDateOfBirth.innerHTML = "Date of birth is valid";
			dateOfBirth.parentNode.appendChild(pDateOfBirth);
			dateOfBirthTrue();
			dateOfBirthErrorSet(pDateOfBirth.innerHTML);
		}
	};

	// on blur phone number
	phoneNumber.onblur = function () {
		if (emptyField(phoneNumber)) {
			phoneNumber.classList.add("errorRed");
			pPhoneNumber.innerHTML = "Phone number is requited";
			phoneNumber.parentNode.appendChild(pPhoneNumber);
			phoneNumberFalse();
			phoneNumberErrorSet(pPhoneNumber.innerHTML);
		} else if (!validatePhoneNumber(phoneNumber)) {
			phoneNumber.classList.add("errorRed");
			pPhoneNumber.innerHTML = "Phone number is not valid";
			phoneNumber.parentNode.appendChild(pPhoneNumber);
			phoneNumberFalse();
			phoneNumberErrorSet(pPhoneNumber.innerHTML);
		} else if (!validatePhoneNumberLength(phoneNumber)) {
			phoneNumber.classList.add("errorRed");
			pPhoneNumber.innerHTML = "Phone number is too short";
			phoneNumber.parentNode.appendChild(pPhoneNumber);
			phoneNumberFalse();
			phoneNumberErrorSet(pPhoneNumber.innerHTML);
		} else {
			phoneNumber.classList.add("okGreen");
			pPhoneNumber.innerHTML = "Phone number is valid";
			phoneNumber.parentNode.appendChild(pPhoneNumber);
			phoneNumberTrue();
			phoneNumberErrorSet(pPhoneNumber.innerHTML);
		}
	};

	// on blur address
	address.onblur = function () {
		if (emptyField(address)) {
			address.classList.add("errorRed");
			pAddress.innerHTML = "Address is requited";
			address.parentNode.appendChild(pAddress);
			addressFalse();
			addressErrorSet(pAddress.innerHTML);
		} else if (validateAddressSpace(address)) {
            address.classList.add("errorRed");
            pAddress.innerHTML = "Address is not a only one word";
            address.parentNode.appendChild(pAddress);
            addressFalse();
            addressErrorSet(pAddress.innerHTML);
        } else if (!validateAddressFirstWord(address)) {
            address.classList.add("errorRed");
            pAddress.innerHTML = "Address is not start with a word";
            address.parentNode.appendChild(pAddress);
            addressFalse();
            addressErrorSet(pAddress.innerHTML);
        } else if (!validateAddressSecondNumber(address)) {
            address.classList.add("errorRed");
            pAddress.innerHTML = "Address is not end with a number";
            address.parentNode.appendChild(pAddress);
            addressFalse();
            addressErrorSet(pAddress.innerHTML);
        } else {
            address.classList.add("okGreen");
            pAddress.innerHTML = "Address is valid";
            address.parentNode.appendChild(pAddress);
            addressTrue();
            addressErrorSet(pAddress.innerHTML);
        }
    };

	// on blur locality
	locality.onblur = function () {
		if (emptyField(locality)) {
			locality.classList.add("errorRed");
			pLocality.innerHTML = "Locality is requited";
			locality.parentNode.appendChild(pLocality);
			localityFalse();
			localityErrorSet(pLocality.innerHTML);
		} else if (!validateLocality(locality)) {
			locality.classList.add("errorRed");
			pLocality.innerHTML = "Locality is not valid";
			locality.parentNode.appendChild(pLocality);
			localityFalse();
			localityErrorSet(pLocality.innerHTML);
		} else if (!validateLocalityLength(locality)) {
			locality.classList.add("errorRed");
			pLocality.innerHTML = "Locality is too short";
			locality.parentNode.appendChild(pLocality);
			localityFalse();
			localityErrorSet(pLocality.innerHTML);
		} else {
			locality.classList.add("okGreen");
			pLocality.innerHTML = "Locality is valid";
			locality.parentNode.appendChild(pLocality);
			localityTrue();
			localityErrorSet(pLocality.innerHTML);
		}
	};

	// on blur postal code
	postalCode.onblur = function () {
		if (emptyField(postalCode)) {
			postalCode.classList.add("errorRed");
			pPostalCode.innerHTML = "Postal code is requited";
			postalCode.parentNode.appendChild(pPostalCode);
			postalCodeFalse();
			postalCodeErrorSet(pPostalCode.innerHTML);
		} else if (!validatePostalCodeLength(postalCode)) {
			postalCode.classList.add("errorRed");
			if (postalCode.value.length < 4) {
				pPostalCode.innerHTML = "Postal code is too short";
			} else if (postalCode.value.length > 5) {
				pPostalCode.innerHTML = "Postal code is too long";
			}
			postalCode.parentNode.appendChild(pPostalCode);
			postalCodeFalse();
			postalCodeErrorSet(pPostalCode.innerHTML);
		} else if (!validatePostalCode(postalCode)) {
			postalCode.classList.add("errorRed");
			pPostalCode.innerHTML = "Postal code is not valid";
			postalCode.parentNode.appendChild(pPostalCode);
			postalCodeFalse();
			postalCodeErrorSet(pPostalCode.innerHTML);
		} else {
			postalCode.classList.add("okGreen");
			pPostalCode.innerHTML = "Postal code is valid";
			postalCode.parentNode.appendChild(pPostalCode);
			postalCodeTrue();
			postalCodeErrorSet(pPostalCode.innerHTML);
		}
	};

	// on blur event for email
	email.onblur = function () {
		if (emptyField(email)) {
			email.classList.add("errorRed");
			pEmail.innerHTML = "Email is requited";
			email.parentNode.appendChild(pEmail);
			emailFalse();
			emailErrorSet(pEmail.innerHTML);
		} else if (!validateEmail(email)) {
			email.classList.add("errorRed");
			pEmail.innerHTML = "Email is not valid";
			email.parentNode.appendChild(pEmail);
			emailFalse();
			emailErrorSet(pEmail.innerHTML);
		} else {
			email.classList.add("okGreen");
			pEmail.innerHTML = "Email is valid";
			email.parentNode.appendChild(pEmail);
			emailTrue();
			emailErrorSet(pEmail.innerHTML);
		}
	};

	// on blur event for password
	password.onblur = function () {
		if (emptyField(password)) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password is requited";
			password.parentNode.appendChild(pPassword);
			passwordFalse();
			passwordErrorSet(pPassword.innerHTML);
		} else if (!validatePassword(password)) {
			password.classList.add("errorRed");
			pPassword.innerHTML = "Password is not valid";
			password.parentNode.appendChild(pPassword);
			passwordFalse();
			passwordErrorSet(pPassword.innerHTML);
		} else {
			password.classList.add("okGreen");
			pPassword.innerHTML = "Password is valid";
			password.parentNode.appendChild(pPassword);
			passwordTrue();
			passwordErrorSet(pPassword.innerHTML);
		}
	};

	// on blur event for confirm password
	confirmPassword.onblur = function () {
		if (emptyField(confirmPassword)) {
			confirmPassword.classList.add("errorRed");
			pConfirmPassword.innerHTML = "Confirm password is requited";
			confirmPassword.parentNode.appendChild(pConfirmPassword);
			confirmPasswordFalse();
			confirmPasswordErrorSet(pConfirmPassword.innerHTML);
		} else if (!validateConfirmPassword(password, confirmPassword)) {
			confirmPassword.classList.add("errorRed");
			pConfirmPassword.innerHTML =
				"Confirm password is not the same as password";
			confirmPassword.parentNode.appendChild(pConfirmPassword);
			confirmPasswordFalse();
			confirmPasswordErrorSet(pConfirmPassword.innerHTML);
		} else {
			confirmPassword.classList.add("okGreen");
			pConfirmPassword.innerHTML = "Confirm password is valid";
			confirmPassword.parentNode.appendChild(pConfirmPassword);
			confirmPasswordTrue();
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
};

