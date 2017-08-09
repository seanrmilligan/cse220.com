/**
 * @param {number} min The minimum end of the range for generating a random integer, inclusive.
 * @param {number} max The maximum end of the range for generating a random integer, inclusive.
 * @returns {number} The randomly generated number in range [min, max].
 */
function randInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @param {number} min The minimum end of the range for generating a random float, inclusive.
 * @param {number} max The maximum end of the range for generating a random float, exclusive.
 * @returns {number} The randomly generated number in range [min, max).
 */
function randFloat(min, max) {
	return (Math.random() * (max - min + 1));
}

/**
 * @param {Array} array The array from which to randomly select an element.
 * @returns {*} The randomly selected element from array.
 */
function randArrayItem(array) {
	return array[randInt(0, array.length-1)];
}