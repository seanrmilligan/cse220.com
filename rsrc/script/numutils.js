/**
 * @description Determines if two numbers are coprime (that they have no common
 *     divisors other than one).
 * @param {number} a One of numbers for which we want to know if there is a
 *     coprime relationship.
 * @param {number} b One of numbers for which we want to know if there is a
 *     coprime relationship.
 * @returns {boolean} true if the numbers are coprime, false otherwise.
 */
function coprime(a, b) {
	return gcd(a, b) == 1;
}

/**
 * @description Finds the greatest common divisor of two numbers using a
 *     recursive strategy and Euclid's method. Stops at a base case of b = 0.
 * @param {number} a One of numbers for which we want to find the greatest
 *     common divisor.
 * @param {number} b One of numbers for which we want to find the greatest
 *     common divisor.
 * @returns {number} The greatest common divisor of a and b.
 */
function gcd(a, b) {
	return b ? gcd(b, a % b) : a;
}

