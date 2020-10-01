const db = require('../../db');
const mongoose = require('mongoose');
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
var List = {};

var listSchema = new mongoose.Schema({
  name: String,
  search: String,
  description: String,
  category: String,
  language: {
    type: String,
    required: true,
    default: 'EN'
  },
  categories: [String],
  creator: {
    type: String,
    ref: 'User',
    required: false
  },
  isDynamic: {
    type: Boolean,
    required: true,
    default: true
  },
  enabled: {
    type: Boolean,
    required: true,
    default: true
  },
  values: [{
    value: {
      type: String,
      default: '',
      required: true
    },
    blurb: {
      type: String,
      default: '',
      required: false
    },
    creator: {
      type: String,
      ref: 'User',
      required: false
    },
  }],
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  modifyDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  plays: {
    type: Number,
    required: true,
    default: 0
  },
  hints: {
    type: Number,
    required: true,
    default: 0
  },
  skips: {
    type: Number,
    required: true,
    default: 0
  },
  score: {
    type: Number,
    required: true,
    default: 0
  },
  voters: [{
    type: String
  }],
  votes: [{
    voter: {
      type: String,
      required: true
    },
    vote: {
      type: Number,
      required: true,
      default: 1
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    modifyDate: {
      type: Date,
      required: false
    },
  }]
}, {
  toObject: {
    virtuals: true,
    getters: true
  },
  toJSON: {
    virtuals: true,
    getters: true
  }
});


//listSchema.virtual('answers').get(() => this.values.length);
listSchema.virtual('blurbs').get(function() {
  return this.values ? this.values.filter(item => item.blurb).length : 0;
});

listSchema.plugin(mongooseLeanVirtuals);

/*
listSchema.virtual('search').get(function() {
  return this.name.removeAllButLetters();
});
*/

for (const name in db) {
  List[name] = db[name].model('List', listSchema);
}

module.exports = (database = 'master') => List[database];