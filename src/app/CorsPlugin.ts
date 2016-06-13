import * as cors from 'cors';
import { Container } from 'bap-node-microframework/core';

export class CorsPlugin {
    private instance: any;
    private name: String = 'cors';

    constructor(container, options) {
        this.instance = {
            credentials: options.credentials || true,
            origin: options.origin || function(origin, callback) {
                callback(null, true);
            }
        };
        Container.setApplicationInstance(container);
        Container.get('app').use(cors(this.instance));
    }

    getInstance() {
        return this.instance;
    }

    getName() {
        return this.name;
    }
}
