"use strict";
exports.__esModule = true;
var stream_1 = require("stream");
var bytesWritten = 0;
var monitor = new stream_1.PassThrough();
monitor.on('data', function (chunk) {
    bytesWritten += chunk.length;
});
monitor.on('finish', function () {
    console.log(bytesWritten + " bytes written");
});
monitor.write('Hello!');
monitor.end();
//# sourceMappingURL=passThrough-stream.js.map