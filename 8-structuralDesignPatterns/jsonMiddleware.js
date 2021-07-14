"use strict";
exports.__esModule = true;
exports.jsonMiddleware = void 0;
var jsonMiddleware = function () {
    return {
        inbound: function (message) {
            return JSON.parse(message.toString());
        },
        outbound: function (message) {
            return Buffer.from(JSON.stringify(message));
        }
    };
};
exports.jsonMiddleware = jsonMiddleware;
//# sourceMappingURL=jsonMiddleware.js.map