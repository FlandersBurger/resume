const router = require("express").Router();
const mongoose = require("mongoose");
const moment = require("moment");

const bot = require("../../../connections/telegram");
const messages = require("../../bots/tenthings/messages");
const keyboards = require("../../bots/tenthings/keyboards");
const lists = require("../../bots/tenthings/lists");
const { getAuthor, getBookCover } = require("../../../connections/goodreads");
const { getMovieDbImage } = require("../../../connections/moviedb");
const { getMusicVideo } = require("../../../connections/youtube");
const { getUnsplashImage } = require("../../../connections/unsplash");
const { getWikiImage } = require("../../../connections/wikipedia");
// const Spotify = require('../../connections/spotify');
// const spotify = new Spotify();
// spotify.init();

const User = require("../../../models/user")();
const TenThingsList = require("../../../models/tenthings/list")();

router.get("/", (req, res, next) => {
  if (!req.isAuthorized) return res.sendStatus(401);
  TenThingsList.find({})
    .select(
      "_id plays skips score values date modifyDate creator name description categories language isDynamic frequency difficulty"
    )
    .limit(parseInt(req.query.limit || 0))
    .skip(parseInt(req.query.limit * (req.query.page - 1) || 0))
    .populate("creator", "username")
    .lean({ virtuals: true })
    .exec((err, result) => {
      if (err) return next(err);
      const lists = result.map(formatList);
      res.json(lists);
    });
});

router.get("/:id/report/:user", async (req, res, next) => {
  if (!req.isAuthorized) return res.sendStatus(401);
  const list = await TenThingsList.findOne({ _id: req.params.id });
  if (list) {
    const user = await User.findOne({ _id: req.params.user });
    bot.notifyAdmins("Check: " + list.name + " reported by " + user.username);
  }
});

router.get("/:id", (req, res, next) => {
  if (!req.isAuthorized) return res.sendStatus(401);
  TenThingsList.findOne({ _id: req.params.id })
    .populate("creator", "_id username displayName")
    .populate("values.creator", "_id username displayName")
    .lean({ virtuals: true })
    .exec((err, list) => {
      if (!list) return res.sendStatus(404);
      return res.json({
        ...list,
        values: list.values.map((value) => ({
          ...value,
          creator: value.creator ? value.creator : list.creator,
        })),
        upvotes: list.votes ? list.votes.filter(({ vote }) => vote > 0).length : 0,
        downvotes: list.votes ? list.votes.filter(({ vote }) => vote < 0).length : 0,
        playRatio: list.plays ? (list.plays - list.skips) / list.plays : 0,
        calculatedDifficulty: list.plays ? list.hints / 6 / (list.plays - list.skips) : 0,
      });
    });
});

router.post("/:id/blurbs/:type", async (req, res, next) => {
  if (!req.isAuthorized) return res.sendStatus(401);
  let list = await TenThingsList.findOne({ _id: req.params.id });
  if (list) {
    let changed = false;
    for (let value of list.values) {
      if (!value.blurb) {
        let blurbUrl;
        switch (req.params.type) {
          case "movies":
            blurbUrl = await getMovieDbImage(value.value, "movie");
            break;
          case "tv":
            blurbUrl = await getMovieDbImage(value.value, "tv");
            break;
          case "actors":
            blurbUrl = await getMovieDbImage(value.value, "person");
            break;
          case "books":
            const author = list.name.indexOf("Written by ") === 0 ? list.name.substring(11) : "";
            const goodreadsAuthor = author ? await getAuthor(author) : "";
            blurbUrl = await getBookCover(value.value, goodreadsAuthor);
            break;
          case "musicvideos":
            const artist = list.name.substring(0, list.name.indexOf(" - ")).replace(/\s/, "+");
            blurbUrl = await getMusicVideo(value.value, artist);
            break;
          case "wiki":
            blurbUrl = await getWikiImage(value.value);
            break;
          case "unsplash":
            blurbUrl = await getUnsplashImage(value.value);
          default:
            break;
        }
        if (blurbUrl) {
          value.blurb = blurbUrl;
          changed = true;
        }
      }
    }
    if (changed) {
      try {
        const saved = await list.save();
      } catch (error) {
        bot.notifyAdmin(`Error saving ${list.name} ${list._id}`);
        console.error(error);
      }
      res.sendStatus(200);
    } else {
      res.sendStatus(304);
    }
  } else {
    res.sendStatus(404);
  }
});

router.post("/:id", (req, res, next) => {
  if (!req.isAuthorized) return res.sendStatus(401);
  TenThingsList.findOne({ _id: req.params.id }).exec(function (err, list) {
    if (err) next(err);
    list.values.filter(({ creator }) => !creator).forEach((value) => (value.creator = list.creator));
    console.log(list.values);
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

router.put("/", (req, res, next) => {
  if (!req.isAuthorized) return res.sendStatus(401);
  var yesterday = moment().subtract(1, "days");
  var previousModifyDate = moment(req.body.list.modifyDate);
  req.body.list.modifyDate = new Date();
  req.body.list.search = req.body.list.name.removeAllButLetters();
  req.body.list.score = lists.getScore(req.body.list);
  req.body.list.values.filter(({ creator }) => !creator).forEach((value) => (value.creator = req.body.list.creator));
  TenThingsList.findByIdAndUpdate(
    req.body.list._id ? req.body.list._id : new mongoose.Types.ObjectId(),
    req.body.list,
    { new: true, upsert: true },
    function (err, list) {
      if (err) return next(err);
      TenThingsList.findOne({ _id: list._id })
        .populate("creator")
        .exec((err, foundList) => {
          if (err) return next(err);
          if (!req.body.list._id) {
            bot.notifyAdmins(`<u>List Created</u>\n${messages.listInfo(foundList)}`, keyboards.curate(foundList));
            bot.notifyCosmicForce(`<u>List Created</u>\n${messages.listInfo(foundList)}`, keyboards.curate(foundList));
          } else if (previousModifyDate < yesterday) {
            bot.notifyAdmins(
              `<u>List Updated</u>\nUpdated by <i>${req.body.user.username}</i>\n${messages.listInfo(foundList)}`,
              keyboards.curate(foundList)
            );
          }
          res.json(formatList(foundList));
        });
    }
  );
});

router.delete("/:id", (req, res, next) => {
  if (!req.isAuthorized) return res.sendStatus(401);
  TenThingsList.findOne({ _id: req.params.id }, (err, list) => {
    if (err) return next(err);
    if (list) {
      if (req.isAdmin || req.auth.userid === list.creator) {
        TenThingsList.findByIdAndRemove({ _id: req.params.id }, (err, list) => {
          if (err) return next(err);
          bot.notifyAdmins(
            list.values
              .sort((a, b) => (a.value < b.value ? -1 : 1))
              .reduce(
                (message, item) => `${message}- ${item.value}\n`,
                `<b>${list.name}</b>\ndeleted by ${req.user.username}\n`
              )
          );
          res.sendStatus(200);
        });
      } else {
        bot.notifyAdmins(
          `Unauthorized deletion (not an admin nor the creator):\n<b>${list.name}</b> by ${req.user.username} (${req.user._id})\nIf it persists -> Block them at https://belgocanadian.com/tenthings-admin`
        );
        res.sendStatus(200);
      }
    }
  });
});

const formatList = (list) => ({
  _id: list._id,
  plays: list.plays,
  skips: list.skips,
  score: list.score,
  playRatio: list.playRatio,
  answers: list.answers,
  values: list.values.map((item) => item.value),
  blurbs: list.blurbs,
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

module.exports = router;
