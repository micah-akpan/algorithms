/**
 * @function getPrimes
 * 
 * @param {Number} n
 * @return {[Number]} 
 * Returns a list of prime numbers starting from 0 to n
 */

const getPrimes = (n) => {

	let primes = [];

	if (n < 0 || typeof n === 'string' || n % 1 !== 0 || n === 1 || n === 0) {
		return 'undefined';
	} else {
		
	    for (let i = 2; i < n; i++) {
	    	if (isPrime(i)) {
				primes.push(i);
			}
		}

	return primes;

	}	
}

/**
 * @function isPrime
 * 
 * @param { Number } n
 * @return { Boolean }  
 * Returns true, if n is a prime number, false otherwise
 */
function isPrime(n) {
	
	for (let i = 2, flSqr = Math.floor(Math.sqrt(n) + 1); i < flSqr; i++) {
		if (n % i === 0) {
			return false;
		}
	}

	return true;
}

/**
 * @function isComposite
 * 
 * @param { Number } n
 * @return { Boolean }
 * Returns true or false, if the number is composite or not
 */

const isComposite = (n) => {

	// check for non-integer inputs
	if ((typeof n != 'number') && (n % 1 != 0)) {
		return 'only integer inputs are allowed';
	}

	// excluding 1, we start with 2
	let startValue = 2;
	let count = 0; // increment count each time we get a factor of n

	for (let i = startValue; i < n; i++) {
		if (n % i === 0) {
			count++;
		}

		if (count > 1) {
			return true;
		}
	}

	return false;
}

/**
 * @function parseCreditCard
 * 
 * @param { String } str
 * @return { String }
 * Parses the string input and outputs a well-formatted credit card number
 */
const parseCreditCard = (str) => {

	str = String(str); // just in case, the user enters 'numbers' instead of a string
	if (str.length !== 16) {
		throw new Error("can only accept credit cards with 16 digits");
	}

	let creditCard = '', count = 0;
	for (let i = 0, strLength = str.length; i < strLength; i++) {
		creditCard += str.charAt(i);

		if (creditCard.length == 19) {
			// we are at the last digit
			break;
		}

		if (count == 3) {
			creditCard += '-';
			count = -1;
		}

		count++;
	}

	return creditCard;
}

/**
 * @function parseCreditCard2
 * 
 * @param { String } str
 * @return { String }
 * Parses the string and adds the right dashes to
 * get a well-formatted credit card number.
 * This code does the same thing as the one above, but uses regular expression
 */
const parseCreditCard2 = (str) => {
	const dig4Pattern = /[0-9]{4}/g;
	return str.match(dig4Pattern).join('-');
}


exports.getPrimes = getPrimes;
exports.isComposite = isComposite;
exports.parseCreditCard = parseCreditCard;
exports.parseCreditCard2 = parseCreditCard2;
