const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let boardLocked = false;
let firstCard;
let secondCard;
let matchedCards = 0;
(function startGame() {
	shuffleCards();
})();
function shuffleCards() {
	cards.forEach((card) => {
		const random = Math.floor(Math.random() * 12);
		card.style.order = random;
	});
}

function showCard() {
	if (boardLocked) return;
	if (this === firstCard) return;

	this.classList.add("flip");

	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;
		return;
	}
	secondCard = this;
	cardsMatch();
}

function cardsMatch() {
	if (firstCard.id === secondCard.id) {
		lockCards();
		matchedCards++;
		restartGame();
	} else {
		unflipCards();
	}
}

function lockCards() {
	firstCard.removeEventListener("click", showCard);
	secondCard.removeEventListener("click", showCard);

	resetBoard();
}

function unflipCards() {
	boardLocked = true;

	setTimeout(() => {
		firstCard.classList.remove("flip");
		secondCard.classList.remove("flip");

		resetBoard();
	}, 800);
}

function resetBoard() {
	[hasFlippedCard, boardLocked] = [false, false];
	[firstCard, secondCard] = [null, null];
}

function restartGame() {
	if (matchedCards === cards.length / 2) {
		setTimeout(function () {
			alert("Well Done!");
		}, 500);

		setTimeout(function () {
			window.location.reload();
		}, 1500);
	}
}

cards.forEach((card) => card.addEventListener("click", showCard));
module.exports = {
	cards,
	boardLocked,
	showCard,
	shuffleCards,
	hasFlippedCard,
	lockCards,
};
