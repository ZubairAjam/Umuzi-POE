const { JamBuddy } = require("../src/semitone_difference");

let buddy = new JamBuddy();
describe("functions selectNotes and checkAnswer", function () {
	it("should check if selectNotes function exists", function () {
		expect(buddy.selectNotes).toBeDefined();
	});
	it("should check if checkAnswer function exists", function () {
		expect(buddy.checkAnswer).toBeDefined();
	});
});
describe("selectNotes", function () {
	it("should return an array of 2 notes", function () {
		let newNotes = buddy.selectNotes();
		expect(newNotes.length).toEqual(2);
	});
});
describe("checkAnswer ", function () {
	it("should return true if the input is correct", function () {
		buddy.result = ["A", "B"];
		expect(buddy.checkAnswer(2)).toBe(true);
	});
	it("should return false if the input is incorrect", function () {
		buddy.result = ["A", "B"];
		expect(buddy.checkAnswer(4)).toBe(false);
	});
	it("should return true to display the circle/scale is going clockwise/upward", function () {
		buddy.result = ["G#", "A"];
		expect(buddy.checkAnswer(1)).toBe(true);
	});
	it("should return true to display the circle/scale is going clockwise/upward", function () {
		buddy.result = ["B", "A"];
		expect(buddy.checkAnswer(10)).toBe(true);
	});
	it("should handle flats and sharps and return true if the input is correct", function () {
		buddy.result = ["Ab", "A#"];
		expect(buddy.checkAnswer(2)).toBe(true);
	});
	it("should handle flats and sharps and return true if the input is correct", function () {
		buddy.result = ["Bb", "A#"];
		expect(buddy.checkAnswer(0)).toBe(true);
	});
	it("should have a currentSelectedNotes function that keeps track of current notes", function () {
		expect(buddy.selectNotes()).toEqual(buddy.currentSelectedNotes());
	});
});
