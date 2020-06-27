
const url = 'http://mylogger.io/log';

function log(message, args = "") {
    // Send an HTTP request
    console.log(message, args);
}

module.exports = log;