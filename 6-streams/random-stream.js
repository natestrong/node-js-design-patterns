"use strict";
exports.__esModule = true;
var stream_1 = require("stream");
var Chance = require("chance");
var chance = new Chance();
// export class RandomStream extends Readable {
//     emittedBytes: number;
//
//     constructor(options = {}) {
//         super(options);
//         this.emittedBytes = 0;
//     }
//
//     _read(size) {
//         const chunk = chance.string({length: size});
//         this.push(chunk, 'utf8');
//         this.emittedBytes += chunk.length;
//         if (chance.bool({likelihood: 5})) {
//             this.push(null);
//         }
//     }
// }
//
// const randomStream = new RandomStream();
var emittedBytes = 0;
var randomStream = new stream_1.Readable({
    read: function (size) {
        var chunk = chance.string({ length: size });
        this.push(chunk, 'utf8');
        emittedBytes += chunk.length;
        if (chance.bool({ likelihood: 5 })) {
            this.push(null);
        }
    }
});
randomStream
    .on('data', function (chunk) {
    console.log("Chunk received (" + chunk.length + " bytes): " + chunk.toString());
})
    .on('end', function () {
    console.log("Produced " + emittedBytes + " bytes of random data");
});
//# sourceMappingURL=random-stream.js.map