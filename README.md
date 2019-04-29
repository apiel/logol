# logol

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

![screenshot](https://github.com/apiel/run-screen/blob/master/media/logol.png?raw=true)
