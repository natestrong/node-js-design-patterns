"use strict";
exports.__esModule = true;
var stream_1 = require("stream");
var mountains = [
    { name: 'Everest', height: 8848 },
    { name: 'K2', height: 8611 },
    { name: 'Kangchenjunga', height: 8586 },
    { name: 'Lhotse', height: 8516 },
    { name: 'Makalu', height: 8481 }
];
var mountainsStream = stream_1.Readable.from(mountains);
mountainsStream.on('data', function (mountain) {
    console.log(mountain.name.padStart(14) + "\t" + mountain.height + "m");
});
//# sourceMappingURL=from-iterable.js.map