const http = require('http');
const Logger = require('./logger');

const logger = new Logger();

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }
});

server.listen(3000);

logger.log('Listening on port 3000...');