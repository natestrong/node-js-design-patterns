"use strict";
exports.__esModule = true;
var stackCalculator_1 = require("./stackCalculator");
var SafeCalculator = /** @class */ (function () {
    function SafeCalculator(calculator) {
        this.calculator = calculator;
    }
    // proxied method
    SafeCalculator.prototype.divide = function () {
        // additional validation logic
        var divisor = this.calculator.peekValue();
        if (divisor === 0) {
            throw Error('Division by 0');
        }
        // if valid delegates to the subject
        return this.calculator.divide();
    };
    // delegated methods
    SafeCalculator.prototype.putValue = function (value) {
        return this.calculator.putValue(value);
    };
    SafeCalculator.prototype.getValue = function () {
        return this.calculator.getValue();
    };
    SafeCalculator.prototype.peekValue = function () {
        return this.calculator.peekValue();
    };
    SafeCalculator.prototype.clear = function () {
        return this.calculator.clear();
    };
    SafeCalculator.prototype.multiply = function () {
        return this.calculator.multiply();
    };
    return SafeCalculator;
}());
var calculator = new stackCalculator_1.StackCalculator();
var safeCalculator = new SafeCalculator(calculator);
calculator.putValue(3);
calculator.putValue(2);
console.log(calculator.multiply()); // 3*2 = 6
safeCalculator.putValue(2);
console.log(safeCalculator.multiply()); // 6*2 = 12
calculator.putValue(0);
console.log(calculator.divide()); // 12/0 = Infinity
safeCalculator.clear();
safeCalculator.putValue(4);
safeCalculator.putValue(0);
console.log(safeCalculator.divide()); // 4/0 -> Error
//# sourceMappingURL=safeCalculator.js.map