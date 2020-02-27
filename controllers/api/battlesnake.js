/*jslint esversion: 10*/
const router = require('express').Router();

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
  const me = body.you.body;
  console.log(body);
  let board = new Array(body.board.width).fill(new Array(body.board.height).fill(0));
  console.log(board);
  const food = body.board.food;
  const snakes = body.board.snakes.reduce((positions, snake) => {
    return positions.concat(snake.body);
  }, []);
  food.forEach(item => {
    board[item.x][item.y] = 1;
  });
  snakes.forEach(item => {
    board[item.x][item.y] = -1;
  });
  console.log(board);
  let direction
  if (me.x < body.board.width - 1 && board[me.x + 1][me.y] >= 0) {
    direction = 'right';
  } else if (me.x > 0 && board[me.x - 1][me.y] >= 0) {
    direction = 'left';
  } else if (me.y < body.board.width - 1 && board[me.x][me.y + 1] >= 0) {
    direction = 'down';
  } else if (me.y > 0 && board[me.x][me.y - 1] >= 0) {
    direction = 'up';
  }
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

module.exports = router;
