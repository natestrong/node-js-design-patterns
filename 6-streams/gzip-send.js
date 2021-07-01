"use strict";
exports.__esModule = true;
var http_1 = require("http");
var zlib_1 = require("zlib");
var fs_1 = require("fs");
var path_1 = require("path");
var filename = process.argv[2];
var serverHost = process.argv[3];
var httpRequestOptions = {
    hostname: serverHost,
    port: 3000,
    path: '/',
    method: 'PUT',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Encoding': 'gzip',
        'X-Filename': path_1.basename(filename)
    }
};
var req = http_1.request(httpRequestOptions, function (res) {
    console.log("Server response: " + res.statusCode);
});
fs_1.createReadStream(filename)
    .pipe(zlib_1.createGzip())
    .pipe(req)
    .on('finish', function () {
    console.log('File successfully sent');
});
//# sourceMappingURL=gzip-send.js.map