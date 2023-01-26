const { passwordStrength } = require("../src/password_checker");
const { strengths } = require("../src/password_conditions");
describe("passwordStrength", function () {
	it("should return 'invalid' if the first 2 conditions are not met", () => {
		expect(passwordStrength("apple")).toBe(strengths.invalid);
	});
	it("should return 'weak' if only 3 conditions are met ", () => {
		expect(passwordStrength("appliespies")).toBe(strengths.weak);
	});
	it("should return 'medium' if only 4 or 5 conditions are met", () => {
		expect(passwordStrength("Appliespies")).toBe(strengths.medium);
	});
	it("should return 'strong' if 6 or more conditions are met", () => {
		expect(passwordStrength("Appliespies #2")).toBe(strengths.strong);
	});
});
