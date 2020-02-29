/*jslint esversion: 10*/
const router = require('express').Router();
const _ = require('underscore');

let games = {};

router.post('/start', function ({ body }, res, next) {
  games[body.game.id] = body;
  console.log(games[body.game.id]);
  res.json({
    color: '#5ECBC2',
    headType: 'bendr',
    tailType: 'small-rattle'
  });
});
router.post('/move', function ({ body }, res, next) {
  const me = body.you.body[0];
  console.log(body);
  let board = [];
  for (var i = 0; i < body.board.width; i++) {
    board.push([]);
    for (var j = 0; j < body.board.height; j++) {
      board[i].push('empty');
    }
  }
  body.board.food.forEach(position => {
    board[position.x][position.y] = 'food';
  });
  body.board.snakes.forEach(snake => {
    snake.body.forEach(position => {
      board[position.x][position.y] = snake.id;
    });
  });
  console.log(board);
  let directions;
  if (me.x < body.board.width - 1 && ['food', 'empty'].indexOf(board[me.x + 1][me.y]) >= 0) {
    if (checkSpot(body, { x: me.x + 1, y: me.y - 1 }) && checkSpot(body, { x: me.x + 1, y: me.y + 1 }))
      directions.push('right');
  }
  if (me.x > 0 && ['food', 'empty'].indexOf(board[me.x - 1][me.y]) >= 0) {
    if (checkSpot(body, { x: me.x - 1, y: me.y - 1 }) && checkSpot(body, { x: me.x - 1, y: me.y + 1 }))
      directions.push('left');
  }
  if (me.y < body.board.width - 1 && ['food', 'empty'].indexOf(board[me.x][me.y + 1]) >= 0) {
    if (checkSpot(body, { x: me.x - 1, y: me.y + 1 }) && checkSpot(body, { x: me.x + 1, y: me.y + 1 }))
      directions.push('down');
  }
  if (me.y > 0 && ['food', 'empty'].indexOf(board[me.x][me.y - 1]) >= 0) {
    if (checkSpot(body, { x: me.x - 1, y: me.y - 1 }) && checkSpot(body, { x: me.x + 2, y: me.y - 1 }))
      directions.push('up');
  }
  console.log(directions);
  res.json({
    move: directions[Math.floor(Math.random() * directions.length)],
    shout: 'Moving!'
  });
});
router.post('/end', function (req, res, next) {
  res.status(200).end();
});
router.post('/ping', function (req, res, next) {
  res.status(200).end();
});

const distance = (spot1, spot2) => {
  return Math.abs(spot1.x - spot2.x) + Math.abs(spot1.y - spot2.y)
};

const checkSpot = (body, position) => {
  const snake = _.find(body.board.snakes, snake => {
    _.some(snake.body, snakePosition => {
      return snakePosition.x === position.x && snakePosition.y === position.y;
    });
  });
  return !snake || snake.body.length < body.you.body.length

};

module.exports = router;
