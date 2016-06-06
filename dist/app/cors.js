"use strict";
var cors = require('cors');
var core_1 = require('bap-node-microframework/core');
var Cors = (function () {
    function Cors(options) {
        var corsOptions = {
            credentials: options.credentials || true,
            origin: options.origin || function (origin, callback) {
                callback(null, true);
            }
        };
        core_1.Container.get('app').use(cors(corsOptions));
    }
    return Cors;
}());
exports.Cors = Cors;
//# sourceMappingURL=cors.js.map