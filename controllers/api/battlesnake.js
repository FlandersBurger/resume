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
    if (checkSpot(body, { x: me.x + 1, y: me.y - 1 }) && checkSpot(body, { x: me.x + 1, y: me.y + 1 }) && checkSpot(body, { x: me.x + 2, y: me.y }))
      validDirections.push('right');
  }
  if (me.x > 0 && ['food', 'empty'].indexOf(board[me.x - 1][me.y]) >= 0) {
    if (checkSpot(body, { x: me.x - 1, y: me.y - 1 }) && checkSpot(body, { x: me.x - 1, y: me.y + 1 }) && checkSpot(body, { x: me.x - 2, y: me.y }))
      validDirections.push('left');
  }
  if (me.y < body.board.width - 1 && ['food', 'empty'].indexOf(board[me.x][me.y + 1]) >= 0) {
    if (checkSpot(body, { x: me.x - 1, y: me.y + 1 }) && checkSpot(body, { x: me.x + 1, y: me.y + 1 }) && checkSpot(body, { x: me.x, y: me.y - 2 }))
      validDirections.push('down');
  }
  if (me.y > 0 && ['food', 'empty'].indexOf(board[me.x][me.y - 1]) >= 0) {
    if (checkSpot(body, { x: me.x - 1, y: me.y - 1 }) && checkSpot(body, { x: me.x + 1, y: me.y - 1 }) && checkSpot(body, { x: me.x, y: me.y + 2 }))
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

  let partOfBody = -1;
  const snake = _.find(body.board.snakes, snake => {
    _.some(snake.body, (snakePosition, index) => {
      partOfBody = index;
      return snakePosition.x === position.x && snakePosition.y === position.y;
    });
  });
  //partOfBody === 0 is the head of the snake
  //You can do a head-on collision if the snake is smaller than yours
  if (snake) console.log(`{${position.x}, ${position.y}} ${partOfBody === 0 ? 'Head' : 'Body'} of a ${snake.body.length} enemy, I'm a ${body.you.body.length}`);
  return !snake || (snake.body.length < body.you.body.length && partOfBody === 0)
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
