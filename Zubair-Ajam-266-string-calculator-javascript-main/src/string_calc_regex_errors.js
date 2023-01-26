const regex = {
	digitsCommasRegex: /^[\n,0-9]+$/g,
	negativeRegex: /-\d+/g,
	digitsRegex: /\d+/,
	findDelimiters: /(?<=\[).+?(?=\])/g,
	bracketsRegex: /\[|\]/g,
};
const errors = {
	invalid: "invalid input",
	negative: "negatives not allowed ",
};
module.exports = { regex, errors };
