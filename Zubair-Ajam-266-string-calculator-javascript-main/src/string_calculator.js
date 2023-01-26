const { regex, errors } = require("./string_calc_regex_errors");

function errorHandling(string) {
	if (string == "" || !string) {
		return true;
	}
	if (regex.negativeRegex.test(string)) {
		throw new Error(
			errors.negative + string.toString().match(regex.negativeRegex)
		);
	}
	if (
		string.slice(0, 2) !== "//" &&
		regex.digitsCommasRegex.test(string) === false &&
		string[string.length - 1].match(regex.digitsRegex) === null
	) {
		throw new Error(errors.invalid);
	}
	if (
		(string.slice(0, 2) !== "//" && string.search("/") !== -1) ||
		string[string.length - 1].match(regex.digitsRegex) === null
	) {
		throw new Error(errors.invalid);
	}
	return true;
}

function removeNan(string) {
	let convertString = "";
	let splitter = "";
	let startString = string.slice(string.indexOf("\n") + 1);
	const delimiters = string.match(regex.findDelimiters);

	if (string.slice(0, 2) === "//" && string.match(regex.bracketsRegex)) {
		for (let i = 0; i < startString.length; i++) {
			startString = startString.replace(delimiters[i], ",");
		}
		convertString = startString;
	} else if (string.slice(0, 2) === "//") {
		splitter = string.slice(2, string.indexOf("\n"));
		convertString = startString;
		convertString = convertString.split(splitter);
	} else {
		convertString = string.split(/\n|,/);
	}
	return convertString;
}

function add(string) {
	errorHandling(string);
	const convertString = removeNan(string);
	let sum = 0;

	if (convertString == "" || !convertString) {
		return 0;
	}
	for (let i = 0; i < convertString.length; i++) {
		if (convertString[i] < 1000) {
			sum += parseInt(convertString[i]);
		}
	}
	return sum;
}

module.exports = { add };
