const buddy = new JamBuddy();

let streak = 0;

function getNotes() {
	domElements.submitEl.disabled = false;
	domElements.inputEl.value = "";
	domElements.resultEl.textContent = "";
	domElements.explanationEl.innerHTML = "";
	domElements.answerEl.innerHTML = "";
	notesDisplay.textContent = buddy.selectNotes();
}

function getAnswer() {
	buddy.calculateDistance();
	const input = domElements.inputEl.value;
	buddy.checkAnswer(input);

	let rightOrWrong = "";
	if (buddy.checkAnswer(input) === true) {
		streak++;
		rightOrWrong = resultStrings.right;
		revealAnswer();
		domElements.submitEl.disabled = true;
	} else {
		streak = 0;
		rightOrWrong = resultStrings.wrong;
	}

	domElements.streakEl.innerHTML = "Streak = " + streak;
	domElements.resultEl.innerHTML = rightOrWrong;
}

function formatNotes() {
	let currentNotes = domElements.notesDisplayEl.innerHTML.toString().split(",");
	for (let i = 0; i < currentNotes.length; i++) {
		if (currentNotes[i] == "Bb" || currentNotes[i] == "A#") {
			currentNotes[i] = "(A#/Bb)";
		} else if (currentNotes[i] == "Db" || currentNotes[i] == "C#") {
			currentNotes[i] = "(C#/Db)";
		} else if (currentNotes[i] == "Eb" || currentNotes[i] == "D#") {
			currentNotes[i] = "(D#/Eb)";
		} else if (currentNotes[i] == "Gb" || currentNotes[i] == "F#") {
			currentNotes[i] = "(F#/Gb)";
		}
		if (currentNotes[i] == "Ab" || currentNotes[i] == "G#") {
			currentNotes[i] = "(G#/Ab)";
		}
	}
	return currentNotes;
}
function revealAnswer() {
	let currentNotes = formatNotes();
	const displayedNotes = [
		"A",
		"(A#/Bb)",
		"B",
		"C",
		"(C#/Db)",
		"D",
		"(D#/Eb)",
		"E",
		"F",
		"(F#/Gb)",
		"G",
		"(G#/Ab)",
	];
	let explanationStr = "";

	for (let i = 0; i < displayedNotes.length; i++) {
		if (currentNotes[0] === displayedNotes[i]) {
			explanationStr =
				explanationStr + displayedNotes[i].fontcolor("red").bold() + " | ";
		} else if (currentNotes[1] === displayedNotes[i]) {
			explanationStr =
				explanationStr + displayedNotes[i].fontcolor("red").bold() + " | ";
		} else {
			explanationStr = explanationStr + displayedNotes[i] + " | ";
		}
	}
	domElements.explanationEl.innerHTML = explanationStr;
	domElements.answerEl.innerHTML = "Answer = " + buddy.calculateDistance();
	domElements.submitEl.disabled = true;
}
