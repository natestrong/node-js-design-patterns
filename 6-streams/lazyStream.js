"use strict";
exports.__esModule = true;
var lazystream_1 = require("lazystream");
var fs_1 = require("fs");
var lazyURandom = new lazystream_1["default"].Readable(function (options) {
    return fs_1.createReadStream('/dev/urandom');
});
//# sourceMappingURL=lazyStream.js.map