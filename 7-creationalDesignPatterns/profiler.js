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
//# sourceMappingURL=profiler.js.map