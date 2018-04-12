var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var websocket = require('./websockets');

var app = express();
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(require('./auth'));
//app.use('/api/posts', require('./controllers/api/posts'));
app.use(require('./controllers/static'));

var port = process.env.PORT || 80;

var server = app.listen(port, function () {
  console.log('Server ', process.pid ,' listening on', port);
});

/*
var server = app.listen(8080, function () {
  console.log('Server Listening at http://162.243.132.240 on', 8080);
})
*/
websocket.connect(server);
