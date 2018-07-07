var db = require('../db');

var List = db.model('List', {
  name: String,
  creator: { type: String, ref: 'User', required: false },
  values: [
    { value: String }
  ],
  date: { type: Date, required: true, default: Date.now }
});

module.exports = List;
