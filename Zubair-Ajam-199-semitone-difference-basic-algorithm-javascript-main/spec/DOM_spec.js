const { JamBuddy } = require("../src/semitone_difference");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const html = fs.readFileSync("index.html", "utf-8");
global.document = new JSDOM(html).window.document;
const { domElements } = require("../src/DOM_elements");
let buddy = new JamBuddy();

describe("index.html", function () {
	let browser;

	beforeEach(function (done) {
		JSDOM.fromFile("index.html").then(function (res) {
			browser = res;
			done();
		});
	});

	afterEach(function () {
		browser.window.close();
	});

	it("should have </div> element", function () {
		const div = browser.window.document.querySelector("div");
		expect(div).not.toBe(null);
	});
	it("should have </script> element", function () {
		const script = browser.window.document.querySelector("script");
		expect(script).not.toBe(null);
	});
	it("should have </button> element", function () {
		const button = browser.window.document.querySelector("button");
		expect(button).not.toBe(null);
	});
	it("should have </input> element", function () {
		const input = browser.window.document.querySelector("input");
		expect(input).not.toBe(null);
	});
	it("should update dom to display random notes when GET RANDOM NOTES button is clicked", () => {
		expect(global.document.getElementById("notesDisplay").innerHTML).toBe("");
		const randomNotes = domElements.btnEl;
		randomNotes.addEventListener("click", function () {
			domElements.notesDisplayEl.innerHTML = buddy.selectNotes();
		});
		randomNotes.click();
		expect(global.document.getElementById("notesDisplay").innerHTML).not.toBe(
			""
		);
	});
	it("should update dom to display correct or incorrect statements when submit button is clicked", () => {
		expect(global.document.getElementById("result").innerHTML).toBe("");
		const submit = domElements.submitEl;
		const result = domElements.resultEl;
		submit.addEventListener("click", function () {
			domElements.resultEl.innerHTML = result;
		});
		submit.click();
		expect(global.document.getElementById("result").innerHTML).not.toBe("");
	});
	it("should clear answer div when GET RANDOM NOTES is clicked", () => {
		const randomNotes = domElements.btnEl;
		randomNotes.click();
		expect(global.document.getElementById("answer").innerHTML).toBe("");
	});
	it("should clear explanation div when GET RANDOM NOTES is clicked", () => {
		const randomNotes = domElements.btnEl;
		randomNotes.click();
		expect(global.document.getElementById("explanation").innerHTML).toBe("");
	});
	it("should clear inputAnswer div when GET RANDOM NOTES is clicked", () => {
		const randomNotes = domElements.btnEl;
		randomNotes.click();
		expect(global.document.getElementById("inputAnswer").innerHTML).toBe("");
	});
});
