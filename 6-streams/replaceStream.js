"use strict";
exports.__esModule = true;
var stream_1 = require("stream");
// export class ReplaceStream extends Transform {
//     private readonly searchStr: any;
//     private readonly replaceStr: any;
//     private tail: string;
//
//     constructor(searchStr, replaceStr, options = {}) {
//         super({...options});
//         this.searchStr = searchStr;
//         this.replaceStr = replaceStr;
//         this.tail = '';
//     }
//
//     _transform(chunk, encoding, callback) {
//         const pieces = (this.tail + chunk).split(this.searchStr);  // (1)
//         const lastPiece = pieces[pieces.length - 1];               // (2)
//         const tailLen = this.searchStr.length - 1;
//         this.tail = lastPiece.slice(-tailLen);
//         pieces[pieces.length - 1] = lastPiece.slice(0, -tailLen);
//         this.push(pieces.join(this.replaceStr));                   // (3)
//         callback();
//     }
//
//     _flush(callback) {
//         this.push(this.tail);
//         callback();
//     }
// }
//
// const replaceStream = new ReplaceStream('World', 'Node.js');
// Same API with simplified construction
var searchStr = 'World';
var replaceStr = 'Node.js';
var tail = '';
var replaceStream = new stream_1.Transform({
    defaultEncoding: 'utf8',
    transform: function (chunk, encoding, callback) {
        var pieces = (tail + chunk).split(searchStr);
        var lastPiece = pieces[pieces.length - 1];
        var tailLen = searchStr.length - 1;
        tail = lastPiece.slice(-tailLen);
        pieces[pieces.length - 1] = lastPiece.slice(0, -tailLen);
        this.push(pieces.join(replaceStr));
        callback();
    },
    flush: function (callback) {
        this.push(tail);
        callback();
    }
});
replaceStream.on('data', function (chunk) { return console.log(chunk.toString()); });
replaceStream.write('Hello W');
replaceStream.write('orld!');
replaceStream.end();
//# sourceMappingURL=replaceStream.js.map