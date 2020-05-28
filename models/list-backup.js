var db = require('../db-backup');
var mongoose = require('mongoose');


/*
listSchema.virtual('answers').get(() => this.values.length);
listSchema.virtual('blurbs').get(() => this.values.filter(item => item.blurb).length);
*/
var ListBackup = db.model('list', {
  name: String,
  description: String,
  category: String,
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
    value: String,
    blurb: String,
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
});

module.exports = ListBackup;