var db = require('../db')

var Post = db.model('Post', {
  poster: { type: String, ref: 'User', required: true },
  body: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now }
})

module.exports = Post
