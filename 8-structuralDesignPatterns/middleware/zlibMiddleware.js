"use strict";
exports.__esModule = true;
exports.zlibMiddleware = void 0;
var zlib_1 = require("zlib");
var util_1 = require("util");
var inflateRawAsync = util_1.promisify(zlib_1.inflateRaw);
var deflateRawAsync = util_1.promisify(zlib_1.deflateRaw);
var zlibMiddleware = function () {
    return {
        inbound: function (message) {
            return inflateRawAsync(Buffer.from(message));
        },
        outbound: function (message) {
            return deflateRawAsync(message);
        }
    };
};
exports.zlibMiddleware = zlibMiddleware;
//# sourceMappingURL=zlibMiddleware.js.map