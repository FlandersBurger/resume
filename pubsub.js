var redis = require('redis');
var config = require('./config');
var url = process.env.REDISTOGO_URL || 'redis://localhost:' + config.redis.port;
var host = require('url').parse(url);

function newClient() {
  var client = redis.createClient(host.port, host.hostname);
  client.auth(config.redis.password);
  return client;
}

var client = newClient();

exports.publish = function (topic, data) {
  client.publish(topic, JSON.stringify(data));
};

exports.subscribe = function(topic, cb) {
  var client = newClient();
  client.auth(config.redis.password);
  client.subscribe(topic);
  client.on('message', function (channel, message) {
    cb(JSON.parse(message));
  });
};
