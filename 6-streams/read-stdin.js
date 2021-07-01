// non-flowing mode
// process.stdin
//     .setEncoding('utf-8')
//     .on('readable', () => {
//         let chunk;
//         console.log('New data available');
//         while ((chunk = process.stdin.read()) !== null) {
//             console.log(
//                 `Chunk read (${chunk.length} bytes): "${chunk}"`
//             );
//         }
//     })
//     .on('end', () => console.log('End of stream'));
// Flowing mode
process.stdin
    .on('data', function (chunk) {
    console.log('New data available');
    console.log("Chunk read (" + chunk.length + " bytes): \"" + chunk.toString() + "\"");
})
    .on('end', function () { return console.log('End of stream'); });
//# sourceMappingURL=read-stdin.js.map