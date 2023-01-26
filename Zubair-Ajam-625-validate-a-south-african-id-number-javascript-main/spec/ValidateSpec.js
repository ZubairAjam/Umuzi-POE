const { validateSA_ID } = require("../src/Validate_SA_ID");
describe("ValidateSA_ID function", function () {
	it("should confirm that the ID is 13 digits", () => {
		expect(validateSA_ID("950707518308")).toBe(false);
	});
	it("should validate that the month digits should be between 01 and 12", () => {
		expect(validateSA_ID("9513075183082")).toBe(false);
	});
	it("should validate that the date should be not be greater than the days in the given month", () => {
		expect(validateSA_ID("9506315183082")).toBe(false);
	});
	it("should validate that the year should be between 00 and 99", () => {
		expect(validateSA_ID("9512325183082")).toBe(false);
	});
	it("should validate the citizenship digit must be 0 or 1", () => {
		expect(validateSA_ID("9102295437286")).toBe(false);
	});
	it("should validate that the ID only includes numbers", () => {
		expect(validateSA_ID("950707abcd082")).toBe(false);
	});
	it("should check that the ID number passes the luhns algo", () => {
		expect(validateSA_ID("9507075183083")).toBe(false);
	});
	it("should Validate an SA ID", () => {
		expect(validateSA_ID("9507075183082")).toBe(true);
	});
});
