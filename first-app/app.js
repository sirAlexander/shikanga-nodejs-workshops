const log = require('./logger');
const path = require('path');
const os = require('os');

var pathObj = path.parse(__filename);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

function sayHello(name) {
    log('Hello ' + name);
}

sayHello('Mosh');

log(module);

log(pathObj);

log('Total Memory: ' + totalMemory);

// or use
// Template string
// ES6 / ES2015 : ECMAScript 6

log(`Total Memory: ${totalMemory}`);
log(`Free Memory: ${freeMemory}`);