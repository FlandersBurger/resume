var router = require('express').Router()
var User = require('../../models/user')
var bcrypt = require('bcryptjs')
var jwt = require('jwt-simple')
var config = require('../../config')

router.get('/', function (req, res, next) {
  if (!req.headers['x-auth']) {
    return res.send(401)
  }
  var auth = jwt.decode(req.headers['x-auth'], config.secret)
  User.findOne({_id: auth.userid}, function (err, user) {
    if (err) { return next(err) }
    res.json(user)
  })
})

router.post('/', function (req, res, next) {
  var user = new User({username: req.body.username, usernameLC: req.body.username.toLowerCase()})
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      user.password = hash
      user.gender = 1
      user.flags = []
      user.save(function (err, user) {
        if (err) {
          throw next(err)
        }
        res.sendStatus(201)
      })
    })
  })
})

router.post('/:id/verification', function (req, res, next) {
  if (checkUser(req.params.id, req)) {
    User.findOne({_id: req.auth.userid})
    .select('password')
    .exec(function (err, user) {
      bcrypt.compare(req.body.password, user.password, function (err, valid) {
        if (err) { return next(err) }
        if (!valid) { return res.sendStatus(401) }
        res.sendStatus(200)
      })
    })
  } else {
    return res.sendStatus(401)
  }
})

router.post('/:id', function (req, res, next) {
  if (checkUser(req.params.id, req)) {
    User.findOne({_id: req.auth.userid})
    .select('username')
    .select('gender')
    .select('flags')
    .exec(function (err, user) {
      if (err) { return next(err) }
      user.gender = req.body.gender
      user.flags = req.body.flags
      user.save(function (err, user) {
        if (err) {
          throw next(err)
        }
        console.log(user.username + ' updated their profile')
        res.sendStatus(200)
      })
    })
  } else {
    return res.sendStatus(401)
  }
})


router.post('/:id/password', function (req, res, next) {
  if (checkUser(req.params.id, req)) {
    User.findOne({_id: req.auth.userid})
    .select('username')
    .select('password')
    .exec(function (err, user) {
      bcrypt.compare(req.body.oldPassword, user.password, function (err, valid) {
        if (err) { return next(err) }
        if (!valid) { return res.sendStatus(401) }
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(req.body.newPassword, salt, function (err, hash) {
            user.password = hash
            user.save(function (err, user) {
              if (err) {
                throw next(err)
              }
              console.log(user.username + ' changed their password')
              res.sendStatus(200)
            })
          })
        })
      })
    })
  } else {
    return res.sendStatus(401)
  }
})

router.post('/:id/username', function (req, res, next) {
  if (checkUser(req.params.id, req)) {
    User.findOne({_id: req.auth.userid})
    .select('username')
    .select('usernameLC')
    .exec(function (err, user) {
      User.findOne({username_lower: req.body.newUsername.toLowerCase()}, function (err, user2) {
        if (err) { return next(err) }
        if (user2) {
          if (user2.id !== auth.userid) {
            console.log(req.body.newUsername + ' already taken');
            return res.sendStatus(304)
          }
        }
        console.log(user.username + ' changed their name to ' + req.body.newUsername)
        user.username = req.body.newUsername
        user.usernameLC = req.body.newUsername.toLowerCase()
        user.save(function (err, user) {
          if (err) {
            throw next(err)
          }
          res.sendStatus(200)
        })
      })
    })
  } else {
    return res.sendStatus(401)
  }
})

function checkUser(user, req) {
    if (!req.auth.userid) {
      return false
    }
    return user === req.auth.userid;
}

module.exports = router
