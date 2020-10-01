var db = require('../../db');
var Player = {};

for (const name in db) {
  Player[name] = db[name].model('Player', {
    game: {
      type: String,
      ref: 'TenThings',
      required: true
    },
    id: {
      type: String,
      required: true
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: false
    },
    username: {
      type: String,
      required: false
    },
    score: {
      type: Number,
      required: false,
      default: 0
    },
    highScore: {
      type: Number,
      required: false,
      default: 0
    },
    scoreDaily: {
      type: Number,
      required: false,
      default: 0
    },
    plays: {
      type: Number,
      required: false,
      default: 0
    },
    wins: {
      type: Number,
      required: false,
      default: 0
    },
    answers: {
      type: Number,
      required: false,
      default: 0
    },
    lists: {
      type: Number,
      required: false,
      default: 0
    },
    hints: {
      type: Number,
      required: false,
      default: 0
    },
    snubs: {
      type: Number,
      required: false,
      default: 0
    },
    skips: {
      type: Number,
      required: false,
      default: 0
    },
    vetoes: {
      type: Number,
      required: false,
      default: 0
    },
    suggestions: {
      type: Number,
      required: false,
      default: 0
    },
    streak: {
      type: Number,
      required: false,
      default: 0
    },
    playStreak: {
      type: Number,
      required: true,
      default: 0
    },
    maxPlayStreak: {
      type: Number,
      required: true,
      default: 0
    },
    hintStreak: {
      type: Number,
      required: true,
      default: 0
    },
    maxHintStreak: {
      type: Number,
      required: true,
      default: 0
    },
    lastPlayDate: {
      type: Date,
      required: false,
      default: new Date(2019, 5, 15).valueOf()
    }, //Date when lastPlayDate was implemented
    present: {
      type: Boolean,
      required: true,
      default: true
    },
    minigamePlays: {
      type: Number,
      required: false,
      default: 0
    },
  });
}
module.exports = (database = 'master') => Player[database];