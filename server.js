var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var admin = require('firebase-admin');
var websocket = require('./websockets');

var serviceAccount = require('./keys/resume-172205-firebase-adminsdk-r34t7-0028c702be.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://resume-172205.firebaseio.com'
});

var app = express();
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(require('./auth'));
app.use('/api/users', require('./controllers/api/users'));
app.use('/api/posts', require('./controllers/api/posts'));
app.use('/api/categories', require('./controllers/api/categories'));
app.use('/api/email', require('./controllers/api/email'));
app.use('/api/asteroids', require('./controllers/api/asteroids'));
app.use(require('./controllers/static'));

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  console.log('Server ', process.pid ,' listening on', port);
});

/*
var server = app.listen(8080, function () {
  console.log('Server Listening at http://162.243.132.240 on', 8080);
})
*/
websocket.connect(server);
