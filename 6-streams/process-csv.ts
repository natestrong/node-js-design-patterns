import {createReadStream} from 'fs';
import {Transform} from "stream";
import parse = require("csv-parse");


export class FilterByCountry extends Transform {
    private readonly country: string;

    constructor(country, options = {objectMode: true}) {
        super(options);
        this.country = country;
    }

    _transform(record, enc, cb) {
        if (record.country === this.country) {
            this.push(record);
        }
        cb();
    }
}

export class SumProfit extends Transform {
    private total: number;

    constructor(options = {objectMode: true}) {
        super(options);
        this.total = 0;
    }

    _transform(record, enc, cb) {
        this.total += Number.parseFloat(record.profit);
        cb();
    }

    _flush(cb) {
        this.push(this.total.toString());
        cb();
    }
}

const csvParser = parse({columns: true});
createReadStream('data.csv')                 // (1)
    .pipe(csvParser)                         // (2)
    .pipe(new FilterByCountry('Italy'))      // (3)
    .pipe(new SumProfit())                   // (4)
    .pipe(process.stdout);                   // (5)

