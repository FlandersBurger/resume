var router = require('express').Router();
var mongoose = require('mongoose');
var request = require('request');
var moment = require('moment');
var _ = require('underscore');

var config = require('../../config');
var bot = require('../../bots/telegram');

var List = require('../../models/list');
var ListBackup = require('../../models/list-backup');
var User = require('../../models/user');
var TenThings = require('../../models/games/tenthings');

var admins = [
  '5ae15f14b5f7883ff0497339', //Me
  '5b4ac81544f3cf615d4d67c6', //Caio
  '5ae16b2317c46c02144a93a9', //Terrence
  '5b464a53b1436b72a67b0039', //Val
  '5b4cc52744f3cf615d4d699c', //Renan
  '5cd6d3a4597a396941793afe', //Maria
  '5cd6d3a4597a396941793afe', //Maria
];


router.get('/names', (req, res, next) => {
  List.find({})
    .select('_id name')
    .exec((err, result) => {
      if (err) return next(err);
      res.json(result);
    });
});
router.get('/lists', (req, res, next) => {
  List.find({})
    .select('_id plays skips score values.value date modifyDate creator name description category')
    //.populate('creator', 'username')
    .lean()
    .exec((err, result) => {
      console.log(result.length);
      if (err) return next(err);
      //var lists = result.map(list => console.log(list.blurbs));
      var lists = result.map(formatList);
      res.json(lists);
    });
});

router.get('/lists/:id/report/:user', (req, res, next) => {
  List.findOne({
      _id: req.params.id
    })
    .exec((err, list) => {
      User.findOne({
          _id: req.params.user
        })
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
  var yesterday = moment().subtract(1, 'days');
  var previousModifyDate = moment(req.body.list.modifyDate);
  req.body.list.modifyDate = new Date();
  List.findByIdAndUpdate(req.body.list._id ? req.body.list._id : new mongoose.Types.ObjectId(), req.body.list, {
    new: true,
    upsert: true
  }, function(err, list) {
    if (err) return next(err);
    List.findOne({
        _id: list._id
      })
      .populate('creator')
      .exec((err, foundList) => {
        if (err) return next(err);
        if (!req.body.list._id) {
          bot.notifyAdmins('<b>' + list.name + '</b> created by <i>' + req.body.user.username + '</i>');
        } else if (previousModifyDate < yesterday) {
          bot.notifyAdmins('<b>' + list.name + '</b> updated by <i>' + req.body.user.username + '</i>');
        }
        res.json(formatList(foundList));
      });
  });
});

router.delete('/lists/:id', (req, res, next) => {
  if (admins.indexOf(req.auth.userid) >= 0) {
    console.log('here');
    List.findByIdAndRemove(req.params.id, (err, list) => {
      if (err) return next(err);
      console.log(`deleting ${req.params.id} - ${list.name}`);
      //bot.notifyAdmins('<b>' + list.name + '</b> deleted');
      res.sendStatus(200);
    });
  } else {
    bot.notifyAdmin(`Deletion attempt: ${req.params.id}`);
    res.sendStatus(401);
  }
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = router;

const formatList = list => ({
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
});

User.findOne({
    _id: '5ecdef49babb2620da884a6a'
  })
  .exec((err, user) => {
    if (err) return console.error(err);
    console.log(user);
  });
/*
ListBackup.find({})
  .select('_id name')
  .exec((err, existingLists) => {
    console.log(existingLists);
  });

*/

List.find({})
  .lean()
  .select('_id name')
  .exec((err, existingLists) => {
    console.log(`${existingLists.length} existing lists`);
    let counts = existingLists.reduce((result, list) => {
      if (result[list.name]) {
        result[list.name]++;
      } else {
        result[list.name] = 1;
      }
      return result;
    }, {});
    let result = [];
    for (let key of Object.keys(counts)) {
      if (counts[key] > 1) {
        result.push({
          key,
          count: counts[key]
        });
      }
    }
    console.log(result);
  });

/*
List.find({})
  .lean()
  .select('_id name')
  .exec((err, existingLists) => {
    ListBackup.find({
        name: {
          $nin: existingLists.map(list => list.name)
        }
      })
      .exec((err, missingLists) => {

        // List.insertMany(missingLists.map(list => ({
        //   name: list.name,
        //   description: list.description,
        //   category: list.category,
        //   creator: list.creator,
        //   isDynamic: list.isDynamic,
        //   enabled: list.enabled,
        //   values: list.values,
        //   date: list.date,
        //   modifyDate: list.modifyDate,
        //   plays: list.plays,
        //   hints: list.hints,
        //   skips: list.skips,
        //   score: list.score,
        //   voters: list.voters,
        //   votes: list.votes
        // })), (err, docs) => {
        //   if (err) return console.error(err);
        //   console.log(docs);
        // });
        console.log(missingLists.map(list => list.name));
        console.log(missingLists.length + ' missing lists');
      });
  });*/