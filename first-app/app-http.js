const http = require('http');
const Logger = require('./logger');

const logger = new Logger();

const server = http.createServer();

server.on('connection', (socket) => {
    logger.log('New connection...');
});

server.listen(3000);

logger.log('Listening on port 3000...');