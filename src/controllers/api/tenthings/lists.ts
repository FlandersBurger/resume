import { QueryableRequest, Request, Response, Router } from "express";
import { Types, LeanDocument, SortOrder } from "mongoose";
import moment from "moment";

import bot from "@root/connections/telegram";
import GoodReads from "@root/connections/goodreads";
import MovieDB from "@root/connections/moviedb";
import YouTube from "@root/connections/youtube";
import Wikipedia from "@root/connections/wikipedia";
import Pexels from "@root/connections/pexels";
import Unsplash from "@root/connections/unsplash";
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
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    const page = parseInt(req.query.page ?? 1);
    const lists: LeanDocument<IList>[] = await List.find(parseQuery(req.query))
      .limit(parseInt(req.query.limit) || 0)
      .skip(parseInt(req.query.limit) * (page - 1) || 0)
      .sort({ [req.query.sort_by ?? "date"]: parseInt(req.query.order_by ?? -1) as SortOrder })
      .populate("creator", "_id username displayName")
      .populate("values.creator", "_id username displayName")
      .lean({ virtuals: true });
    res.json({ result: lists.map(formatList), nextPage: page + 1 });
  }
});

tenthingsListsRoute.get("/:id/report/:user", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    const list = await List.findOne({ _id: req.params.id });
    if (!list) res.sendStatus(404);
    else {
      const user = await User.findOne({ _id: req.params.user });
      if (!user) res.sendStatus(400);
      else bot.notifyAdmins("Check: " + list.name + " reported by " + user.username);
    }
  }
});

tenthingsListsRoute.get("/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    const list = await getList(new Types.ObjectId(req.params.id));
    if (!list) res.sendStatus(404);
    else res.json(list);
  }
});

tenthingsListsRoute.post("/:id/blurbs/:type", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    let list = await List.findOne({ _id: req.params.id });
    if (list) {
      let changed = false;
      for (let value of list.values) {
        if (!value.blurb) {
          let blurbUrl;
          switch (req.params.type) {
            case "movies":
              blurbUrl = await MovieDB.getImage(value.value, "movie");
              break;
            case "tv":
              blurbUrl = await MovieDB.getImage(value.value, "tv");
              break;
            case "actors":
              blurbUrl = await MovieDB.getImage(value.value, "person");
              break;
            case "books":
              const author = list.name.indexOf("Written by ") === 0 ? list.name.substring(11) : "";
              const goodreadsAuthor = author ? await GoodReads.getAuthor(author) : "";
              blurbUrl = await GoodReads.getBook(value.value, goodreadsAuthor);
              break;
            case "musicvideos":
              const artist = list.name.substring(0, list.name.indexOf(" - ")).replace(/\s/, "+");
              blurbUrl = await YouTube.getMusicVideo(value.value, artist);
              break;
            case "wiki":
              blurbUrl = await Wikipedia.getImage(value.value);
              break;
            case "unsplash":
              blurbUrl = await Unsplash.getImage(value.value);
              break;
            case "pexels":
              blurbUrl = await Pexels.getImage(value.value);
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
  }
});

tenthingsListsRoute.put("/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    const yesterday = moment().subtract(1, "days");
    const list = await List.findOne({ _id: req.params.id });
    if (!list) res.sendStatus(404);
    else {
      const previousModifyDate = moment(list.modifyDate);
      list.values.filter(({ creator }) => !creator).forEach((value) => (value.creator = list.creator));

      Object.assign(list, req.body);
      list.modifyDate = new Date();
      await list.validate();
      await list.save();
      const updatedList = await getList(new Types.ObjectId(req.params.id));
      if (!updatedList) res.sendStatus(404);
      else {
        if (previousModifyDate < yesterday) {
          bot.notifyAdmins(
            `<u>List Updated</u>\nUpdated by <i>${res.locals.user?.username}</i>\n${getListMessage(updatedList)}`,
            curateListKeyboard(list),
          );
        }
        res.json(formatList(updatedList));
      }
    }
  }
});

tenthingsListsRoute.post("/", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
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
    if (!updatedList) res.sendStatus(404);
    else if (!list) res.sendStatus(500);
    else {
      if (!req.body.list._id) {
        bot.notifyAdmins(`<u>List Created</u>\n${getListMessage(updatedList)}`, curateListKeyboard(updatedList));
      } else if (previousModifyDate < yesterday) {
        bot.notifyAdmins(
          `<u>List Updated</u>\nUpdated by <i>${res.locals.user?.username}</i>\n${getListMessage(updatedList)}`,
          curateListKeyboard(list),
        );
      }
      res.json(formatList(updatedList));
    }
  }
});

tenthingsListsRoute.delete("/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    const list = await List.findOne({ _id: req.params.id });
    if (list) {
      if (res.locals.isAdmin || res.locals.user?._id === list.creator) {
        await List.findByIdAndRemove({ _id: req.params.id });
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
  }
});

tenthingsListsRoute.post("/:id/values", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    const list = await List.findOne({ _id: req.params.id });
    if (!list) res.sendStatus(404);
    else if (list.values.some(({ value }) => value === req.body.value)) res.sendStatus(400);
    else {
      list.values.push({ ...req.body, creator: res.locals.user!._id });
      await list.save();
      const updatedList = await List.findOne({ _id: req.params.id }).lean({ virtuals: true });
      if (!updatedList) res.sendStatus(500);
      else res.json(updatedList.values.find(({ _id }) => _id.toString() === req.params.valueId));
    }
  }
});

tenthingsListsRoute.put("/:id/values/:valueId", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    const list = await List.findOne({ _id: req.params.id });
    if (!list) res.sendStatus(404);
    else {
      const value = list.values.find(({ _id }) => _id.toString() === req.params.valueId);
      if (!value) res.sendStatus(404);
      else if (value.creator !== res.locals.user?._id && !res.locals.isAdmin) res.sendStatus(401);
      else {
        Object.assign(value, req.body);
        await list.save();
        const updatedList = await List.findOne({ _id: req.params.id }).lean({ virtuals: true });
        if (!updatedList) res.sendStatus(500);
        else res.json(updatedList.values.find(({ _id }) => _id.toString() === req.params.valueId));
      }
    }
  }
});

tenthingsListsRoute.delete("/:id/values/:valueId", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    const list = await List.findOne({ _id: req.params.id });
    if (!list) res.sendStatus(404);
    else {
      const value = list.values.find(({ _id }) => _id.toString() === req.params.valueId);
      if (!value) res.sendStatus(404);
      else if (value.creator !== res.locals.user?._id && !res.locals.isAdmin) res.sendStatus(401);
      else {
        await List.findByIdAndUpdate(req.params.id, { $pull: { values: { _id: req.params.valueId } } }).exec();
        res.sendStatus(200);
      }
    }
  }
});

tenthingsListsRoute.get("/names", (_: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    const listNames = List.find({}).select("_id name");
    res.json(listNames);
  }
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
