var PrimeTables = function () {
};

PrimeTables.prototype.getPrimes = function (numberOfPrimes) {
    if (numberOfPrimes < 1) return null;

    var primes = [2];
    var number = 3;
    while (primes.length < numberOfPrimes) {
        if (this.isPrime(number))
            primes.push(number);
        number++;
    }
    return primes;
};

PrimeTables.prototype.isPrime = function(number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0)
            return false;
    }
    return true;
};
