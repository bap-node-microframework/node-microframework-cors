export declare class CorsPlugin {
    private instance;
    private name;
    constructor(container: any, options?: {
        credentials: boolean;
        origin: boolean;
    });
    getInstance(): any;
    getName(): String;
}
