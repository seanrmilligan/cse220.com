/* EXTENSION OPERATIONS ON STRING REPRESENTATIONS OF BINARY NUMBERS */

/**
 * @param {string} str The string representation of a binary number.
 * @param {number} width The total length the extended string should be.
 * @param {string} char The character to prepend to str.
 * @returns {string} The extended binary number, or the original string if width is less than or equal to the length of str.
 */
function extend(str, width, char) {
	var extStr = str;

	while (extStr.length < width) {
		extStr = char + extStr;
	}

	return extStr;
}

/**
 * @param {string} str The string representation of a binary number.
 * @param {number} width The total length the extended string should be.
 * @returns {string} The zero-extended binary number, or the original string if width is less than or equal to the length of str.
 */
function zeroExtend(str, width) {
	return extend(str, width, '0');
}

/**
 * @param {string} str The string representation of a binary number.
 * @param {number} width The total length the extended string should be.
 * @returns {string} The sign-extended binary number, or the original string if width is less than or equal to the length of str.
 */
function signExtend(str, width) {
	var sign = (str == '') ? '0' : str[0];
	return extend(str, width, sign);
}

/* BITWISE OPERATIONS ON STRING REPRESENTATIONS OF BINARY NUMBERS */

/**
 * @param {string} str The string representation of a binary number.
 * @returns {string} The string representation of the binary number with all of the bits flipped.
 */
function invert(str) {
	var inv = '';
	var c;

	for (var i=0; i<str.length; i++) {
		c = (str[i] == '0') ? '1' : '0';
		inv = inv + c;
	}

	return inv;
}

/* OTHER OPERATIONS ON STRING REPRESENTATIONS OF BINARY NUMBERS */

/**
 * @param {string} str The string representation of a two's complement binary number.
 * @returns {string} The string representation of the negated two's complement binary number.
 */
function negate(str) {
	var neg = invert(str);
	var carry = true;

	/* omfg I'm doing string math, there must be a better way */
	for (var i=neg.length-1; (carry && i >= 0); i--) {
		if (neg[i] == '1') {
			neg[i] = '0'
		} else {
			neg[i] = '1';
			carry = false;
		}
	}

	return neg;
}