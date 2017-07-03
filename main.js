function getPrimes(n) {
	let primes = [];
	for (let i = 2; i < n; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}

	return primes;
}


function isPrime(n) {

	for (let i = 2; i < Math.floor(Math.sqrt(n) + 1); i++) {
		if (n % i === 0)
			return false;
	}

	return true;
}

exports.getPrimes = getPrimes;
