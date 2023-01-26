const fs = require("fs");
const { Visitor, load } = require("../src/node_file_io");
const { formatName, errors } = require("../src/node_file_io_assist");
const fileName = formatName("Alice Cooper");
const alice = new Visitor(
	"Alice Cooper",
	40,
	"2021-09-30",
	"20:30",
	"Kinda weird, I don't think he'll fit in",
	"Zack Jack"
);
const jack = new Visitor(
	"J.D Dame",
	40,
	"2021-10-30",
	"21:30",
	"Meh",
	"Zack Jack"
);
const bob = new Visitor(
	"Bob Marley",
	27,
	"2021-04-20",
	"16:40",
	"He's ok",
	"Zack J"
);

describe("save function", function () {
	it("should call writeFile and check if save() function was called and saved the correctly named file", () => {
		spyOn(fs, "writeFile");
		alice.save();
		expect(fs.writeFile).toHaveBeenCalled();
		expect(fs.writeFile).toHaveBeenCalledWith(
			fileName,
			JSON.stringify(alice, null, 2),
			jasmine.any(Function)
		);
	});
	it("should throw an error if the Visitors full name is incorrectly provided", () => {
		expect(function () {
			jack.save();
		}).toThrowError(errors.invalidName);
	});
	it("should throw an error if the assistants full name is incorrectly provided", () => {
		expect(function () {
			bob.save();
		}).toThrowError(errors.assistantName);
	});
});

describe("Load", () => {
	it("should call readFile and load correct details for Alice", () => {
		spyOn(fs, "readFile");
		load("Alice Cooper");

		expect(fs.readFile).toHaveBeenCalled();
		expect(fs.readFile).toHaveBeenCalledWith(
			fileName,
			"utf8",
			jasmine.any(Function)
		);
	});
});
