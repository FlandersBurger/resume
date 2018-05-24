var router = require('express').Router();
var pubsub = require('../../pubsub');
var websockets = require('../../websockets');

var players = [];

console.log(websockets.ids());

router.get('/', function (req, res, next) {
});

router.get('/new_player', function (req, res, next) {
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
