const log = require('./logger');
const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', (eventArg) => {
    log('Listener called', eventArg);
})

// This Raises an event
emitter.emit('messageLogged', { id:1, url: 'http://' });

// Emit simply means, making a noise or producing something - signalling that an event has happened.