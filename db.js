var mongoose = require('mongoose');
var config = require('./config');
var url = process.env.MONGOLAB_URI || config.mongo;

mongoose.connect(url, function(err) {
//mongoose.connect('mongodb://localhost/social', function() {
  if (err) { console.log(err.message); }
  console.log('mongodb connected');
});

module.exports = mongoose;
