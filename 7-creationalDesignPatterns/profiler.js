"use strict";
exports.__esModule = true;
exports.createProfiler = void 0;
var Profiler = /** @class */ (function () {
    function Profiler(label) {
        this.label = label;
        this.lastTime = null;
    }
    Profiler.prototype.start = function () {
        this.lastTime = process.hrtime();
    };
    Profiler.prototype.end = function () {
        var diff = process.hrtime(this.lastTime);
        console.log("Timer \"" + this.label + "\" took " + diff[0] + "." + diff[1] + " seconds.");
    };
    return Profiler;
}());
var noopProfiler = {
    start: function () {
    },
    end: function () {
    },
};
function createProfiler(label) {
    if (process.env.NODE_ENV === "production") {
        return noopProfiler;
    }
    return new Profiler(label);
}
exports.createProfiler = createProfiler;
//# sourceMappingURL=profiler.js.map