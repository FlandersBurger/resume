var db = require('../../db');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TenThings = db.model('TenThings', {
  id: { type: String, required: true },
  players: [
    {
      id: { type: String, required: true },
      first_name: { type: String, required: true },
      last_name: { type: String, required: false },
      username: { type: String, required: false },
      score: { type: Number, required: false, default: 0 },
    }
  ],
  lists: [
    { list: { type: Schema.Types.ObjectId, ref: 'List', required: true } }
  ],
  date: { type: Date, required: true, default: Date.now }
});

module.exports = TenThings;
