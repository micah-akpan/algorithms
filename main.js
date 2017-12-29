function getPrimes(n) {
	// takes as input, n an int, and returns a list of primes numbers
	// starting from 0 to n
	if (n < 0 || typeof n == 'string' || n % 1 !== 0 || n == 1 || n == 0) {
		return 'undefined';
	} else {
		let primes = [];
	    for (let i = 2; i < n; i++) {
	    	if (isPrime(i))
			    primes.push(i);
	}

	return primes;

}	
	
}


function isPrime(n) {
	// takes as input, n an int and returns true if n is prime
	// or false, otherwise
	for (let i = 2; i < Math.floor(Math.sqrt(n) + 1); i++) {
		if (n % i === 0)
			return false;
	}

	return true;
}

/**
 * (int) -> bool
 * returns true or false, if the number is composite or not
 */

function isComposite(n) {

	// check for non-integer inputs
	if (typeof n != 'number') {
		return 'only integer inputs are allowed';
	}

	// excluding 1, we start with 2
	let startValue = 2;
	let count = 0; // increment count each time we get a factor of n

	for (let i = startValue; i < n; i++) {
		if (n % i == 0) {
			count++;
		}

		if (count > 1) {
			return true;
		}
	}

	return false;
}


exports.getPrimes = getPrimes;
exports.isComposite = isComposite;
