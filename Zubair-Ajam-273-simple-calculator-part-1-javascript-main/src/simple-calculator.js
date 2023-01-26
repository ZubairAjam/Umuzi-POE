function add() {
	const args = Array.prototype.slice.call(arguments, 0);
	let addSum = 0;
	for (let i = 0; i < args.length; i++) {
		addSum += args[i];
	}
	return addSum;
}
function multiply() {
	const args = Array.prototype.slice.call(arguments, 0);
	let multiplyProduct = 1;
	for (let i = 0; i < args.length; i++) {
		multiplyProduct = multiplyProduct * args[i];
	}
	return multiplyProduct;
}
module.exports = { add, multiply };
