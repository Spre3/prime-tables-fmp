var NumbersMultiplication = function () {
};

NumbersMultiplication.prototype.calculate = function (numbers) {
    var result = [];
    for (var rowIndex = 0; rowIndex < numbers.length; rowIndex++) {
        if (!result[rowIndex]) result[rowIndex] = [];

        for (var multiplierIndex = rowIndex; multiplierIndex < numbers.length; multiplierIndex++) {
            result[rowIndex].push(numbers[rowIndex] * numbers[multiplierIndex]);
        }

        for (var j = rowIndex + 1; j < numbers.length; j++) {
            if (!result[j]) result[j] = [];
            result[j].push(result[rowIndex][j]);
        }
    }
    return result;
}