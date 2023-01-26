function mergeArrAlt(arr1, arr2) {
	let i = 0;
	let j = 0;
	let merged = [];
	while (i < arr1.length || j < arr2.length) {
		if (i < arr1.length) {
			merged.push(arr1[i]);
			i++;
		}
		if (j < arr2.length) {
			merged.push(arr2[j]);
			j++;
		}
	}
	console.log(merged);
}
mergeArrAlt(["a", "b", "c", "d"], [1, 2, 3, 4]);
