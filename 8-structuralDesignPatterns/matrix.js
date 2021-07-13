"use strict";
exports.__esModule = true;
exports.Matrix = void 0;
/**
 * Implements the iterable protocol
 */
var Matrix = /** @class */ (function () {
    function Matrix(inMatrix) {
        this.data = inMatrix;
    }
    Matrix.prototype.get = function (row, column) {
        if (row >= this.data.length ||
            column >= this.data[row].length) {
            throw new RangeError('Out of bounds');
        }
        return this.data[row][column];
    };
    Matrix.prototype.set = function (row, column, value) {
        if (row >= this.data.length ||
            column >= this.data[row].length) {
            throw new RangeError('Out of bounds');
        }
        this.data[row][column] = value;
    };
    Matrix.prototype[Symbol.iterator] = function () {
        var _this = this;
        var nextRow = 0;
        var nextCol = 0;
        return {
            next: function () {
                if (nextRow === _this.data.length) {
                    return { done: true };
                }
                var currVal = _this.data[nextRow][nextCol];
                if (nextCol === _this.data[nextRow].length - 1) {
                    nextRow++;
                    nextCol = 0;
                }
                else {
                    nextCol++;
                }
                return { value: currVal };
            }
        };
    };
    return Matrix;
}());
exports.Matrix = Matrix;
var matrix2x2 = new Matrix([
    ['11', '12'],
    ['21', '22']
]);
var matrixIterator = matrix2x2[Symbol.iterator]();
var matrixIteratorResult = matrixIterator.next();
while (!matrixIteratorResult.done) {
    console.log(matrixIteratorResult.value);
    matrixIteratorResult = matrixIterator.next();
}
//# sourceMappingURL=matrix.js.map