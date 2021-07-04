"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ParallelStream = void 0;
var stream_1 = require("stream");
var ParallelStream = /** @class */ (function (_super) {
    __extends(ParallelStream, _super);
    function ParallelStream(userTransform, opts) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, __assign({ objectMode: true }, opts)) || this;
        _this.userTransform = userTransform;
        _this.running = 0;
        _this.terminateCb = null;
        return _this;
    }
    ParallelStream.prototype._transform = function (chunk, enc, done) {
        this.running++;
        this.userTransform(chunk, enc, this.push.bind(this), this._onComplete.bind(this));
        done();
    };
    ParallelStream.prototype._flush = function (done) {
        if (this.running > 0) {
            this.terminateCb = done;
        }
        else {
            done();
        }
    };
    ParallelStream.prototype._onComplete = function (err) {
        this.running--;
        if (err) {
            return this.emit('error', err);
        }
        if (this.running === 0) {
            this.terminateCb && this.terminateCb();
        }
    };
    return ParallelStream;
}(stream_1.Transform));
exports.ParallelStream = ParallelStream;
//# sourceMappingURL=parallel-stream.js.map