const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const admin = require('firebase-admin');
const websocket = require('./websockets');
const prototypes = require('./prototypes');

const serviceAccount = require('./keys/resume-172205-firebase-adminsdk-r34t7-0028c702be.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://resume-172205.firebaseio.com'
});

const app = express();

app.use(require('./auth'));
app.use('/api/users', require('./controllers/api/users'));
app.use('/api/posts', require('./controllers/api/posts'));
app.use('/api/categories', require('./controllers/api/categories'));
app.use('/api/email', require('./controllers/api/email'));
app.use('/api/games', require('./controllers/api/games'));
app.use('/api/bots', require('./controllers/api/bots'));
app.use('/api/files', require('./controllers/api/files'));

app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/bots/tenthings', require('./controllers/bots/tenthings/main'));

app.use(require('./controllers/static'));

const port = process.env.PORT || 3000;

const server = app.listen(port, function () {
  console.log('Server ', process.pid ,' listening on', port);
});

/*
var server = app.listen(8080, function () {
  console.log('Server Listening at http://162.243.132.240 on', 8080);
})
*/
websocket.connect(server);
