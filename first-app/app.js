const log = require('./logger');

function sayHello(name) {
    log('Hello ' + name);
}

sayHello('Mosh');

log(module);