var db = require('../db');

var List = db.model('List', {
  name: String,
  creator: { type: String, ref: 'User', required: false },
  values: [
    {
      value: String,
      blurb: String
    }
  ],
  date: { type: Date, required: true, default: Date.now },
  skips: { type: Number, required: false, default: 0 },
  votes: [
      {
      id: { type: String, required: true },
      vote: { type: Boolean, required: true, default: true }
    }
  ]
});

module.exports = List;
