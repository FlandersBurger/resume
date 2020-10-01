var db = require('../db');
var Joke = {};

for (const name in db) {
  Joke[name] = db[name].model('Joke', {
    title: {
      type: String,
      required: false
    },
    joke: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: false
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
  });
}


module.exports = (database = 'master') => Joke[database];