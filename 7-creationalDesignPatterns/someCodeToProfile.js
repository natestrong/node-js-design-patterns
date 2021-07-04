"use strict";
exports.__esModule = true;
var profiler_1 = require("./profiler");
function getAllFactors(intNumber) {
    var profiler = profiler_1.createProfiler("Finding all factors of " + intNumber);
    profiler.start();
    var factors = [];
    for (var factor = 2; factor <= intNumber; factor++) {
        while ((intNumber % factor) === 0) {
            factors.push(factor);
            intNumber = intNumber / factor;
        }
    }
    profiler.end();
    return factors;
}
var myNumber = process.argv[2];
var myFactors = getAllFactors(myNumber);
console.log("Factors of " + myNumber + " are: ", myFactors);
//# sourceMappingURL=someCodeToProfile.js.map