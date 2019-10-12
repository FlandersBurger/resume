/*jslint esversion: 6*/
const mongoose = require('mongoose');
const config = require('./config');
const url = process.env.MONGOLAB_URI || config.mongo;

mongoose.connect(url, (err) => {
//mongoose.connect('mongodb://localhost/social', function() {
  if (err) return console.error(err);
  console.log('MongoDB connected');
});

module.exports = mongoose;
