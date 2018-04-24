var router = require('express').Router()
var User = require('../../models/user')
var bcrypt = require('bcryptjs')
var jwt = require('jwt-simple')
var config = require('../../config')

router.post('/', function (req, res, next) {
  User.findOne({usernameLC: req.body.username.toLowerCase()})
  .select('password')
  .select('username')
  .exec(function (err, user) {
    if (err) {
      return next(err)
    }
    if (!user) {
      console.log(req.body.username + " doesn't exist")
      return res.send(401)
    }
    bcrypt.compare(req.body.password, user.password, function (err, valid) {
      if (err) { return next(err) }
      if (!valid) { return res.send(401) }
      console.log(user.username + ' authenticated')
      var token = jwt.encode({userid: user.id}, config.secret)
      res.json(token)
    })
  })
})

module.exports = router
