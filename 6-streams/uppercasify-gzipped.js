"use strict";
exports.__esModule = true;
var zlib_1 = require("zlib");
var stream_1 = require("stream");
var uppercasify = new stream_1.Transform({
    transform: function (chunk, enc, cb) {
        this.push(chunk.toString().toUpperCase());
        cb();
    }
});
stream_1.pipeline(process.stdin, zlib_1.createGunzip(), uppercasify, zlib_1.createGzip(), process.stdout, function (err) {
    if (err) {
        console.error(err);
        process.exit(1);
    }
});
//# sourceMappingURL=uppercasify-gzipped.js.map