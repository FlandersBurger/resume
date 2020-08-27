var redis = require('redis');
var config = require('./config');
var url = process.env.REDISTOGO_URL || 'redis://localhost:' + config.redis.port;
var host = require('url').parse(url);

function newClient() {
  var client = process.env.NODE_ENV === 'development' ? redis.createClient(host.port, host.hostname) : redis.createClient({
    path: '/var/run/redis/redis.sock'
  });
  console.log(process.env.NODE_ENV === 'development');
  client.auth(config.redis.password);
  return client;
}

var keyStoreClient = newClient();

client.on("error", function(error) {
  console.error(error);
});
exports.publish = function(topic, data) {
  client.publish(topic, JSON.stringify(data));
};

exports.subscribe = function(topic, callback) {
  var client = newClient();
  client.auth(config.redis.password);
  client.subscribe(topic);
  client.on('message', function(channel, message) {
    callback(JSON.parse(message));
  });
};

exports.set = (key, value) => keyStoreClient.set(key, value);
exports.get = key => new Promise(function(resolve, reject) {
  try {
    keyStoreClient.get(key, (err, value) => {
      if (err) return reject(err);
      resolve(value);
    });
  } catch (e) {
    console.error(`Redis error\n${e}`);
    reject();
  }
});