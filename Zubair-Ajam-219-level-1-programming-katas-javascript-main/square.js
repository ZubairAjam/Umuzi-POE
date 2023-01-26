function square(sizeOfSquare, input="#") {
	let result = "";
	for (let i = 1; i <= sizeOfSquare; i++) {
		for (let j = 1; j <= sizeOfSquare; j++) {
			process.stdout.write(result.concat(input));
		}
		console.log("");
	}
}
square(4, "a");