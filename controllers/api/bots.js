var router = require('express').Router();
var mongoose = require('mongoose');

var config = require('../../config');
var bot = require('../../bots/telegram');

var List = require('../../models/list');

var admins = [
  '5ae15f14b5f7883ff0497339', //Me
  '5b4ac81544f3cf615d4d67c6', //Caio
  '5ae16b2317c46c02144a93a9', //Terrence
  '5b464a53b1436b72a67b0039', //Val
  '5b4cc52744f3cf615d4d699c', //Renan
];

router.get('/lists/:id', function (req, res, next) {
  if (admins.find(function(admin) {
    return admin === req.params.id;
  })) {
    List.find().populate('creator').exec(function(err, result) {
      if (err) return next(err);
      res.json(result);
    });
  } else {
    List.find({
      creator: req.params.id
    }).populate('creator').exec(function(err, result) {
      if (err) return next(err);
      res.json(result);
    });
  }
});

router.put('/lists', function (req, res, next) {
  List.findByIdAndUpdate(req.body.list._id ? req.body.list._id : new mongoose.Types.ObjectId(), req.body.list, { new: true, upsert: true }, function(err, list) {
    if (err) return next(err);
    List.findOne({
      _id: list._id
    }).populate('creator').exec(function(err, result) {
      if (err) return next(err);
      bot.notifyAdmin(list.name + (req.body._id ? ' updated by ' : ' created by ') + req.body.user.username);
      res.json(result);
    });
  });
});

router.delete('/lists/:id', function (req, res, next) {
  List.findByIdAndRemove(req.params.id, function(err, list) {
    if (err) return next(err);
    bot.notifyAdmin(list.name + ' deleted');
    res.sendStatus(200);
  });
});

module.exports = router;
