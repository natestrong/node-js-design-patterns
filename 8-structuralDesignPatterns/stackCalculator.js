var StackCalculator = /** @class */ (function () {
    function StackCalculator() {
        this.stack = [];
    }
    StackCalculator.prototype.putValue = function (value) {
        this.stack.push(value);
    };
    StackCalculator.prototype.getValue = function () {
        return this.stack.pop();
    };
    StackCalculator.prototype.peekValue = function () {
        return this.stack[this.stack.length - 1];
    };
    StackCalculator.prototype.clear = function () {
        this.stack = [];
    };
    StackCalculator.prototype.divide = function () {
        var divisor = this.getValue();
        var dividend = this.getValue();
        var result = dividend / divisor;
        this.putValue(result);
        return result;
    };
    StackCalculator.prototype.multiply = function () {
        var multiplicand = this.getValue();
        var multiplier = this.getValue();
        var result = multiplier * multiplicand;
        this.putValue(result);
        return result;
    };
    return StackCalculator;
}());
var calculator = new StackCalculator();
calculator.putValue(3);
calculator.putValue(2);
console.log(calculator.multiply()); // 3*2 = 6
calculator.putValue(2);
console.log(calculator.multiply()); // 6*2 = 12
//# sourceMappingURL=stackCalculator.js.map