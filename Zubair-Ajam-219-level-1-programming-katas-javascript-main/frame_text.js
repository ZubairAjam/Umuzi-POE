function frame(strArray) {
	let maxLength = 0;
	let space = 0;
	for (let i = 0; i < strArray.length; i++) {
		if (strArray[i].length > maxLength) {
			maxLength = strArray[i].length;
		}
	}
	for (let j = 1; j < maxLength + 5; j++) {
		process.stdout.write("*");
	}
	console.log("");
	for (let k = 0; k < strArray.length; k++) {
		process.stdout.write("*" + " " + strArray[k] + "");
		space = maxLength + 5 - (strArray[k].length + 3);
		for (let x = 1; x <= space - 1; x++) {
			process.stdout.write(" ");
		}
		process.stdout.write("*");
		console.log(" ");
	}
	for (let j = 1; j < maxLength + 5; j++) {
		process.stdout.write("*");
	}
}
frame(["write", "good", "code", "always"]);
