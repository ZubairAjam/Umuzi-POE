function leftTriangle(sizeOfTriangle) {
	if (sizeOfTriangle > 0) {
		for (let i = 1; i <= sizeOfTriangle; i++) {
			for (let j = 1; j <= i; j++) {
				process.stdout.write("#");
			}
			console.log("");
		}
	} else {
		sizeOfTriangle = sizeOfTriangle * -1;
		for (let i = sizeOfTriangle - 1; i >= 0; i--) {
			for (let j = -1; j < i; j++) {
				process.stdout.write("#");
			}
			console.log("");
		}
	}
}
function rightTriangle(sizeOfTriangle) {
	if (sizeOfTriangle > 0) {
		for (let i = 1; i <= sizeOfTriangle; i++) {
			for (let j = 0; j <= sizeOfTriangle - i; j++) {
				process.stdout.write(" ");
			}
			for (let k = 1; k <= i; k++) {
				process.stdout.write("#");
			}
			console.log("");
		}
	} else {
		sizeOfTriangle = sizeOfTriangle * -1;
		for (let i = 0; i <= sizeOfTriangle - 1; i++) {
			for (let j = 0; j <= i; j++) {
				process.stdout.write(" ");
			}
			for (let k = sizeOfTriangle - 1; k >= i; k--) {
				process.stdout.write("#");
			}
			console.log("");
		}
	}
}
function isoscelesTriangle(sizeOfTriangle) {
	if (sizeOfTriangle > 0) {
		for (let i = 1; i <= sizeOfTriangle; i++) {
			for (let j = 1; j <= sizeOfTriangle - i; j++) {
				process.stdout.write(" ");
			}
			for (let k = 1; k <= 2 * i - 1; k++) {
				process.stdout.write("#");
			}
			console.log("");
		}
	} else {
		sizeOfTriangle = sizeOfTriangle * -1;
		for (let i = sizeOfTriangle - 1; i >= 0; i--) {
			for (let j = 2; j <= sizeOfTriangle - i; j++) {
				process.stdout.write(" ");
			}
			for (let k = 0; k < i * 2 + 1; k++) {
				process.stdout.write("#");
			}
			console.log("");
		}
	}
}
function triangle(sizeOfTriangle, mode) {
	if (mode != undefined) {
		mode = mode.toLowerCase();
	}
	if (mode === undefined || mode === "left") {
		leftTriangle(sizeOfTriangle);
	} else if (mode === "right") {
		rightTriangle(sizeOfTriangle);
	} else if (mode === "isosceles") {
		isoscelesTriangle(sizeOfTriangle);
	}
}
triangle(5, "Left");
