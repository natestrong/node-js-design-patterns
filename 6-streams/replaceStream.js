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
exports.ReplaceStream = void 0;
var stream_1 = require("stream");
var ReplaceStream = /** @class */ (function (_super) {
    __extends(ReplaceStream, _super);
    function ReplaceStream(searchStr, replaceStr, options) {
        var _this = _super.call(this, __assign({}, options)) || this;
        _this.searchStr = searchStr;
        _this.replaceStr = replaceStr;
        _this.tail = '';
        return _this;
    }
    ReplaceStream.prototype._transform = function (chunk, encoding, callback) {
        var pieces = (this.tail + chunk).split(this.searchStr); // (1)
        var lastPiece = pieces[pieces.length - 1]; // (2)
        var tailLen = this.searchStr.length - 1;
        this.tail = lastPiece.slice(-tailLen);
        pieces[pieces.length - 1] = lastPiece.slice(0, -tailLen);
        this.push(pieces.join(this.replaceStr)); // (3)
        callback();
    };
    ReplaceStream.prototype._flush = function (callback) {
        this.push(this.tail);
        callback();
    };
    return ReplaceStream;
}(stream_1.Transform));
exports.ReplaceStream = ReplaceStream;
//# sourceMappingURL=replaceStream.js.map