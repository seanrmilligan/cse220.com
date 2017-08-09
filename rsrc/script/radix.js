let baseChars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

/* OPERATIONS CONVERTING TO AND FROM STRING REPRESENTATIONS FOR ARBITRARY BASES */

/**
 * @param {number} value The value to be represented in base. Must be a positive integer.
 * @param {number} base The target base for representating value. Must be in the range [1, 36].
 * @returns {string} The string representation of value in base.
 */
function toBase(value, base) {
	var str = '';
	var remainder;

	while (value > 0) {
		remainder = value % base;
		value = value - remainder;
		value = value / base;

		str = baseChars[remainder] + str;
	}

	return str;
}