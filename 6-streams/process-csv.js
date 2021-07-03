"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SumProfit = exports.FilterByCountry = void 0;
var fs_1 = require("fs");
var csv_parse_1 = require("csv-parse");
var stream_1 = require("stream");
var FilterByCountry = /** @class */ (function (_super) {
    __extends(FilterByCountry, _super);
    function FilterByCountry(country, options) {
        if (options === void 0) { options = { objectMode: true }; }
        var _this = _super.call(this, options) || this;
        _this.country = country;
        return _this;
    }
    FilterByCountry.prototype._transform = function (record, enc, cb) {
        if (record.country === this.country) {
            this.push(record);
        }
        cb();
    };
    return FilterByCountry;
}(stream_1.Transform));
exports.FilterByCountry = FilterByCountry;
var SumProfit = /** @class */ (function (_super) {
    __extends(SumProfit, _super);
    function SumProfit(options) {
        if (options === void 0) { options = { objectMode: true }; }
        var _this = _super.call(this, options) || this;
        _this.total = 0;
        return _this;
    }
    SumProfit.prototype._transform = function (record, enc, cb) {
        this.total += Number.parseFloat(record.profit);
        cb();
    };
    SumProfit.prototype._flush = function (cb) {
        this.push(this.total.toString());
        cb();
    };
    return SumProfit;
}(stream_1.Transform));
exports.SumProfit = SumProfit;
var csvParser = csv_parse_1["default"]({ columns: true });
fs_1.createReadStream('data.csv') // (1)
    .pipe(csvParser) // (2)
    .pipe(new FilterByCountry('Italy')) // (3)
    .pipe(new SumProfit()) // (4)
    .pipe(process.stdout); // (5)
//# sourceMappingURL=process-csv.js.map