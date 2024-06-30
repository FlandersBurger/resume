import { QueryableRequest, Request, Response, Router } from "express";
import { Types, LeanDocument, SortOrder } from "mongoose";
import moment from "moment";

import bot from "@root/connections/telegram";
const { getAuthor, getBookCover } = require("@root/connections/goodreads");
const { getMovieDbImage } = require("@root/connections/moviedb");
const { getMusicVideo } = require("@root/connections/youtube");
const { getUnsplashImage } = require("@root/connections/unsplash");
const { getWikiImage } = require("@root/connections/wikipedia");
const { getPexelsImage } = require("@root/connections/pexels");
// const Spotify = require('@/controllers/connections/spotify');
// const spotify = new Spotify();
// spotify.init();

import { IUser } from "@models/user";
import { IList, IListValue } from "@models/tenthings/list";
import { List, User } from "@models/index";
import { removeAllButLetters } from "@root/utils/string-helpers";
import { getListMessage } from "@tenthings/messages";
import { getListScore } from "@tenthings/lists";
import { curateListKeyboard } from "@tenthings/keyboards";

export const tenthingsListsRoute = Router();

tenthingsListsRoute.get("/", async (req: QueryableRequest, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  const page = parseInt(req.query.page ?? 1);
  const lists: LeanDocument<IList>[] = await List.find(parseQuery(req.query))
    .select(
      "_id plays skips score values date modifyDate creator name description categories language isDynamic frequency difficulty",
    )
    .limit(parseInt(req.query.limit) || 0)
    .skip(parseInt(req.query.limit) * (page - 1) || 0)
    .sort({ [req.query.sort_by ?? "date"]: parseInt(req.query.order_by ?? -1) as SortOrder })
    .populate("creator", "username")
    .lean({ virtuals: true });
  res.json({ result: lists.map(formatList), nextPage: page + 1 });
});

tenthingsListsRoute.get("/:id/report/:user", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  const list = await List.findOne({ _id: req.params.id });
  if (!list) return res.sendStatus(404);
  if (list) {
    const user = await User.findOne({ _id: req.params.user });
    if (!user) return res.sendStatus(400);
    bot.notifyAdmins("Check: " + list.name + " reported by " + user.username);
  }
});

tenthingsListsRoute.get("/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  const list = await List.findOne({ _id: req.params.id })
    .populate("creator", "_id username displayName")
    .populate("values.creator", "_id username displayName")
    .lean({ virtuals: true });
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

tenthingsListsRoute.post("/:id/blurbs/:type", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  let list = await List.findOne({ _id: req.params.id });
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
            break;
          case "pexels":
            blurbUrl = await getPexelsImage(value.value);
            break;
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
        await list.save();
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

tenthingsListsRoute.post("/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  const list = await List.findOne({ _id: req.params.id });
  if (!list) return res.sendStatus(404);
  list.values.filter(({ creator }) => !creator).forEach((value) => (value.creator = list.creator));

  Object.assign(list, req.body);
  await list.save();
  res.sendStatus(200);
});

tenthingsListsRoute.put("/", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  var yesterday = moment().subtract(1, "days");
  var previousModifyDate = moment(req.body.list.modifyDate);
  req.body.list.modifyDate = new Date();
  req.body.list.search = removeAllButLetters(req.body.list.name);
  req.body.list.score = getListScore(req.body.list);
  req.body.list.values
    .filter(({ creator }: { creator: Types.ObjectId }) => !creator)
    .forEach((value: IListValue) => (value.creator = req.body.list.creator));

  const updatedList = await List.findByIdAndUpdate(
    req.body.list._id ? req.body.list._id : new Types.ObjectId(),
    req.body.list,
    { new: true, upsert: true },
  );

  const list = await List.findOne({ _id: updatedList._id }).populate("creator");
  if (!list) return res.sendStatus(500);
  if (!req.body.list._id) {
    bot.notifyAdmins(`<u>List Created</u>\n${getListMessage(list)}`, curateListKeyboard(list));
    bot.notifyCosmicForce(`<u>List Created</u>\n${getListMessage(list)}`, curateListKeyboard(list));
  } else if (previousModifyDate < yesterday) {
    bot.notifyAdmins(
      `<u>List Updated</u>\nUpdated by <i>${req.body.user.username}</i>\n${getListMessage(list)}`,
      curateListKeyboard(list),
    );
  }
  res.json(formatList(list));
});

tenthingsListsRoute.delete("/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  const list = await List.findOne({ _id: req.params.id });
  if (list) {
    if (res.locals.isAdmin || res.locals.user?._id === list.creator) {
      const deletedList = await List.findByIdAndRemove({ _id: req.params.id });
      bot.notifyAdmins(
        list.values
          .sort((a, b) => (a.value < b.value ? -1 : 1))
          .reduce(
            (message, item) => `${message}- ${item.value}\n`,
            `<b>${list.name}</b>\ndeleted by ${res.locals.user!.username}\n`,
          ),
      );
      res.sendStatus(200);
    } else {
      bot.notifyAdmins(
        `Unauthorized deletion (not an admin nor the creator):\n<b>${list.name}</b> by ${res.locals.user!.username} (${
          res.locals.user!._id
        })\nIf it persists -> Block them at https://belgocanadian.com/tenthings-admin`,
      );
      res.sendStatus(200);
    }
  }
});

tenthingsListsRoute.get("/names", (_: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  const listNames = List.find({}).select("_id name");
  res.json(listNames);
});

const formatList = (list: LeanDocument<IList>) => ({
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
  creator: (list.creator as IUser).username,
  name: list.name,
  description: list.description,
  categories: list.categories,
  isDynamic: list.isDynamic,
  language: list.language,
  difficulty: list.difficulty,
  frequency: list.frequency,
});

const parseQuery = (query: { [key: string]: string }) => {
  return Object.keys(query).reduce((params, key) => {
    switch (key) {
      case "search":
        if (query[key]) Object.assign(params, { $text: { $search: `"${query[key]}"` } });
        break;
      case "categories":
      case "language":
        const values = query[key].split(",");
        Object.assign(params, { [key]: { $in: values } });
        break;
      default:
        break;
    }
    return params;
  }, {});
};
