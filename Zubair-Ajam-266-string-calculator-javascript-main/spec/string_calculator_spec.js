const { add } = require("../src/string_calculator");
describe("add", function () {
	it("should add 2 numbers", function () {
		expect(add("1,2")).toEqual(3);
	});
	it("should return 0 if the string is empty", function () {
		expect(add("")).toEqual(0);
	});
	it("should return 1 number if only 1 number is passed", function () {
		expect(add("1")).toEqual(1);
	});
	it("should add multiple numbers", function () {
		expect(add("1,2,3,4")).toEqual(10);
	});
	it("should handle a new line as a delimiter and add numbers", function () {
		expect(add("1,2\n3")).toEqual(6);
	});
	it("should handle a delimiter and add numbers", function () {
		expect(add("//;\n1;2")).toEqual(3);
	});
	it("should handle delimiters of any length and add numbers", function () {
		expect(add("//***\n1***2***3")).toEqual(6);
	});
	it("should handle multiple delimiters and add numbers", function () {
		expect(add("//[:D][%]\n1:D2%3")).toEqual(6);
	});
	it("should throw an error if there is a negative number and display the numbers as well", function () {
		expect(function () {
			add("-1,-2,3,4");
		}).toThrow(new Error("negatives not allowed -1,-2"));
	});
	it("should ignore integers greater than 999", function () {
		expect(add("//;\n1000;1;2")).toEqual(3);
	});
	it("should throw an error if it is an invalid input", function () {
		expect(function () {
			add("   //;\n1000,1;2");
		}).toThrow(new Error("invalid input"));
	});
	it("should throw an error if it is an invalid input", function () {
		expect(function () {
			add("1,2,3//;\n1000,1;2");
		}).toThrow(new Error("invalid input"));
	});
});
