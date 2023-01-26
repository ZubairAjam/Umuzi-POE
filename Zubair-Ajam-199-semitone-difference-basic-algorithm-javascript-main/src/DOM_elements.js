const resultStrings = {
	right: "You got it right. Well Done!",
	wrong: "Wrong answer! Try again",
};
const domElements = {
	submitEl: document.getElementById("submit"),
	resultEl: document.getElementById("result"),
	explanationEl: document.getElementById("explanation"),
	answerEl: document.getElementById("answer"),
	inputEl: document.getElementById("inputAnswer"),
	streakEl: document.getElementById("streak"),
	notesDisplayEl: document.getElementById("notesDisplay"),
	btnEl: document.getElementById("btn"),
};

module.exports = { domElements, resultStrings };
