const regex = {
	numRegex: /\d/,
	specialCharacterRegex: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
	spaceRegex: /\s/,
	upperCaseRegex: /[A-Z]/,
	lowerCaseRegex: /[a-z]/,
};
const errors = {
	existError: "password should exist",
	lengthError: "password should be longer than 8 characters",
	lowerCaseError: "password should have at least one lowercase letter",
	upperCaseError: "password should have at least one uppercase letter",
	digitError: "password should have at least have one digit",
	specialCharacterError: "password should have at least one special character",
	whitespaceError: "password should have at least one whitespace character",
	notValid: "User password is not valid",
};
const strengths = {
	invalid: "invalid",
	weak: "weak",
	medium: "medium",
	strong: "strong",
};

module.exports = {
	errors,
	strengths,
	regex,
};
