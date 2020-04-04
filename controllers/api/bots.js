var router = require('express').Router();
var mongoose = require('mongoose');
var request = require('request');
var moment = require('moment');
var _ = require('underscore');

var config = require('../../config');
var bot = require('../../bots/telegram');

var List = require('../../models/list');
var User = require('../../models/user');
var TenThings = require('../../models/games/tenthings');

var admins = [
  //'5ae15f14b5f7883ff0497339', //Me
  '5b4ac81544f3cf615d4d67c6', //Caio
  '5ae16b2317c46c02144a93a9', //Terrence
  '5b464a53b1436b72a67b0039', //Val
  '5b4cc52744f3cf615d4d699c', //Renan
  '5cd6d3a4597a396941793afe', //Maria
];

router.get('/lists', (req, res, next) => {
  List.find()
  .select('_id plays skips score values date modifyDate creator name description category')
  .populate('creator', 'username')
  .exec((err, result) => {
    if (err) return next(err);
    var lists = result.map(list =>
      ({
        _id: list._id,
        plays: list.plays,
        skips: list.skips,
        score: list.score,
        answers: list.values.length,
        values: list.values.map(item => item.value),
        blurbs: list.values.filter(item => item.blurb).length,
        date: list.date,
        modifyDate: list.modifyDate,
        creator: list.creator.username,
        name: list.name,
        description: list.description,
        category: list.category,
      })
    );
    res.json(lists);
  });
});

router.get('/lists/:id/report/:user', (req, res, next) => {
  List.findOne({
    _id: req.params.id
  })
  .exec((err, list) => {
    User.findOne({ _id: req.params.user })
    .exec((err, user) => {
      bot.notifyAdmins('Check: ' + list.name + ' reported by ' + user.username);
    });
  });
});

router.get('/lists/:id', (req, res, next) => {
  List.findOne({
    _id: req.params.id
  })
  .populate('creator')
  .exec((err, list) => {
    res.json(list);
  });
});

router.put('/lists', (req, res, next) => {
  var yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  var previousModifyDate = req.body.list.modifyDate;
  req.body.list.modifyDate = new Date();
  List.findByIdAndUpdate(req.body.list._id ? req.body.list._id : new mongoose.Types.ObjectId(), req.body.list, { new: true, upsert: true }, function(err, list) {
    if (err) return next(err);
    List.findOne({ _id: list._id })
    .populate('creator')
    .exec((err, result) => {
      if (err) return next(err);
      if (!req.body.list._id) {
        bot.notifyAdmins('<b>' + list.name + '</b> created by <i>' + req.body.user.username + '</i>');
      } else if (previousModifyDate < yesterday) {
        bot.notifyAdmins('<b>' + list.name + '</b> updated by <i>' + req.body.user.username + '</i>');
      }
      res.json(result);
    });
  });
});

router.delete('/lists/:id', (req, res, next) => {
  List.findByIdAndRemove(req.params.id, (err, list) => {
    if (err) return next(err);
    bot.notifyAdmins(list.name + ' deleted');
    res.sendStatus(200);
  });
});
router.post('/', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = router;
