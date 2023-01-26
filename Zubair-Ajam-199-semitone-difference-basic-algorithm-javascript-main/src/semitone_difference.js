class JamBuddy {
	constructor() {
		this.noteCircle = [
			"A",
			["A#", "Bb"],
			"B",
			"C",
			["C#", "Db"],
			"D",
			["D#", "Eb"],
			"E",
			"F",
			["F#", "Gb"],
			"G",
			["G#", "Ab"],
		];
		this.result = [];
	}

	selectNotes() {
		const notesArray = [...this.noteCircle];
		this.result = notesArray.sort(() => 0.5 - Math.random()).slice(0, 2);
		for (let i = 0; i < this.result.length; i++) {
			if (Array.isArray(this.result[i])) {
				this.result[i] = this.result[i]
					.sort(() => 0.5 - Math.random())
					.slice(0, 1)
					.join();
			}
		}
		return this.result;
	}
	currentSelectedNotes() {
		return this.result;
	}
	calculateDistance() {
		let firstIndex;
		let secondIndex;
		for (let i = 0; i < this.noteCircle.length; i++) {
			if (
				this.result[0] === this.noteCircle[i][0] ||
				this.result[0] === this.noteCircle[i][1]
			) {
				firstIndex = i;
			}
			if (
				this.result[1] === this.noteCircle[i][0] ||
				this.result[1] === this.noteCircle[i][1]
			) {
				secondIndex = i;
			}
		}
		let difference = 0;
		if (firstIndex > secondIndex) {
			difference = 12 - Math.abs(firstIndex - secondIndex);
		} else {
			difference = Math.abs(firstIndex - secondIndex);
		}
		return difference;
	}
	checkAnswer(input) {
		const difference = this.calculateDistance();
		return input == difference;
	}
}

module.exports = { JamBuddy };
