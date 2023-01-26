const { JSDOM } = require("jsdom");
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const { document } = new JSDOM(index).window;
global.document = document;
const {
	cards,
	shuffleCards,
	showCard,
	boardLocked,
} = require("../src/memory_game");
beforeEach(function (done) {
	let browser;
	JSDOM.fromFile("index.html").then(function (res) {
		browser = res;
		done();
	});
});

describe("Memory game", function () {
	beforeEach(() => {
		const event = document.createEvent("MouseEvent");
		event.initEvent("click", true, true);
		cards[0].addEventListener("click", showCard);
		cards[0].dispatchEvent(event);
	});

	it("should have a total of 12 cards to display", () => {
		expect(cards.length).toEqual(12);
	});
	it("should shuffle cards on open", () => {
		expect(shuffleCards).toBeDefined();
	});
	it("should show the image card when clicked", () => {
		const cardClassList = cards[0].classList.toString();
		expect(cardClassList).toBe("memory-card flip");
	});
	it("should have boardLocked as false", () => {
		expect(boardLocked).toEqual(false);
	});
	it("should turn over a card and show when image is clicked", () => {
		spyOn(cards[0], "click").and.callFake((e) => {
			expect(e).toBe("memory-card flip");
		});
	});
});
