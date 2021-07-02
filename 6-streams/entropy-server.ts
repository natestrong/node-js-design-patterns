import * as Chance from "chance";
import {createServer} from "http";

const chance = new Chance();

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

const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    function generateMore() {                                      // (1)
        while (chance.bool({likelihood: 95})) {
            const randomChunk = chance.string({                   // (2)
                length: (16 * 1024) - 1
            });
            const shouldContinue = res.write(`${randomChunk}\n`);  // (3)
            if (!shouldContinue) {
                console.log('back-pressure');
                return res.once('drain', generateMore);
            }
        }
        res.end('\n\n');
    }
    generateMore();
    res.on('finish', () => console.log('All data sent'));
});

server.listen(8080, () => {
    console.log('listening on http://localhost:8080');
});
