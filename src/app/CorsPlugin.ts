import * as cors from 'cors';
import { Container } from 'bap-node-microframework/core';

export class CorsPlugin {
    constructor(options) {
        var corsOptions = {
            credentials: options.credentials || true,
            origin: options.origin || function(origin, callback) {
                callback(null, true);
            }
        };
        Container.get('app').use(cors(corsOptions));
    }
}
