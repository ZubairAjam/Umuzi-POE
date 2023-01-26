function luhnsAlgo(id) {
	const splitNumber = id.toString().split("");
	let totalEvenValue = 0;
	let totalOddValue = 0;
	for (let i = 0; i < splitNumber.length; i++) {
		if (i % 2 !== 0) {
			if (splitNumber[i] * 2 >= 10) {
				totalEvenValue += splitNumber[i] * 2 - 9;
			} else {
				totalEvenValue += splitNumber[i] * 2;
			}
		} else {
			totalOddValue += parseInt(splitNumber[i]);
		}
	}
	return (totalEvenValue + totalOddValue) % 10 === 0;
}

function validateSA_ID(id) {
	const idArr = id.toString().split("");
	const idYY = idArr.slice(0, 2).join("");
	const idMM = idArr.slice(2, 4).join("");
	const idDD = idArr.slice(4, 6).join("");
	const monthLength = new Date(idYY, idMM, 0).getDate();
	const citizenship = idArr[10];
	for (let i = 0; i < idArr.length; i++) {
		if (isNaN(idArr[i]) === true) {
			return false;
		}
	}
	if (
		idArr.length !== 13 ||
		idMM > 12 ||
		idMM == 00 ||
		idDD > monthLength ||
		(citizenship != 1 && citizenship != 0) ||
		luhnsAlgo(id) === false
	) {
		return false;
	} else {
		return true;
	}
}
module.exports = { validateSA_ID };
