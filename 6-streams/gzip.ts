import {createGzip, gzip} from 'zlib';
import {promisify} from 'util';
import * as fs from "fs/promises";
import {createReadStream, createWriteStream} from "fs";

const gzipPromise = promisify(gzip);
// const filename = process.argv[2];
const filename = 'lotOfText.txt';
const zippedFilename = filename + '.gz';

async function deleteZipped(zippedFilename) {
    try {
        await fs.rm(zippedFilename);
        console.log(`removed: ${filename}`);
    } catch (e) {
        console.log(`no ${zippedFilename} to delete`);
    }
}

async function gzipBuffered(filename) {
    const data = await fs.readFile(filename);
    const gzippedData = await gzipPromise(data);
    await fs.writeFile(`${filename}.gz`, gzippedData);
    console.log('File successfully compressed');
}

function gzipStream(filename) {
    createReadStream(filename)
        .pipe(createGzip())
        .pipe(createWriteStream(`${filename}.stream.gz`))
        .on('finish', () => console.log('File successfully compressed'));
}

async function main() {
    await deleteZipped(zippedFilename);
    console.time('buffer');
    await gzipBuffered(filename);
    console.timeEnd('buffer');   // => 180ms

    await deleteZipped(zippedFilename);

    console.time('stream');
    await gzipStream(filename);
    console.timeEnd('stream');  // => 0.7ms
}

main();
