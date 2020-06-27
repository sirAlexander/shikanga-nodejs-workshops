const log = require('./logger');
const path = require('path');

var pathObj = path.parse(__filename);

function sayHello(name) {
    log('Hello ' + name);
}

sayHello('Mosh');

log(module);

log(pathObj);