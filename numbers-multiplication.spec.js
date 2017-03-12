describe('NumbersMultiplication', function () {
    describe('.calculate', function () {
        var numbersMult = new NumbersMultiplication();

        it('does not expect numbers to be primes', function () {
            expect(numbersMult.calculate([1, 2, 4])).toEqual([
                [1, 2, 4],
                [2, 4, 8],
                [4, 8, 16]]);
        });

        it('returns a matrix with 1 array and the correct value for 1 number', function () {
            expect(numbersMult.calculate([2])).toEqual([[4]]);
        });

        it('returns a matrix with 2 rows and correct values for 2 numbers', function () {
            expect(numbersMult.calculate([2, 3])).toEqual([
                [4, 6],
                [6, 9]]);
        });

        it('returns a matrix with 6 rows and correct values for 6 numbers', function () {
            expect(numbersMult.calculate([2, 3, 5, 7, 11, 13])).toEqual([
                [4, 6, 10, 14, 22, 26],
                [6, 9, 15, 21, 33, 39],
                [10, 15, 25, 35, 55, 65],
                [14, 21, 35, 49, 77, 91],
                [22, 33, 55, 77, 121, 143],
                [26, 39, 65, 91, 143, 169]
            ]);
        });

        it('returns a matrix with 10 rows and correct values for 10 numbers', function () {
            expect(numbersMult.calculate([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])).toEqual([
                [4, 6, 10, 14, 22, 26, 34, 38, 46, 58],
                [6, 9, 15, 21, 33, 39, 51, 57, 69, 87],
                [10, 15, 25, 35, 55, 65, 85, 95, 115, 145],
                [14, 21, 35, 49, 77, 91, 119, 133, 161, 203],
                [22, 33, 55, 77, 121, 143, 187, 209, 253, 319],
                [26, 39, 65, 91, 143, 169, 221, 247, 299, 377],
                [34, 51, 85, 119, 187, 221, 289, 323, 391, 493],
                [38, 57, 95, 133, 209, 247, 323, 361, 437, 551],
                [46, 69, 115, 161, 253, 299, 391, 437, 529, 667],
                [58, 87, 145, 203, 319, 377, 493, 551, 667, 841]
            ]);
        });

            var result = numbersMult.calculate([2, 3, 5, 7, 11, 13]);
            expect(result[1][3]).toEqual(result[3][1]);
            expect(result[2][4]).toEqual(result[4][2]);
            expect(result[3][5]).toEqual(result[5][3]);
        });

    });
});
