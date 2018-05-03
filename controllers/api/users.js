var router = require('express').Router();
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');
var admin = require('firebase-admin');
var config = require('../../config');
var User = require('../../models/user');

router.get('/', function (req, res, next) {
  if (!req.headers['x-auth']) {
    return res.send(401);
  }
  var auth = jwt.decode(req.headers['x-auth'], config.secret);
  User.findOne({_id: auth.userid}, function (err, user) {
    if (err) { return next(err); }
    res.json(user);
  });
});

router.post('/', function (req, res, next) {
  var user = new User({username: req.body.username, usernameLC: req.body.username.toLowerCase()});
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      user.password = hash;
      user.gender = 1;
      user.flags = [];
      user.save(function (err, user) {
        if (err) {
          throw next(err);
        }
        res.sendStatus(201);
      });
    });
  });
});

router.post('/authenticate', function (req, res, next) {
  var user = req.body.user;
  admin.auth().verifyIdToken(user.idToken)
  .then(function(decodedToken) {
    var uid = decodedToken.uid;
    User.findOne({uid: uid})
    .exec(function (err, foundUser) {
      if (err) {
        return next(err);
      }
      if (!foundUser) {
        var newUser = new User({
          username: user.displayName,
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoUrl,
          emailVerified: user.emailVerified,
          uid: uid,
        });
        newUser.save(function (err, user) {
          if (err) {
            throw next(err);
          }
          console.log(user.username + ' created');
          var token = jwt.encode({userid: user.id}, config.secret);
          res.json(token);
        });
      } else {
        console.log(foundUser.username + ' authenticated');
        var token = jwt.encode({userid: foundUser.id}, config.secret);
        res.json(token);
      }
    });
  }).catch(function(error) {
    // Handle error
  });
});


router.get('/:id/login', function (req, res, next) {
  User.findOne({_id: req.params.id})
  .exec(function (err, foundUser) {
    if (err) {
      return next(err);
    }
    if (!foundUser) {
      res.sendStatus(404);
    } else {
      console.log(foundUser.username + ' logged in');
      var token = jwt.encode({userid: foundUser.id}, config.secret);
      res.json(token);
    }
  });
});

router.post('/:id/verification', function (req, res, next) {
  if (checkUser(req.params.id, req)) {
    User.findOne({_id: req.auth.userid})
    .select('password')
    .exec(function (err, user) {
      bcrypt.compare(req.body.password, user.password, function (err, valid) {
        if (err) { return next(err); }
        if (!valid) { return res.sendStatus(401); }
        res.sendStatus(200);
      });
    });
  } else {
    return res.sendStatus(401);
  }
});

router.post('/:id', function (req, res, next) {
  if (checkUser(req.params.id, req)) {
    User.update({_id: req.auth.userid}, req.body.user)
    .exec(function (err, user) {
      if (err) { return next(err); }
      res.sendStatus(200);
    });
  } else {
    return res.sendStatus(401);
  }
});


router.post('/:id/password', function (req, res, next) {
  if (checkUser(req.params.id, req)) {
    User.findOne({_id: req.auth.userid})
    .select('username')
    .select('password')
    .exec(function (err, user) {
      bcrypt.compare(req.body.oldPassword, user.password, function (err, valid) {
        if (err) { return next(err); }
        if (!valid) { return res.sendStatus(401); }
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(req.body.newPassword, salt, function (err, hash) {
            user.password = hash;
            user.save(function (err, user) {
              if (err) {
                throw next(err);
              }
              console.log(user.username + ' changed their password');
              res.sendStatus(200);
            });
          });
        });
      });
    });
  } else {
    return res.sendStatus(401);
  }
});

router.post('/:id/username', function (req, res, next) {
  if (checkUser(req.params.id, req)) {
    User.findOne({_id: req.auth.userid})
    .select('username')
    .select('usernameLC')
    .exec(function (err, user) {
      User.findOne({username_lower: req.body.newUsername.toLowerCase()}, function (err, user2) {
        if (err) { return next(err); }
        if (user2) {
          if (user2.id !== auth.userid) {
            console.log(req.body.newUsername + ' already taken');
            return res.sendStatus(304);
          }
        }
        console.log(user.username + ' changed their name to ' + req.body.newUsername);
        user.username = req.body.newUsername;
        user.usernameLC = req.body.newUsername.toLowerCase();
        user.save(function (err, user) {
          if (err) {
            throw next(err);
          }
          res.sendStatus(200);
        });
      });
    });
  } else {
    return res.sendStatus(401);
  }
});

function checkUser(user, req) {
    if (!req.auth.userid) {
      return false;
    }
    return user === req.auth.userid;
}

module.exports = router;
