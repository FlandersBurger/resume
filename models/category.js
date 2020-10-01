var db = require('../db');
var Category = {};

for (const name in db) {
  Category[name] = db[name].model('Category', {
    name: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    creator: {
      type: String,
      ref: 'User',
      required: true
    },
    tasks: [{
      name: {
        type: String,
        required: false
      }
    }]
  });
}

module.exports = (database = 'master') => Category[database];