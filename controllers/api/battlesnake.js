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
  let validDirections = [];
  if (me.x < body.board.width - 1 && ['food', 'empty'].indexOf(board[me.x + 1][me.y]) >= 0) {
    if (checkSpot(body, { x: me.x + 1, y: me.y - 1 }) && checkSpot(body, { x: me.x + 1, y: me.y + 1 }))
      validDirections.push('right');
  }
  if (me.x > 0 && ['food', 'empty'].indexOf(board[me.x - 1][me.y]) >= 0) {
    if (checkSpot(body, { x: me.x - 1, y: me.y - 1 }) && checkSpot(body, { x: me.x - 1, y: me.y + 1 }))
      validDirections.push('left');
  }
  if (me.y < body.board.width - 1 && ['food', 'empty'].indexOf(board[me.x][me.y + 1]) >= 0) {
    if (checkSpot(body, { x: me.x - 1, y: me.y + 1 }) && checkSpot(body, { x: me.x + 1, y: me.y + 1 }))
      validDirections.push('down');
  }
  if (me.y > 0 && ['food', 'empty'].indexOf(board[me.x][me.y - 1]) >= 0) {
    if (checkSpot(body, { x: me.x - 1, y: me.y - 1 }) && checkSpot(body, { x: me.x + 2, y: me.y - 1 }))
      validDirections.push('up');
  }
  const foodDirections = getClosestFood(body, me);
  const bestDirections = _.intersection(validDirections, foodDirections);
  const direction = bestDirections.length > 0 ? bestDirections[Math.floor(Math.random() * bestDirections.length)] : validDirections[Math.floor(Math.random() * validDirections.length)];

  console.log(validDirections);
  console.log(bestDirections);
  console.log(direction);
  res.json({
    move: direction,
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
  return !snake || snake.body.length <= body.you.body.length
};

const getClosestFood = (body, position) => {
  const food = body.board.food.reduce((closest, crumb) => {
    if (Math.abs(position.x - crumb.x) + Math.abs(position.y - crumb.y)) {
      closest.x = crumb.x;
      closest.y = crumb.y;
    }
    return closest;
  }, { x: body.board.width, y: body.board.height });
  let directions = [];
  if (food.x < position.x) {
    directions.push('left');
  } else if (food.x > position.x) {
    directions.push('right');
  }
  if (food.y < position.y) {
    directions.push('up');
  } else if (food.y > position.y) {
    directions.push('down');
  }
  return directions;
}

module.exports = router;
