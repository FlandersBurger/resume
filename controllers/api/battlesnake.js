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
  const me = body.you.body[0];
  console.log(body);
  let board = [];
  for (var i = 0; i < body.board.width; i++) {
    board.push([]);
    for (var j = 0; j < body.board.height; j++) {
      board[i].push(0);
    }
  }
  body.board.food.forEach(position => {
    board[position.x][position.y] = 1;
  });
  body.board.snakes.forEach(snake => {
    snake.body.forEach(position => {
      board[item.x][item.y] = snake.id;
    });
  });
  console.log(board);
  let directions;
  if (me.x < body.board.width - 1 && board[me.x + 1][me.y] >= 0) {
    if (checkSpot(body, { x: me.x + 1, y: me.y - 1 }) && checkSpot(body, { x: me.x + 1, y: me.y + 1 }))
      directions.push('right');
  }
  if (me.x > 0 && board[me.x - 1][me.y] >= 0) {
    if (checkSpot(body, { x: me.x - 1, y: me.y - 1 }) && checkSpot(body, { x: me.x - 1, y: me.y + 1 }))
      directions.push('left');
  }
  if (me.y < body.board.width - 1 && board[me.x][me.y + 1] >= 0) {
    if (checkSpot(body, { x: me.x - 1, y: me.y + 1 }) && checkSpot(body, { x: me.x + 1, y: me.y + 1 }))
      directions.push('down');
  }
  if (me.y > 0 && board[me.x][me.y - 1] >= 0) {
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

const checkSpot = (body, position) {
  let xOk = position.x < 0 || position.x >= body.board.width;
  let yOk = position.y < 0 || position.y >= body.board.height;
  if (!(xOk && yOk)) {
    const snake = _.find(body.board.snakes, snake => {
      _.some(snake.body, spot => {
        return spot.x === position.x && spot.y === position.y;
      });
    });
    return !snake || snake.body.length < body.you.body.length
  } else {
    return true;
  }

};

module.exports = router;
