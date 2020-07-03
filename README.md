# logol

Simple wrapper of console.log to had some color in the terminal.

## Node

```sh
yarn add logol
or
npm install logol
```

```js
const logol = require('logol');

logol.info('test info', { a: 123 });
logol.log('test log', { a: 123 });
logol.success('test success', { a: 123 });
logol.debug('test debug', { a: 123 });
logol.warn('test warn', { a: 123 });
logol.error('test error', { a: 123 });

// or

import { info, log, success, debug, warn, error } from 'logol';

info('test info', { a: 123 });
log('test log', { a: 123 });
success('test success', { a: 123 });
debug('test debug', { a: 123 });
warn('test warn', { a: 123 });
error('test error', { a: 123 });
```

Will output:

![screenshot](https://github.com/apiel/logol/blob/master/media/logol.png?raw=true)

## Deno

```ts
import {
    info,
    log,
    success,
    debug,
    warn,
    error,
} from 'https://raw.githubusercontent.com/apiel/logol/master/mod.ts';

info('test info', { a: 123 });
log('test log', { a: 123 });
success('test success', { a: 123 });
debug('test debug', { a: 123 });
warn('test warn', { a: 123 });
error('test error', { a: 123 });
```

## Experimental features

> This are experimental features.

### Filter log

#### Filter by stack trace

In some case you might want to filter some specific logs. To do this, use environment variable `LOGOL_FILTER` by passing a regex. This regex will be applied on the stacktrace of the function calling the log. E.g: this is the stacktrace `at run (/home/user/test.js:4:7)`, to display only this log we could do `LOGOL_FILTER=test.js`.

To show the stacktrace of the log, use the enironment variable `LOGOL_SHOW_STACK=true`.

#### Filter by level

To only show some specific log level, use environment variable `LOGOL_LEVELS` where we can define wich log level to display, e.g.: `LOGOL_LEVELS=error,warn` (each level is seprated by a "," without spacing)

### Overwrite logol

In some case, we might need to overwrite the logger, for example to do unit test.

```ts
logol.logol.log = (...params) => console.log('overwrite', ...params);
logol.log('test log', { a: 123 });
```
