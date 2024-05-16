const mongoose = require('mongoose');
const tunnel = require('tunnel-ssh');
const config = require('./config');
const connections = {};

const connect = (db) => {
  connections[db.name] = mongoose.createConnection(
    db.url,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) return console.error(err);
      console.log(`MongoDB connected (${db.name})`);
    }
  );
};

config.mongoDBs.forEach(async (db) => {
  connect(db);
  if (db.tunnel) {
    await tunnel(db.tunnel);
  }
});

module.exports = connections;
