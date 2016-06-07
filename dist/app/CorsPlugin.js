"use strict";
var cors = require('cors');
var core_1 = require('bap-node-microframework/core');
var CorsPlugin = (function () {
    function CorsPlugin(container, options) {
        this.name = 'cors';
        this.instance = {
            credentials: options.credentials || true,
            origin: options.origin || function (origin, callback) {
                callback(null, true);
            }
        };
        core_1.Container.getApplicationInstance().get('app').use(cors(this.instance));
    }
    CorsPlugin.prototype.getInstance = function () {
        return this.instance;
    };
    CorsPlugin.prototype.getName = function () {
        return this.name;
    };
    return CorsPlugin;
}());
exports.CorsPlugin = CorsPlugin;
//# sourceMappingURL=CorsPlugin.js.map