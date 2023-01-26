function longestString(str) {
	let arrOut = [];
	let maxLength = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i].length > maxLength) {
			maxLength = str[i].length;
		}
	}
	for (let j = 0; j < str.length; j++) {
		if (str[j].length == maxLength) {
			arrOut.push(str[j]);
		}
	}
	return arrOut.join("\n");
}
console.log(longestString(["grape", "pear", "orange", "animals", "capital"]));
