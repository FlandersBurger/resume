var db = require('../../db');

var TenThingsStats = db.model('TenThingsStats', {
  date: { type: String, required: true, default: new Date() },
  base: { type: Boolean, required: true, default: false },
  hints: { type: Number, required: true, default: 0 },
  cycles: { type: Number, required: true, default: 0 },
  games: { type: Number, required: true, default: 0 },
  totalPlayers: { type: Number, required: true, default: 0 },
  uniquePlayers: { type: Number, required: true, default: 0 },
  score: { type: Number, required: false, default: 0 },
  snubs: { type: Number, required: false, default: 0 },
  skips: { type: Number, required: false, default: 0 },
  suggestions: { type: Number, required: false, default: 0 },
  listsPlayed: { type: Number, required: false, default: 0 },
  votes: { type: Number, required: false, default: 0 },
});

module.exports = TenThingsStats;
