"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var zlib_1 = require("zlib");
var stream_1 = require("stream");
var path_1 = require("path");
var upload_js_1 = require("./upload.js");
var filepath = process.argv[2]; // (1)
var filename = path_1.basename(filepath);
var contentStream = new stream_1.PassThrough(); // (2)
upload_js_1.upload(filename + ".br", contentStream) // (3)
    .then(function (response) {
    console.log("Server response: " + response.data);
})["catch"](function (err) {
    console.error(err);
    process.exit(1);
});
fs_1.createReadStream(filepath) // (4)
    .pipe(zlib_1.createBrotliCompress())
    .pipe(contentStream);
//# sourceMappingURL=upload.js.map