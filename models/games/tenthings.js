var db = require('../../db');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TenThings = db.model('TenThings', {
  chat_id: { type: String, required: true },
  hints: { type: Number, required: true, default: 0 },
  players: [
    {
      id: { type: String, required: true },
      first_name: { type: String, required: true },
      last_name: { type: String, required: false },
      username: { type: String, required: false },
      score: { type: Number, required: false, default: 0 },
    }
  ],
  playedLists: [
    { type: String }
  ],
  list: {
    _id: String,
    name: String,
    creator: { type: String, ref: 'User', required: false },
    values: [
      {
        value: String,
        blurb: String,
        guesser: {
          id: { type: String, required: false },
          first_name: { type: String, required: false },
          last_name: { type: String, required: false },
          username: { type: String, required: false },
        }
      }
    ]
  },
  date: { type: Date, required: true, default: Date.now }
});

module.exports = TenThings;
