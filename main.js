function getPrimes(n) {
	// takes as input, n an int, and returns a list of primes numbers
	// starting from 0 to n
	if (n < 0 || typeof n == 'string' || n % 1 !== 0) {
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

exports.getPrimes = getPrimes;
