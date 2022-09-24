window.onload = function () {
    // create variables
	var name = document.getElementById("name");
	var lastName = document.getElementById("lastName");
	var DNI = document.getElementById("DNI");
	var dateOfBirth = document.getElementById("dateOfBirth");
	var phoneNumber = document.getElementById("phoneNumber");
	var address = document.getElementById("address");
	var locality = document.getElementById("locality");
	var postalCode = document.getElementById("postalCode");
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var confirmPassword = document.getElementById("confirmPassword");
    
    // expresion to compare
	var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var nameExpression = /^[a-zA-Z]{3,}$/;
    var DNIExpression = /^[0-9]{7,}$/;
    var phoneNumberExpression = /^[0-9]{10}$/;
    var postalCodeExpression = /^[0-9]{4,5}$/;
    
	// set attributes
	name.setAttribute("placeholder", "Name");
	lastName.setAttribute("placeholder", "Last Name");
	DNI.setAttribute("placeholder", "DNI");
	dateOfBirth.setAttribute("placeholder", "Date of Birth");
	phoneNumber.setAttribute("placeholder", "Phone Number");
	address.setAttribute("placeholder", "Address");
	locality.setAttribute("placeholder", "Locality");
	postalCode.setAttribute("placeholder", "Postal Code");
	email.setAttribute("placeholder", "Email");
	password.setAttribute("placeholder", "Password");
	confirmPassword.setAttribute("placeholder", "Confirm Password");

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
        if (nameExpression.test(lastName.value)) {
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
    
    // validate DNI, only numbers
    function validateDNI(DNI) {
        if (DNIExpression.test(DNI.value)) {
            return true;
        } else {
            return false;
        }
    }
    
    // validate DNI length > 7
    function validateDNILength(DNI) {
        if (DNI.value.length > 7) {
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
    
    // HACER DESPUES LO DE LAS DIRECCIONES - - - - - - - - - - - 
    
    // validate location, only letters
    function validateLocality(locality) {
        if (nameExpression.test(locality.value)) {
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
        if (DNIExpression.test(postalCode.value)) {
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
        } else if (!validateName(name)) {
            name.classList.add("errorRed");
        } else if (!validateNameLength(name)) {
            name.classList.add("errorRed");
        } else {
            name.classList.add("okGreen");
        }
    }
    
    // on blur last name
    lastName.onblur = function () {
        if (emptyField(lastName)) {
            lastName.classList.add("errorRed");
        } else if (!validateLastName(lastName)) {
            lastName.classList.add("errorRed");
        } else if (!validateLastNameLength(lastName)) {
            lastName.classList.add("errorRed");
        } else {
            lastName.classList.add("okGreen");
        }
    }
    
    // on blur DNI
    DNI.onblur = function () {
        if (emptyField(DNI)) {
            DNI.classList.add("errorRed");
        } else if (!validateDNI(DNI)) {
            DNI.classList.add("errorRed");
        } else if (!validateDNILength(DNI)) {
            DNI.classList.add("errorRed");
        } else {
            DNI.classList.add("okGreen");
        }
    }
    
    // on blur phone number
    phoneNumber.onblur = function () {
        if (emptyField(phoneNumber)) {
            phoneNumber.classList.add("errorRed");
        } else if (!validatePhoneNumber(phoneNumber)) {
            phoneNumber.classList.add("errorRed");
        } else if (!validatePhoneNumberLength(phoneNumber)) {
            phoneNumber.classList.add("errorRed");
        } else {
            phoneNumber.classList.add("okGreen");
        }
    }
    
    // on blur locality
    locality.onblur = function () {
        if (emptyField(locality)) {
            locality.classList.add("errorRed");
        } else if (!validateLocality(locality)) {
            locality.classList.add("errorRed");
        } else if (!validateLocalityLength(locality)) {
            locality.classList.add("errorRed");
        } else {
            locality.classList.add("okGreen");
        }
    }
    
    // on blur postal code
    postalCode.onblur = function () {
        if (emptyField(postalCode)) {
            postalCode.classList.add("errorRed");
        } else if (!validatePostalCode(postalCode)) {
            postalCode.classList.add("errorRed");
        } else if (!validatePostalCodeLength(postalCode)) {
            postalCode.classList.add("errorRed");
        } else {
            postalCode.classList.add("okGreen");
        }
    }
    
	// on blur event for email
	email.onblur = function () {
		if (emptyField(email)) {
			email.classList.add("errorRed");
		} else if (!validateEmail(email)) {
			email.classList.add("errorRed");
		} else {
			email.classList.add("okGreen");
		}
	}
    
	// on blur event for password
	password.onblur = function () {
        if (emptyField(password)) {
            password.classList.add("errorRed");
		} else if (!validatePassword(password)) {
            password.classList.add("errorRed");
		} else {
            password.classList.add("okGreen");
		}
	}
    
    // on blur event for confirm password
    confirmPassword.onblur = function () {
        if (emptyField(confirmPassword)) {
            confirmPassword.classList.add("errorRed");
        } else if (!validateConfirmPassword(password, confirmPassword)) {
            confirmPassword.classList.add("errorRed");
        } else {
            confirmPassword.classList.add("okGreen");
        }
    }
    
    // on focus event
    
    // on focus name
    name.onfocus = function () {
        name.classList.remove("errorRed", "okGreen");
    }
    
    // on focus last name
    lastName.onfocus = function () {
        lastName.classList.remove("errorRed", "okGreen");
    }
    
    // on focus DNI
    DNI.onfocus = function () {
        DNI.classList.remove("errorRed", "okGreen");
    }
    
    // on focus phone number
    phoneNumber.onfocus = function () {
        phoneNumber.classList.remove("errorRed", "okGreen");
    }
    
    // on focus locality
    locality.onfocus = function () {
        locality.classList.remove("errorRed", "okGreen");
    }
    
    // on focus postal code
    postalCode.onfocus = function () {
        postalCode.classList.remove("errorRed", "okGreen");
    }
    
    // on focus event for email
    email.onfocus = function () {
        email.classList.remove("errorRed", "okGreen");
    }
    
	// on focus event for password
	password.onfocus = function () {
		password.classList.remove("errorRed", "okGreen");
	}
    
    // on focus event for confirm password
    confirmPassword.onfocus = function () {
        confirmPassword.classList.remove("errorRed", "okGreen");
    }
};
