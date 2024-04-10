var _ = require('lodash');
var ws = require('ws');
var clients = [];

exports.connect = function (server) {
  var wss = new ws.Server({server: server});
  wss.on('connection', function (ws) {
    ws.id = Math.floor(Math.random() * 10000000);
    clients.push(ws);
    exports.broadcast('new client joined');
    ws.on('data', function(data) {
      ws.write('from server: ' + data);
    });
    ws.on('close', function () {
      _.remove(clients, ws);
    });
  });
};

exports.broadcast = function (topic, data) {
  var json = JSON.stringify({topic: topic, data: data});
  clients.forEach(function (client) {
    client.send(json);
  });
};

exports.ids = function () {
  return clients.map(function(client) { return client.id; });
};
