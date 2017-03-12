var NumbersMultiplication = function () {
};

NumbersMultiplication.prototype.calculate = function (numbers) {
    var result = [];
    for (var i = 0; i < numbers.length; i++) {
        result[i] = numbers.map(
            function (x) {
                return x * numbers[i];
            });
    }
    return result;
}