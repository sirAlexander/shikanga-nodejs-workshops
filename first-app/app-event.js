const log = require('./logger');
const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function(){
    log('Listener called');
})

// This Raises an event
emitter.emit('messageLogged');

// Emit simply means, making a noise or producing something - signalling that an event has happened.