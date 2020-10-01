const mongoose = require('mongoose');
const config = require('./config');
const connections = {};

config.mongoDBs.forEach(db => {
  connections[db.name] = mongoose.createConnection(db.url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }, (err) => {
    if (err) return console.error(err);
    console.log(`MongoDB connected (${db.name})`);
  });
});

module.exports = connections;