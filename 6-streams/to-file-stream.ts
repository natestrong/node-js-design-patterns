import {Writable} from 'stream';
import {promises as fs} from 'fs';
import {dirname, join} from 'path';
import {mkdir} from "fs/promises";

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
const tfs = new Writable({
    objectMode: true,
    write(chunk, encoding, cb) {
        mkdir(dirname(chunk.path))
            .catch(err => {
                if (err.code !== 'EEXIST') throw err;
            })
            .then(() => fs.writeFile(chunk.path, chunk.content))
            .then(() => cb())
            .catch(cb);
    }
});

tfs.write({
    path: join('files', 'file1.txt'), content: 'Hello'
});
tfs.write({
    path: join('files', 'file2.txt'), content: 'Node.js'
});
tfs.write({
    path: join('files', 'file3.txt'), content: 'streams'
});
tfs.end(() => console.log('All files created'));


