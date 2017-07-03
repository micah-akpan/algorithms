function getPrimes(n) {
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

	for (let i = 2; i < Math.floor(Math.sqrt(n) + 1); i++) {
		if (n % i === 0)
			return false;
	}

	return true;
}

exports.getPrimes = getPrimes;
