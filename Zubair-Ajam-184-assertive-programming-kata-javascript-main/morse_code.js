const { morseCode, alphabet } = require("./morse_alphabet");
function lettersToMorseCode(str) {
	const strLow = str.toLowerCase();
	const morseCodeOut = [];

	for (let i = 0; i < str.length; i++) {
		if (morseCode[alphabet.indexOf(strLow[i])] !== undefined) {
			morseCodeOut.push(morseCode[alphabet.indexOf(strLow[i])]);
		}
	}
	const morseCodeResult = morseCodeOut.join(" ");
	assertion(str, morseCodeResult);
	return morseCodeResult;
}

function morseCodeToLetters(morseStr) {
	const morseArr = morseStr.split(" ");
	const lettersOut = [];

	for (let i = 0; i < morseArr.length; i++) {
		lettersOut.push(alphabet[morseCode.indexOf(morseArr[i])]);
	}
	const lettersResult = lettersOut.join("");
	assertion(lettersResult, morseStr);
	return lettersResult;
}

function assertion(stringLetters, stringMorse) {
	let inputSpaceCount = 0;
	let outputSpaceCount = 0;
	let noSpaceCharIn = [];
	let noSpaceCharOut = [];
	let stringOutArr = stringMorse.split(" ");
	for (let i = 0; i < stringLetters.length; i++) {
		if (stringLetters[i] === " ") {
			inputSpaceCount++;
		}
		if (stringLetters[i] !== " ") {
			noSpaceCharIn.push(stringLetters[i]);
		}
	}
	for (let i = 0; i < stringOutArr.length; i++) {
		if (stringOutArr[i] === "/") {
			outputSpaceCount++;
		}
		if (stringOutArr[i] !== "/") {
			noSpaceCharOut.push(stringMorse[i]);
		}
	}
	if (stringLetters === "") {
		return "";
	} else {
		console.assert(
			inputSpaceCount === outputSpaceCount,
			"Input and output spaces do not match."
		);
		console.assert(
			noSpaceCharIn.length === noSpaceCharOut.length,
			"Input and output do not have the same number of characters."
		);
	}
}
console.log(morseCodeToLetters(".... .. / - .... . .-. ."));
console.log(lettersToMorseCode("hello world"));
