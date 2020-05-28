/*jslint esversion: 6*/
const mongoose = require('mongoose');
const config = require('./config');
const url = config.mongoBackup;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, (err) => {
  //mongoose.connect('mongodb://localhost/social', function() {
  if (err) return console.error(err);
  console.log('MongoDB Backup connected');
});

module.exports = mongoose;