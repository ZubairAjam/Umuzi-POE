const { add, multiply } = require("../src/simple-calculator");
describe("add function", function () {
	it("should add 2 integers", () => {
		expect(add(1, 2)).toEqual(3);
	});
	it("should add multiple integers", () => {
		expect(add(1, 2, 3, 4, 5)).toEqual(15);
	});
	it("should accept integers", () => {
		expect(add(1, 2, 3)).toEqual(jasmine.any(Number));
	});
	it("should accept negative integers", () => {
		expect(add(-2, 2)).toEqual(0);
	});
});
describe("multiply function", function () {
	it("should multiply 2 digits", () => {
		expect(multiply(1, 2)).toBe(2);
	});
	it("should multiply multiple integers", () => {
		expect(multiply(1, 2, 3, 4, 5)).toEqual(120);
	});
	it("should accept integers", () => {
		expect(multiply(1, 2, 3)).toEqual(jasmine.any(Number));
	});
	it("should accept negative integers", () => {
		expect(multiply(-2, 2)).toEqual(-4);
	});
});
