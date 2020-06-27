const log = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

var pathObj = path.parse(__filename);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// const files = fs.readdirSync('./'); // Never use 'Sync / Blocking' methods
// log(files);

fs.readdir('./', function(err, files) {
    if (err) log('Error', err);
    else log('Result', files);
});

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