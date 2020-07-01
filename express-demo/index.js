const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const logger = require('./middleware/logger');
const home = require('./routes/home');
const courses = require('./routes/courses');
const posts = require('./routes/posts');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); // note: this is optional and 'views is also the default location

debug(`app: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(helmet());

app.use('/', home);
app.use('/api/courses', courses);
app.use('/api/posts', posts);

// Configuration
debug(`Application Name: ${config.get('name')}`);
debug(`Mail Server: ${config.get('mail.host')}`);
debug(`Mail Password: ${config.get('mail.password')}`);

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    debug('Morgan enabled...');
}

app.use(logger);

app.use(function(req, res, next) {
    console.log('Authenticating...');
    next();
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));