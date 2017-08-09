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

/**
 * @param {string} str The string representation of a value in base.
 * @param {number} base The base for interpreting value. Must be in the range [1, 36].
 * @returns {number} The value of the string representation interpreted as a number in base.
 */
function fromBase(str, base) {

}

/* OPERATIONS CONVERTING TO AND FROM STRING REPRESENTATIONS OF UNSIGNED MAGNITUDE */

/**
 * @param {number} value The number to convert to unsigned magnitude.
 * @returns {string} The representation of value in unsigned magnitude.
 */
function toUnsignedMagnitude(value) {
	return toBase(value, 2);
}

/* OPERATIONS CONVERTING TO AND FROM STRING REPRESENTATIONS OF SIGNED MAGNITUDE */

/**
 * @param {number} value The number to convert to signed magnitude.
 * @param {number} width The bit-width of the string representation.
 * @returns {string} The representation of value in signed magnitude.
 */
function toSignedMagnitude(value, width) {
	var signBit = (value < 0) ? '1' : '0';
	return signBit + zeroExtend(toBase(Math.abs(value), 2), width-1);
}

/* OPERATIONS CONVERTING TO AND FROM STRING REPRESENTATIONS OF ONE'S COMPLEMENT */

/**
 * @param {number} value The number to convert to one's complement.
 * @param {number} width The bit-width of the string representation.
 * @returns {string} The representation of value in one's complement.
 */
function toOnesComplement(value, width) {
	if (value < 0) {
		return invert(zeroExtend(toBase(Math.abs(value), 2), width));
	} else {
		return zeroExtend(toBase(value, 2), width);
	}
}

/* OPERATIONS CONVERTING TO AND FROM STRING REPRESENTATIONS OF TWO'S COMPLEMENT */

/**
 * @param {number} value The number to convert to two's complement.
 * @param {number} width The bit-width of the string representation.
 * @returns {string} The representation of value in two's complement.
 */
function toTwosComplement(value, width) {
	if (value < 0) {
		return negate(zeroExtend(toBase(Math.abs(value), 2), width));
	} else {
		return zeroExtend(toBase(value, 2), width);
	}
}

/* OPERATIONS CONVERTING TO AND FROM STRING REPRESENTATIONS OF IEEE 754 FLOATING POINT */

function toSinglePrecision(value) {
	return '[not implemented]';
}

function toDoublePrecision(value) {
	return '[not implemented]';
}