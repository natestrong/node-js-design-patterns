import {Readable} from 'stream';
import * as Chance from "chance";

const chance = new Chance();

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

let emittedBytes = 0;

const randomStream = new Readable({
    read(size) {
        const chunk = chance.string({length: size});
        this.push(chunk, 'utf8');
        emittedBytes += chunk.length;
        if (chance.bool({likelihood: 5})) {
            this.push(null);
        }
    }
});


randomStream
    .on('data', (chunk) => {
        console.log(`Chunk received (${chunk.length} bytes): ${chunk.toString()}`);
    })
    .on('end', () => {
        console.log(`Produced ${emittedBytes} bytes of random data`);
    });
