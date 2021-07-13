"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var e_1, _a;
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
try {
    for (var matrix2x2_1 = __values(matrix2x2), matrix2x2_1_1 = matrix2x2_1.next(); !matrix2x2_1_1.done; matrix2x2_1_1 = matrix2x2_1.next()) {
        var val = matrix2x2_1_1.value;
        console.log(val);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (matrix2x2_1_1 && !matrix2x2_1_1.done && (_a = matrix2x2_1["return"])) _a.call(matrix2x2_1);
    }
    finally { if (e_1) throw e_1.error; }
}
// spread operator
var flattenedMatrix = __spreadArray([], __read(matrix2x2));
console.log(flattenedMatrix);
// deconstructing
var _b = __read(matrix2x2, 4), oneOne = _b[0], oneTwo = _b[1], twoOne = _b[2], twoTwo = _b[3];
console.log(oneOne, oneTwo, twoOne, twoTwo);
//# sourceMappingURL=matrix.js.map