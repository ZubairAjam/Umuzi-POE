const fs = require("fs");
const {
	formatName,
	checkAssistantName,
	errors,
} = require("../src/node_file_io_assist");
class Visitor {
	constructor(fullName, age, date, time, comments, assistant) {
		(this.fullName = fullName),
			(this.age = age),
			(this.date = date),
			(this.time = time),
			(this.comments = comments),
			(this.assistant = assistant);
	}
	save() {
		checkAssistantName(this.assistant);
		const jsonString = JSON.stringify(this, null, 2);
		fs.writeFile(formatName(this.fullName), jsonString, (err) => {
			if (err) {
				console.log("Error writing file", err);
			} else {
				console.log("Successfully wrote file");
			}
		});
	}
}

function load(name) {
	fs.readFile(formatName(name), "utf8", (err, jsonString) => {
		if (err) {
			console.log("File read failed:", err);
		} else {
			console.log("File data:", jsonString);
		}
	});
}

module.exports = { Visitor, load };
