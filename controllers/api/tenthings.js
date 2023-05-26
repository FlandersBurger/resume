const router = require('express').Router();
const mongoose = require('mongoose');
const request = require('request-promise');
const moment = require('moment');
const _ = require('underscore');
const parseString = require('xml2js').parseStringPromise;
const FuzzyMatching = require('fuzzy-matching');

const config = require('../../config');
const redis = require('../../redis');
const bot = require('../../connections/telegram');
const messages = require('../bots/tenthings/messages');
const keyboards = require('../bots/tenthings/keyboards');
const categories = require('../bots/tenthings/categories');
const languages = require('../bots/tenthings/languages');
const lists = require('../bots/tenthings/lists');
// const Spotify = require('../../connections/spotify');
// const spotify = new Spotify();
// spotify.init();

const User = require('../../models/user')();
const TenThingsList = require('../../models/tenthings/list')();
const TenThingsGame = require('../../models/tenthings/game')();
const TenThingsPlayer = require('../../models/tenthings/player')();

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
    .select(
      '_id plays skips score values date modifyDate creator name description categories language isDynamic frequency difficulty'
    )
    .limit(parseInt(req.query.limit || 0))
    .skip(parseInt(req.query.limit * (req.query.page - 1) || 0))
    .populate('creator', 'username')
    .lean({
      virtuals: true,
    })
    .exec((err, result) => {
      if (err) return next(err);
      var lists = result.map(formatList);
      res.json(lists);
    });
});

router.get('/lists/:id/report/:user', (req, res, next) => {
  TenThingsList.findOne({
    _id: req.params.id,
  }).exec((err, list) => {
    User.findOne({
      _id: req.params.user,
    }).exec((err, user) => {
      bot.notifyAdmins('Check: ' + list.name + ' reported by ' + user.username);
    });
  });
});

router.get('/lists/:id', (req, res, next) => {
  TenThingsList.findOne({
    _id: req.params.id,
  })
    .populate('creator')
    .populate('values.creator')
    .lean({ virtuals: true })
    .exec((err, list) => res.json({ ...list, totalVotes: list.votes ? list.votes.length : 0 }));
});

router.get('/lists/:id/movies', async (req, res, next) => {
  let list = await TenThingsList.findOne({
    _id: req.params.id,
  });
  if (list) {
    let changed = false;
    for (let value of list.values) {
      if (!value.blurb) {
        const movieDB = await request(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            config.tokens.tmdbapi
          }&query=${encodeURIComponent(value.value)}`
        );
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

router.get('/lists/:id/tv', async (req, res, next) => {
  let list = await TenThingsList.findOne({
    _id: req.params.id,
  });
  if (list) {
    let changed = false;
    for (let value of list.values) {
      if (!value.blurb) {
        const movieDB = await request(
          `https://api.themoviedb.org/3/search/tv?api_key=${
            config.tokens.tmdbapi
          }&query=${encodeURIComponent(value.value)}`
        );
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
    _id: req.params.id,
  });
  if (list) {
    let changed = false;
    for (let value of list.values) {
      if (!value.blurb) {
        const movieDB = await request(
          `https://api.themoviedb.org/3/search/person?api_key=${
            config.tokens.tmdbapi
          }&query=${encodeURIComponent(value.value)}`
        );
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
    _id: req.params.id,
  });
  if (list) {
    let changed = false;
    for (let value of list.values) {
      if (!value.blurb) {
        const author = list.name.indexOf('Written by ') === 0 ? list.name.substring(11) : '';
        const goodreadsDB = await request(
          `https://www.goodreads.com/search/index.xml?key=${
            config.tokens.goodreadsapi
          }&q=${author}%20${encodeURIComponent(value.value)}`
        );
        try {
          const parsedXML = await parseString(goodreadsDB);
          const posterPath = await parsedXML.GoodreadsResponse.search[0].results[0].work[0]
            .best_book[0].image_url[0];
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
    _id: req.params.id,
  });
  if (list) {
    let changed = false;
    const artist = list.name.substring(0, list.name.indexOf(' - ')).replace(/\s/, '+');
    for (let value of list.values) {
      if (!value.blurb) {
        const youtubeDB = await request(
          `https://www.googleapis.com/youtube/v3/search?key=${
            config.tokens.youtubeapi
          }&order=relevance&videoDefinition=high&type=video&maxResults=1&part=snippet&q=${artist}+VEVO+${encodeURIComponent(
            value.value.replace(' ', '+')
          )}`
        );
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

const getWikiImage = async (query) => {
  let url = '';
  try {
    const wikiDB = await request(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=Earth&generator=prefixsearch&gpssearch=${encodeURIComponent(
        query
      )}`
    );
    const pages = Object.values(JSON.parse(wikiDB).query.pages)
      .map((page) => ({
        ...page,
        lean: page.title.removeAllButLetters(),
      }))
      .filter(
        (page) =>
          page.images &&
          page.images.filter(
            (image) =>
              ['jpg', 'jpeg', 'png'].indexOf(
                image.title.substring(image.title.lastIndexOf('.') + 1).toLowerCase()
              ) >= 0
          ).length > 0
      );
    let filename = '';
    const fuzzyMatchPages = new FuzzyMatching(pages.map((page) => page.lean));
    const matchPage = fuzzyMatchPages.get(query.removeAllButLetters(), {});
    const page = _.find(pages, (page) => page.lean === matchPage.value);
    const images = page.images
      .map((image) => ({
        ...image,
        lean: image.title.substring(4, image.title.lastIndexOf('.')).removeAllButLetters(),
        ext: image.title.substring(image.title.lastIndexOf('.') + 1).toLowerCase(),
      }))
      .filter((image) => ['jpg', 'jpeg', 'png'].indexOf(image.ext) >= 0);
    const fuzzyMatchImages = new FuzzyMatching(images.map((image) => image.lean));
    const matchImage = fuzzyMatchImages.get(query.removeAllButLetters(), {});
    const image = _.find(images, (image) => image.lean === matchImage.value);
    if (!image) console.log(pages.map((page) => page.images));
    url = `https://commons.wikimedia.org/wiki/Special:FilePath/${image.title.substring(5)}`;
  } catch (e) {
    console.error(e);
  }
  return url;
};

router.get('/lists/:id/pics', async (req, res, next) => {
  let list = await TenThingsList.findOne({
    _id: req.params.id,
  });
  if (list) {
    let changed = false;
    for (let value of list.values) {
      if (!value.blurb) {
        let picPath = '';
        try {
          picPath = await getWikiImage(value.value);
          console.log(picPath);
        } catch (e) {
          console.error(`Wiki failed for ${value.value}`);
          try {
            const unsplashDB = await request(
              `https://api.unsplash.com/search/photos?client_id=${
                config.tokens.unsplashapi.key
              }&query=${encodeURIComponent(value.value.replace(' ', '+'))}`
            );
            picPath = JSON.parse(unsplashDB).results[0].urls.regular;
          } catch (e) {
            console.error(`No Poster for ${value.value}`);
          }
        }
        if (picPath) {
          value.blurb = picPath;
          changed = true;
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

router.get('/game/:id', async (req, res, next) => {
  const game = await TenThingsGame.findOne({ chat_id: req.params.id }).lean();
  const players = await TenThingsPlayer.find({ game: game._id }).lean();
  res.json({
    ...game,
    players,
  });
});

router.post('/lists/:id', (req, res, next) => {
  if (!req.auth || req.auth.userid == '5ece428af848aa2fc392d099') {
    return res.sendStatus(401);
  }
  TenThingsList.findOne({
    _id: req.params.id,
  }).exec(function (err, list) {
    if (err) next(err);
    Object.keys(req.body).forEach((update) => {
      list[update] = req.body[update];
    });
    list.save(function (err, list) {
      if (err) {
        throw next(err);
      }
      res.sendStatus(200);
    });
  });
});

router.put('/lists', (req, res, next) => {
  if (req.auth.userid == '5ece428af848aa2fc392d099') {
    return res.sendStatus(401);
  }
  var yesterday = moment().subtract(1, 'days');
  var previousModifyDate = moment(req.body.list.modifyDate);
  req.body.list.modifyDate = new Date();
  req.body.list.search = req.body.list.name.removeAllButLetters();
  req.body.list.score = lists.getScore(req.body.list);
  TenThingsList.findByIdAndUpdate(
    req.body.list._id ? req.body.list._id : new mongoose.Types.ObjectId(),
    req.body.list,
    {
      new: true,
      upsert: true,
    },
    function (err, list) {
      if (err) return next(err);
      TenThingsList.findOne({
        _id: list._id,
      })
        .populate('creator')
        .exec((err, foundList) => {
          if (err) return next(err);
          if (!req.body.list._id) {
            bot.notifyAdmins(
              `<pre>List Created</pre>\n${messages.listInfo(foundList)}`,
              keyboards.curate(foundList)
            );
          } else if (previousModifyDate < yesterday) {
            bot.notifyAdmins(
              `<pre>List Updated</pre>\nUpdated by <i>${
                req.body.user.username
              }</i>\n${messages.listInfo(foundList)}`,
              keyboards.curate(foundList)
            );
          }
          res.json(formatList(foundList));
        });
    }
  );
});

router.delete('/lists/:id', (req, res, next) => {
  User.findOne({
    _id: req.auth.userid,
  }).exec((err, user) => {
    if (err) return next(err);
    TenThingsList.findOne(
      {
        _id: req.params.id,
      },
      (err, list) => {
        if (err) return next(err);
        if (list) {
          if (config.admins.indexOf(req.auth.userid) >= 0 || req.auth.userid === list.creator) {
            TenThingsList.findByIdAndRemove(
              {
                _id: req.params.id,
              },
              (err, list) => {
                if (err) return next(err);
                bot.notifyAdmins(
                  list.values
                    .sort((a, b) => (a.value < b.value ? -1 : 1))
                    .reduce(
                      (message, item) => `${message}- ${item.value}\n`,
                      `<b>${list.name}</b>\ndeleted by ${user.username}\n`
                    )
                );
                res.sendStatus(200);
              }
            );
          } else {
            bot.notifyAdmins(
              `Unauthorized deletion (not an admin nor the creator):\n<b>${list.name}</b> by ${user.username} (${user._id})\nIf it persists -> Block them at https://belgocanadian.com/tenthings-admin`
            );
            res.sendStatus(200);
          }
        }
      }
    );
  });
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
});

router.post('/pause', (req, res, next) => {
  redis.get('pause').then((value) => {
    const pause = value === 'true';
    bot.notifyAdmin(`Pause = ${!pause}`);
    redis.set('pause', !pause);
    res.json(!pause);
  });
});

router.get('/pause', (req, res, next) => {
  redis.get('pause').then((value) => {
    res.json(value === 'true');
  });
});

module.exports = router;

const formatList = (list) => ({
  _id: list._id,
  plays: list.plays,
  blurbs: list.blurbs,
  skips: list.skips,
  score: list.score,
  answers: list.values.length,
  //blurbs: list.values.filter(item => item.blurb).length,
  values: list.values.map((item) => item.value),
  date: list.date,
  modifyDate: list.modifyDate,
  creator: list.creator.username,
  name: list.name,
  description: list.description,
  categories: list.categories,
  isDynamic: list.isDynamic,
  language: list.language,
  difficulty: list.difficulty,
  frequency: list.frequency,
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
