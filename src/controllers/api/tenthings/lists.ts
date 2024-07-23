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

import { IList, IListValue } from "@models/tenthings/list";
import { List, User } from "@models/index";
import { removeAllButLetters } from "@root/utils/string-helpers";
import { getListMessage } from "@tenthings/messages";
import { formatList, getList, getListScore } from "@tenthings/lists";
import { curateListKeyboard } from "@tenthings/keyboards";

export const tenthingsListsRoute = Router();

tenthingsListsRoute.get("/", async (req: QueryableRequest, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  const page = parseInt(req.query.page ?? 1);
  const lists: LeanDocument<IList>[] = await List.find(parseQuery(req.query))
    .limit(parseInt(req.query.limit) || 0)
    .skip(parseInt(req.query.limit) * (page - 1) || 0)
    .sort({ [req.query.sort_by ?? "date"]: parseInt(req.query.order_by ?? -1) as SortOrder })
    .populate("creator", "_id username displayName")
    .populate("values.creator", "_id username displayName")
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
  const list = await getList(new Types.ObjectId(req.params.id));
  if (!list) return res.sendStatus(404);
  return res.json(list);
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

tenthingsListsRoute.put("/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  const yesterday = moment().subtract(1, "days");
  const list = await List.findOne({ _id: req.params.id });
  if (!list) return res.sendStatus(404);
  const previousModifyDate = moment(list.modifyDate);
  list.values.filter(({ creator }) => !creator).forEach((value) => (value.creator = list.creator));

  Object.assign(list, req.body);
  list.modifyDate = new Date();
  await list.validate();
  await list.save();
  const updatedList = await getList(new Types.ObjectId(req.params.id));
  if (!updatedList) return res.sendStatus(404);
  if (previousModifyDate < yesterday) {
    bot.notifyAdmins(
      `<u>List Updated</u>\nUpdated by <i>${res.locals.user?.username}</i>\n${getListMessage(updatedList)}`,
      curateListKeyboard(list),
    );
  }
  return res.json(formatList(updatedList));
});

tenthingsListsRoute.post("/", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  const yesterday = moment().subtract(1, "days");
  const previousModifyDate = moment(req.body.list.modifyDate);
  req.body.list.modifyDate = new Date();
  req.body.list.search = removeAllButLetters(req.body.list.name);
  req.body.list.score = getListScore(req.body.list);
  req.body.list.values
    .filter(({ creator }: { creator: Types.ObjectId }) => !creator)
    .forEach((value: IListValue) => (value.creator = req.body.list.creator));

  const list = await List.findByIdAndUpdate(
    req.body.list._id ? req.body.list._id : new Types.ObjectId(),
    req.body.list,
    { new: true, upsert: true },
  );

  const updatedList = await getList(list._id);
  if (!updatedList) return res.sendStatus(404);
  if (!list) return res.sendStatus(500);
  if (!req.body.list._id) {
    bot.notifyAdmins(`<u>List Created</u>\n${getListMessage(updatedList)}`, curateListKeyboard(updatedList));
    bot.notifyCosmicForce(`<u>List Created</u>\n${getListMessage(updatedList)}`, curateListKeyboard(updatedList));
  } else if (previousModifyDate < yesterday) {
    bot.notifyAdmins(
      `<u>List Updated</u>\nUpdated by <i>${res.locals.user?.username}</i>\n${getListMessage(updatedList)}`,
      curateListKeyboard(list),
    );
  }
  return res.json(formatList(updatedList));
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

tenthingsListsRoute.post("/:id/values", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  const list = await List.findOne({ _id: req.params.id });
  if (!list) return res.sendStatus(404);
  if (list.values.some(({ value }) => value === req.body.value)) return res.sendStatus(400);
  list.values.push({ ...req.body, creator: res.locals.user!._id });
  await list.save();
  return res.json(list.values[list.values.length - 1]);
});

tenthingsListsRoute.put("/:id/values/:valueId", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  const list = await List.findOne({ _id: req.params.id });
  if (!list) return res.sendStatus(404);
  const value = list.values.find(({ _id }) => _id.toString() === req.params.valueId);
  if (!value) return res.sendStatus(404);
  if (value.creator !== res.locals.user?._id && !res.locals.isAdmin) return res.sendStatus(401);
  Object.assign(value, req.body);
  await list.save();
  return res.sendStatus(200);
});

tenthingsListsRoute.delete("/:id/values/:valueId", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  const list = await List.findOne({ _id: req.params.id });
  if (!list) return res.sendStatus(404);
  const value = list.values.find(({ _id }) => _id.toString() === req.params.valueId);
  if (!value) return res.sendStatus(404);
  if (value.creator !== res.locals.user?._id && !res.locals.isAdmin) return res.sendStatus(401);
  await List.findByIdAndUpdate(req.params.id, { $pull: { values: { _id: req.params.valueId } } }).exec();
  return res.sendStatus(200);
});

tenthingsListsRoute.get("/names", (_: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  const listNames = List.find({}).select("_id name");
  res.json(listNames);
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
