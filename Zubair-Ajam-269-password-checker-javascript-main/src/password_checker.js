const { strengths, regex, errors } = require("./password_conditions");
const { logger } = require("./winston");
function passwordIsValid(password) {
	if (!password) {
		logger.debug(errors.notValid);
		logger.error(errors.existError);
		throw errors.existError;
	}
	if (password.length <= 8) {
		logger.debug(errors.notValid);
		logger.error(errors.lengthError);
		throw errors.lengthError;
	}
	if (regex.lowerCaseRegex.test(password) === false) {
		logger.debug(errors.notValid);
		logger.error(errors.lowerCaseError);
		throw errors.lowerCaseError;
	}
	if (regex.upperCaseRegex.test(password) === false) {
		logger.debug(errors.notValid);
		logger.error(errors.upperCaseError);
		throw errors.upperCaseError;
	}
	if (regex.numRegex.test(password) === false) {
		logger.debug(errors.notValid);
		logger.error(errors.digitError);
		throw errors.digitError;
	}
	if (regex.specialCharacterRegex.test(password) === false) {
		logger.debug(errors.notValid);
		logger.error(errors.specialCharacterError);
		throw errors.specialCharacterError;
	}
	if (regex.spaceRegex.test(password) === false) {
		logger.debug(errors.notValid);
		logger.error(errors.whitespaceError);
		throw errors.whitespaceError;
	} else {
		logger.debug("User password is valid");
		return true;
	}
}

function passwordStrength(password) {
	let conditionCount = 0;
	let strength = "";

	if (!password || password.length <= 8) {
		return strengths.invalid;
	}
	if (password.length > 0) {
		conditionCount++;
	}
	if (password.length > 8) {
		conditionCount++;
	}
	if (regex.lowerCaseRegex.test(password) === true) {
		conditionCount++;
	}
	if (regex.upperCaseRegex.test(password) === true) {
		conditionCount++;
	}
	if (regex.numRegex.test(password) === true) {
		conditionCount++;
	}
	if (regex.specialCharacterRegex.test(password) === true) {
		conditionCount++;
	}
	if (regex.spaceRegex.test(password) === true) {
		conditionCount++;
	}

	if (conditionCount === 3) {
		strength = strengths.weak;
	} else if (conditionCount > 3 && conditionCount < 6) {
		strength = strengths.medium;
	} else if (conditionCount >= 6) {
		strength = strengths.strong;
	}
	return strength;
}

module.exports = { passwordIsValid, passwordStrength };
