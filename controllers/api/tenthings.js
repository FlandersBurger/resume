const router = require("express").Router();

const redis = require("../../redis");
const bot = require("../../connections/telegram");
const categories = require("../bots/tenthings/categories");
const { categories: newCategories } = require("../bots/tenthings/categories-new");
const languages = require("../bots/tenthings/languages");

const TenThingsList = require("../../models/tenthings/list")();
const TenThingsGame = require("../../models/tenthings/game")();
const TenThingsPlayer = require("../../models/tenthings/player")();

router.get("/games", (req, res, next) => {
  if (!req.isAdmin) return res.sendStatus(401);
  TenThingsGame.find({
    lastPlayDate: { $gt: "2019-06-15T00:00:00.000Z" },
    ...req.body.query,
  })
    .select("_id chat_id enabled date lastPlayDate")
    .limit(parseInt(req.query.limit || 0))
    .skip(parseInt(req.query.limit * (req.query.page - 1) || 0))
    .exec((err, result) => {
      if (err) return next(err);
      res.json({
        count: result.length,
        data: result,
      });
    });
});

router.get("/players/:id", (req, res, next) => {
  if (!req.isAdmin) return res.sendStatus(401);
  TenThingsPlayer.find({
    id: req.params.id,
  }).exec((err, result) => {
    if (err) return next(err);
    res.json(result);
  });
});

router.get("/names", (req, res, next) => {
  if (!req.isAuthorized) return res.sendStatus(401);
  TenThingsList.find({})
    .select("_id name")
    .exec((err, result) => {
      if (err) return next(err);
      res.json(result);
    });
});

router.get("/categories", (req, res, next) => {
  if (!req.isAuthorized) return res.sendStatus(401);
  res.json(categories);
});

router.get("/new-categories", (req, res, next) => {
  res.json(newCategories);
});

router.get("/languages", (req, res, next) => {
  if (!req.isAuthorized) return res.sendStatus(401);
  res.json(languages);
});

router.get("/game/:id", async (req, res, next) => {
  if (!req.isAdmin) return res.sendStatus(401);
  const game = await TenThingsGame.findOne({ chat_id: req.params.id }).lean();
  const players = await TenThingsPlayer.find({ game: game._id }).lean();
  res.json({
    ...game,
    players,
  });
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
});

router.post("/pause", (req, res, next) => {
  redis.get("pause").then((value) => {
    const pause = value === "true";
    bot.notifyAdmin(`Pause = ${!pause}`);
    redis.set("pause", !pause);
    res.json(!pause);
  });
});

router.get("/pause", (req, res, next) => {
  redis.get("pause").then((value) => {
    res.json(value === "true");
  });
});

module.exports = router;

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
