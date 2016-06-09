# node-microframework-cors
Plugin to activate cors support

## Installing

To install and add the dependency to the package.json, run the following command:

```
npm install bap-node-microframework-cors --save
```

## Configuration

To activate cors support with the default options (enable All CORS Requests), write the following code in app/app.ts:

```javascript
// app/app.ts
...

import { CorsPlugin } from 'bap-node-microframework-cors';

...

import { Kernel } from "./kernel";
var kernel = new Kernel();
var App = new Application(<ApplicationOptions>{
    ...
}, <KernelInterface>kernel);

...

App.registerPlugin(CorsPlugin, {});

...

App.start();

...
```

You can read the full list of configuration options (here)[https://github.com/expressjs/cors#configuration-options] (at the moment, only origin and credentials are supported).
