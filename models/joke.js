var db = require('../db');

var Joke = db.model('Joke', {
  title: { type: String, required: false },
  joke: { type: String, required: false },
  category: { type: String, required: false },
  date: { type: Date, required: true, default: Date.now },
});

module.exports = Joke;
