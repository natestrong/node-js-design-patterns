"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
exports.CheckUrls = void 0;
var superagent_1 = require("superagent");
var CheckUrls = /** @class */ (function () {
    function CheckUrls(urls) {
        this.urls = urls;
    }
    CheckUrls.prototype[Symbol.asyncIterator] = function () {
        return __asyncGenerator(this, arguments, function _a() {
            var _b, _c, url, checkResult, err_1, e_1_1;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 11, 12, 13]);
                        _b = __values(this.urls), _c = _b.next();
                        _e.label = 1;
                    case 1:
                        if (!!_c.done) return [3 /*break*/, 10];
                        url = _c.value;
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 6, , 9]);
                        return [4 /*yield*/, __await(superagent_1["default"]
                                .head(url)
                                .redirects(2))];
                    case 3:
                        checkResult = _e.sent();
                        return [4 /*yield*/, __await(url + " is up, status: " + checkResult.status)];
                    case 4: return [4 /*yield*/, _e.sent()];
                    case 5:
                        _e.sent();
                        return [3 /*break*/, 9];
                    case 6:
                        err_1 = _e.sent();
                        return [4 /*yield*/, __await(url + " is down, error: " + err_1.message)];
                    case 7: return [4 /*yield*/, _e.sent()];
                    case 8:
                        _e.sent();
                        return [3 /*break*/, 9];
                    case 9:
                        _c = _b.next();
                        return [3 /*break*/, 1];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (_c && !_c.done && (_d = _b["return"])) _d.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    return CheckUrls;
}());
exports.CheckUrls = CheckUrls;
function main() {
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var checkUrls, checkUrls_1, checkUrls_1_1, status_1, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    checkUrls = new CheckUrls([
                        'https://nodejsdesignpatterns.com',
                        'https://example.com',
                        'https://mustbedownforsurehopefully.com'
                    ]);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 12]);
                    checkUrls_1 = __asyncValues(checkUrls);
                    _b.label = 2;
                case 2: return [4 /*yield*/, checkUrls_1.next()];
                case 3:
                    if (!(checkUrls_1_1 = _b.sent(), !checkUrls_1_1.done)) return [3 /*break*/, 5];
                    status_1 = checkUrls_1_1.value;
                    console.log(status_1);
                    _b.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _b.trys.push([7, , 10, 11]);
                    if (!(checkUrls_1_1 && !checkUrls_1_1.done && (_a = checkUrls_1["return"]))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(checkUrls_1)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12: return [2 /*return*/];
            }
        });
    });
}
main();
//# sourceMappingURL=checkUrls.js.map