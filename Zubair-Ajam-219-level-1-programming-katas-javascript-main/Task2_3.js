function printColumns(arr) {
	let maxLength = 0;
	let word = "";
	let index = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > maxLength) {
			maxLength = arr[i].length;
		}
	}
	for (let j = 0; j < maxLength; j++) {
		for (let k = 0; k < arr.length; k++) {
			if (index >= arr[k].length) {
				word += "  ";
			} else {
				word += arr[k][index] + " ";
			}
		}
		word += "\n";
		index++;
	}
	console.log(word.trim());
}
printColumns(["Write", "good", "code", "every", "day"]);
