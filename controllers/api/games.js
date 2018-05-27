var router = require('express').Router();
var pubsub = require('../../pubsub');
var websockets = require('../../websockets');

var User = require('../../models/user');

var players = [];

console.log(websockets.ids());

router.get('/', function (req, res, next) {
});

router.get('/new_player', function (req, res, next) {
});

router.post('/:game/:user/highscore', function (req, res, next) {
  User.findOne({_id: req.params.user})
  .exec(function (err, user) {
    user.highscore[req.params.game] = req.body.score;
    user.save(function (err, user) {
      if (err) {
        throw next(err);
      }
      res.sendStatus(200);
    });
  });
});

/*
setInterval(function(){
  var pack = [];
  for (var i in PLAYER_LIST){
    var player = PLAYER_LIST[i];
    player.updatePosition();
    pack.push({
        x: player.x,
        y: player.y,
        number: player.number
    });
  }
  websockets.broadcast('asteroids_data', data);
}, 1000/25);
*/
module.exports = router;
