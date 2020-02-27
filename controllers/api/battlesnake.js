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
router.post('/move', function (req, res, next) {
});
router.post('/end', function (req, res, next) {
});
router.post('/ping', function (req, res, next) {
  res.status(200).end();
});

module.exports = router;
