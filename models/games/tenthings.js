var db = require('../../db');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TenThings = db.model('TenThings', {
  chat_id: { type: String, required: true },
  hints: { type: Number, required: true, default: 0 },
  cycles: { type: Number, required: true, default: 0 },
  lastCycleDate: { type: Date, required: true, default: Date.now },
  guessers: [{ type: String, required: true }],
  streak: {
    player: { type: String, required: false },
    count: { type: Number, required: false },
  },
  players: [
    {
      id: { type: String, required: true },
      first_name: { type: String, required: true },
      last_name: { type: String, required: false },
      username: { type: String, required: false },
      score: { type: Number, required: false, default: 0 },
      highScore: { type: Number, required: false, default: 0 },
      scoreDaily: { type: Number, required: false, default: 0 },
      plays: { type: Number, required: false, default: 0 },
      wins: { type: Number, required: false, default: 0 },
      answers: { type: Number, required: false, default: 0 },
      lists: { type: Number, required: false, default: 0 },
      hints: { type: Number, required: false, default: 0 },
      snubs: { type: Number, required: false, default: 0 },
      skips: { type: Number, required: false, default: 0 },
      suggestions: { type: Number, required: false, default: 0 },
      streak: { type: Number, required: false, default: 0 },
      playStreak: { type: Number, required: true, default: 0 },
      maxPlayStreak: { type: Number, required: true, default: 0 },
      lastPlayDate: { type: Date, required: false, default: new Date(2019, 5, 15).valueOf() }, //Date when lastPlayDate was implemented
    }
  ],
  playedLists: [
    { type: String }
  ],
  list: {
    _id: String,
    name: String,
    description: String,
    category: String,
    totalValues: Number,
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
