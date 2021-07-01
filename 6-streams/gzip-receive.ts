import {createServer} from 'http';
import {createWriteStream, mkdirSync} from 'fs';
import {createGunzip} from 'zlib';
import {basename, join} from 'path';

const server = createServer((req, res) => {
    const filename = basename(<string>req.headers['x-filename']);
    const destFilename = join('received_files', filename);
    mkdirSync('received_files');
    console.log(`File request received: ${filename}`);

    req
        .pipe(createGunzip())
        .pipe(createWriteStream(destFilename))
        .on('finish', () => {
            res.writeHead(201, {'Content-Type': 'text/plain'});
            res.end('OK\n');
            console.log(`File saved: ${destFilename}`);
        })
        .on('error', function (err) {
            console.log(err);
        });
});
server.listen(3000, () => console.log('Listening on http://localhost:3000'));


