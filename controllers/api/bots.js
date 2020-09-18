var router = require('express').Router();
var mongoose = require('mongoose');
var request = require('request-promise');
var moment = require('moment');
var _ = require('underscore');
var parseString = require('xml2js').parseStringPromise;

var config = require('../../config');
const redis = require('../../redis');
var bot = require('../../bots/telegram');
var categories = require('../bots/tenthings/categories');
var languages = require('../bots/tenthings/languages');

var TenThingsList = require('../../models/tenthings/list');
var User = require('../../models/user');
var TenThingsGame = require('../../models/tenthings/game');

router.get('/names', (req, res, next) => {
  TenThingsList.find({})
    .select('_id name')
    .exec((err, result) => {
      if (err) return next(err);
      res.json(result);
    });
});

router.get('/categories', (req, res, next) => {
  res.json(categories);
});

router.get('/languages', (req, res, next) => {
  res.json(languages);
});

router.get('/lists', (req, res, next) => {
  if (!req.auth || req.auth.userid == '5ece428af848aa2fc392d099') {
    return res.sendStatus(401);
  }
  TenThingsList.find({})
    .select('_id plays skips score values.value date modifyDate creator name description categories language isDynamic')
    .populate('creator', 'username')
    .lean()
    .exec((err, result) => {
      if (err) return next(err);
      //var lists = result.map(list => console.log(list.blurbs));
      var lists = result.map(formatList);
      res.json(lists);
    });
});

router.get('/lists/:id/report/:user', (req, res, next) => {
  TenThingsList.findOne({
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
  TenThingsList.findOne({
      _id: req.params.id
    })
    .populate('creator')
    .exec((err, list) => {
      res.json(list);
    });
});

router.get('/lists/:id/movies', async (req, res, next) => {
  let list = await TenThingsList.findOne({
    _id: req.params.id
  });
  if (list) {
    let changed = false;
    for (let value of list.values) {
      const movieDB = await request(`https://api.themoviedb.org/3/search/movie?api_key=${config.tokens.tmdbapi}&query=${encodeURIComponent(value.value)}`);
      try {
        const posterPath = JSON.parse(movieDB).results[0].poster_path;
        if (posterPath) {
          value.blurb = `http://image.tmdb.org/t/p/w500${posterPath}`;
        }
        changed = true;
      } catch (e) {
        console.error(`No Poster for ${value.value}`);
      }
    }
    if (changed) {
      const saved = await list.save();
      res.sendStatus(200);
    } else {
      res.sendStatus(304);
    }
  } else {
    res.sendStatus(404);
  }
});


router.get('/lists/:id/actors', async (req, res, next) => {
  let list = await TenThingsList.findOne({
    _id: req.params.id
  });
  if (list) {
    let changed = false;
    for (let value of list.values) {
      const movieDB = await request(`https://api.themoviedb.org/3/search/person?api_key=${config.tokens.tmdbapi}&query=${encodeURIComponent(value.value)}`);
      try {
        const posterPath = JSON.parse(movieDB).results[0].profile_path;
        if (posterPath) {
          value.blurb = `http://image.tmdb.org/t/p/w500${posterPath}`;
        }
        changed = true;
      } catch (e) {
        console.error(`No Poster for ${value.value}`);
      }
    }
    if (changed) {
      const saved = await list.save();
      res.sendStatus(200);
    } else {
      res.sendStatus(304);
    }
  } else {
    res.sendStatus(404);
  }
});


router.get('/lists/:id/books', async (req, res, next) => {
  let list = await TenThingsList.findOne({
    _id: req.params.id
  });
  if (list) {
    let changed = false;
    for (let value of list.values) {
      if (!value.blurb) {
        const author = list.name.indexOf('Written by ') === 0 ? list.name.substring(11) : '';
        const goodreadsDB = await request(`https://www.goodreads.com/search/index.xml?key=${config.tokens.goodreadsapi}&q=${author}%20${encodeURIComponent(value.value)}`);
        try {
          const parsedXML = await parseString(goodreadsDB);
          const posterPath = await parsedXML.GoodreadsResponse.search[0].results[0].work[0].best_book[0].image_url[0];
          if (posterPath && posterPath.indexOf('nophoto') < 0) {
            value.blurb = posterPath;
          }
          changed = true;
        } catch (e) {
          console.error(`No Poster for ${value.value}`);
        }
      }
    }
    if (changed) {
      const saved = await list.save();
      res.sendStatus(200);
    } else {
      res.sendStatus(304);
    }
  } else {
    res.sendStatus(404);
  }
});

router.get('/lists/:id/musicvideos', async (req, res, next) => {
  let list = await TenThingsList.findOne({
    _id: req.params.id
  });
  if (list) {
    let changed = false;
    const artist = list.name.substring(0, list.name.indexOf(' - ')).replace(/\s/, '+');
    console.log(artist);
    for (let value of list.values) {
      const youtubeDB = await request(`https://www.googleapis.com/youtube/v3/search?key=${config.tokens.youtubeapi}&order=relevance&videoDefinition=high&type=video&maxResults=1&part=snippet&q=${artist}+VEVO+${encodeURIComponent(value.value.replace(' ', '+'))}`);
      try {
        const videoPath = JSON.parse(youtubeDB).items[0].id.videoId;
        if (videoPath) {
          value.blurb = `https://www.youtube.com/watch?v=${videoPath}`;
        }
        changed = true;
      } catch (e) {
        console.error(`No Poster for ${value.value}`);
      }
    }
    if (changed) {
      const saved = await list.save();
      res.sendStatus(200);
    } else {
      res.sendStatus(304);
    }
  } else {
    res.sendStatus(404);
  }
});

router.put('/lists', (req, res, next) => {
  if (req.auth.userid == '5ece428af848aa2fc392d099') {
    return res.sendStatus(401);
  }
  var yesterday = moment().subtract(1, 'days');
  var previousModifyDate = moment(req.body.list.modifyDate);
  req.body.list.modifyDate = new Date();
  req.body.list.search = req.body.list.name.removeAllButLetters();
  TenThingsList.findByIdAndUpdate(req.body.list._id ? req.body.list._id : new mongoose.Types.ObjectId(), req.body.list, {
    new: true,
    upsert: true
  }, function(err, list) {
    if (err) return next(err);
    TenThingsList.findOne({
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
  User.findOne({
      _id: req.auth.userid
    })
    .exec((err, user) => {
      if (err) return next(err);
      TenThingsList.findOne(req.params.id, (err, list) => {
        if (config.admins.indexOf(req.auth.userid) >= 0 || req.auth.userid === list.creator) {
          TenThingsList.findByIdAndRemove(req.params.id, (err, list) => {
            if (err) return next(err);
            bot.notifyAdmins('<b>' + list.name + '</b> deleted by ' + user.username);
            res.sendStatus(200);
          });
        } else {
          bot.notifyAdmins(`Unauthorized detletion: <b>${list.name}</b> by ${user.username} (${user._id})`);
          res.sendStatus(200);
        }
      });
    });
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
});

router.post('/pause', (req, res, next) => {
  redis.get('pause').then(value => {
    const pause = value === 'true';
    bot.notifyAdmin(`Pause = ${!pause}`);
    redis.set('pause', !pause);
    res.json(!pause);
  });
});

router.get('/pause', (req, res, next) => {
  redis.get('pause').then(value => {
    res.json(value === 'true');
  });
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
  categories: list.categories,
  isDynamic: list.isDynamic
});
/*
User.findOne({
    _id: '5ecdef49babb2620da884a6a'
  })
  .exec((err, user) => {
    if (err) return console.error(err);
    console.log(user);
  });*/
/*
ListBackup.find({})
  .select('_id name')
  .exec((err, existingLists) => {
    console.log(existingLists);
  });

*/
/*
TenThingsList.find({
    'values.creator': '5ece428af848aa2fc392d099'
  })
  .exec((err, lists) => {
    console.log(lists.map(list => list.name));
  });*/
/*
TenThingsList.find({})
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
*/
/*
TenThingsList.find({})
  .lean()
  .select('_id name')
  .exec((err, existingLists) => {
    ListBackup.find({
        name: {
          $nin: existingLists.map(list => list.name)
        }
      })
      .exec((err, missingLists) => {

        // TenThingsList.insertMany(missingLists
        //   .map(list => ({
        //     name: list.name,
        //     description: list.description,
        //     categories: list.categories,
        //     creator: list.creator,
        //     isDynamic: list.isDynamic,
        //     enabled: list.enabled,
        //     values: list.values,
        //     date: list.date,
        //     modifyDate: list.modifyDate,
        //     plays: list.plays,
        //     hints: list.hints,
        //     skips: list.skips,
        //     score: list.score,
        //     voters: list.voters,
        //     votes: list.votes
        //   }))
        // ).then((docs) => {
        //   console.log(missingLists.sort().map(list => list.name));
        //   console.log(missingLists.length + ' missing lists');
        //   console.log(docs.lengt);
        // }, console.error);
      });
  });*/