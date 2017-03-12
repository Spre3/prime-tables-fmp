var PrimeTables = function () {
};

PrimeTables.prototype.getPrimes = function (numberOfPrimes) {
    if (numberOfPrimes < 1) return null;

    var primes = [2];
    var number = 3;
    while (primes.length < numberOfPrimes) {
        if (this.isPrime(number))
            primes.push(number);
        number += 2;
    }
    return primes;
};

PrimeTables.prototype.isPrime = function(number) {
    for (var i = 3; i <= Math.sqrt(number); i+= 2) {
        if (number % i === 0)
            return false;
    }
    return true;
};
