"use strict";
var cors = require('cors');
var core_1 = require('bap-node-microframework/core');
var CorsPlugin = (function () {
    function CorsPlugin(options) {
        var corsOptions = {
            credentials: options.credentials || true,
            origin: options.origin || function (origin, callback) {
                callback(null, true);
            }
        };
        core_1.Container.get('app').use(cors(corsOptions));
    }
    return CorsPlugin;
}());
exports.CorsPlugin = CorsPlugin;
//# sourceMappingURL=CorsPlugin.js.map