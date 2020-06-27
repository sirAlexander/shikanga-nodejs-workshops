
const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {

    log(message, args = "") {
        // Send an HTTP request
        console.log(message, args);

        // This Raises an event
        this.emit('messageLogged', { id:1, url: 'http://' });
    }
}

module.exports = Logger;