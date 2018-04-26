var db = require('../db');

var User = db.model('User', {
  username: { type: String, required: true },
  password: { type: String, required: false, select: false },
  gender: { type: Number, required: false },
  flags: { type: Array, required: false },
  displayName:{ type: String, required: false },
  email: { type: String, required: false },
  photoURL: { type: String, required: false },
  emailVerified: { type: Boolean, required: false },
  uid: { type: String, required: false },
});

module.exports = User;
