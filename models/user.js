var db = require('../db')

var User = db.model('User', {
  username: { type: String, required: true },
  usernameLC: { type: String, required: true },
  password: { type: String, required: true, select: false },
  gender: { type: Number, required: false },
  flags: { type: Array, required: false }
})

module.exports = User
