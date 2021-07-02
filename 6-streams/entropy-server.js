"use strict";
exports.__esModule = true;
var Chance = require("chance");
var http_1 = require("http");
var chance = new Chance();
// does not account for backpressure
// const server = createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     while (chance.bool({likelihood: 95})) {
//         res.write(`${chance.string()}\n`);
//     }
//     res.end('\n\n');
//     res.on('finish', () => console.log('All data sent'));
// });
// server.listen(8080, () => {
//     console.log('listening on http://localhost:8080');
// });
var server = http_1.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    function generateMore() {
        while (chance.bool({ likelihood: 95 })) {
            var randomChunk = chance.string({
                length: (16 * 1024) - 1
            });
            var shouldContinue = res.write(randomChunk + "\n"); // (3)
            if (!shouldContinue) {
                console.log('back-pressure');
                return res.once('drain', generateMore);
            }
        }
        res.end('\n\n');
    }
    generateMore();
    res.on('finish', function () { return console.log('All data sent'); });
});
server.listen(8080, function () {
    console.log('listening on http://localhost:8080');
});
//# sourceMappingURL=entropy-server.js.map