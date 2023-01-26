const { passwordIsValid } = require("../src/password_checker");
const { errors } = require("../src/password_conditions");
describe("passwordIsValid", function () {
	it("should throw an error if password password doesn't exist", () => {
		expect(function () {
			passwordIsValid("");
		}).toThrow(errors.existError);
	});
	it("should throw an error if password is less than 8 characters", () => {
		expect(function () {
			passwordIsValid("abc");
		}).toThrow(errors.lengthError);
	});
	it("should throw an error if password doesn't contain any lowercase letters", () => {
		expect(function () {
			passwordIsValid("ABCDEFGHI");
		}).toThrow(errors.lowerCaseError);
	});
	it("should throw an error if password doesn't contain any uppercase letters", () => {
		expect(function () {
			passwordIsValid("abcdefghi");
		}).toThrow(errors.upperCaseError);
	});
	it("should throw an error if password doesn't contain at least one digit", () => {
		expect(function () {
			passwordIsValid("abcdefAghi");
		}).toThrow(errors.digitError);
	});
	it("should throw an error if password doesn't contain at least one special character", () => {
		expect(function () {
			passwordIsValid("aBcdEfghij1");
		}).toThrow(errors.specialCharacterError);
	});
	it("should throw an error if password doesn't contain at least one whitespace character", () => {
		expect(function () {
			passwordIsValid("abCdEfghij1@");
		}).toThrow(errors.whitespaceError);
	});
	it("should return true if the password is valid", () => {
		expect(passwordIsValid("AbcDefgh12 @")).toBe(true);
	});
});
