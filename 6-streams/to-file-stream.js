"use strict";
exports.__esModule = true;
var stream_1 = require("stream");
var fs_1 = require("fs");
var path_1 = require("path");
var promises_1 = require("fs/promises");
// extending Writeable
// export class ToFileStream extends Writable {
//     constructor(options = {}) {
//         super({...options, objectMode: true});
//     }
//
//     _write(chunk, encoding, cb) {
//         mkdir(dirname(chunk.path))
//             .catch(err => {
//                 if (err.code !== 'EEXIST') throw err;
//             })
//             .then(() => fs.writeFile(chunk.path, chunk.content))
//             .then(() => cb())
//             .catch(cb);
//     }
// }
//
// const tfs = new ToFileStream();
// Simplified with Constructor
var tfs = new stream_1.Writable({
    objectMode: true,
    write: function (chunk, encoding, cb) {
        promises_1.mkdir(path_1.dirname(chunk.path))["catch"](function (err) {
            if (err.code !== 'EEXIST')
                throw err;
        })
            .then(function () { return fs_1.promises.writeFile(chunk.path, chunk.content); })
            .then(function () { return cb(); })["catch"](cb);
    }
});
tfs.write({
    path: path_1.join('files', 'file1.txt'), content: 'Hello'
});
tfs.write({
    path: path_1.join('files', 'file2.txt'), content: 'Node.js'
});
tfs.write({
    path: path_1.join('files', 'file3.txt'), content: 'streams'
});
tfs.end(function () { return console.log('All files created'); });
//# sourceMappingURL=to-file-stream.js.map