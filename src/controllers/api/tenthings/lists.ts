import { QueryableRequest, Request, Response, Router } from "express";
import { Types, LeanDocument } from "mongoose";
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
import { parseSymbols, removeAllButLetters } from "@utils/string-helpers";
import { getList, getListScore, getRandomList, mergeLists } from "@tenthings/lists";
import { curateListKeyboard } from "@tenthings/providers/telegram/keyboards";
import { every } from "lodash";
import { telegram } from "@tenthings/providers/telegram";

export const tenthingsListsRoute = Router();

const VIRTUAL_SORT_FIELDS = new Set(["likeRatio", "upvotes", "downvotes", "answers", "playRatio"]);

const safeVotes = { $ifNull: ["$votes", []] };
const safeValues = { $ifNull: ["$values", []] };

const VIRTUAL_ADD_FIELDS = {
  answers: { $size: safeValues },
  upvotes: { $size: { $filter: { input: safeVotes, as: "v", cond: { $gt: ["$$v.vote", 0] } } } },
  downvotes: { $size: { $filter: { input: safeVotes, as: "v", cond: { $lt: ["$$v.vote", 0] } } } },
  likeRatio: {
    $let: {
      vars: { votes: safeVotes },
      in: {
        $cond: {
          if: { $eq: [{ $size: "$$votes" }, 0] },
          then: 0,
          else: {
            $divide: [
              { $size: { $filter: { input: "$$votes", as: "v", cond: { $gt: ["$$v.vote", 0] } } } },
              { $size: "$$votes" },
            ],
          },
        },
      },
    },
  },
  playRatio: {
    $cond: {
      if: { $eq: ["$plays", 0] },
      then: 0,
      else: { $divide: [{ $subtract: ["$plays", { $ifNull: ["$skips", 0] }] }, "$plays"] },
    },
  },
};

tenthingsListsRoute.get("/", async (req: QueryableRequest, res: Response) => {
  const authorized = !!res.locals.isAuthorized;
  const page = parseInt(req.query.page ?? 1);
  const limit = parseInt(req.query.limit) || 0;
  const skip = limit * (page - 1) || 0;
  const sortBy = req.query.sort_by ?? "date";
  const sortDir: 1 | -1 = req.query.order_by === "asc" || req.query.order_by === "1" ? 1 : -1;
  const query = parseQuery(req.query);
  const count = await List.countDocuments(query);

  let lists: LeanDocument<IList>[];

  if (VIRTUAL_SORT_FIELDS.has(sortBy)) {
    // Aggregate to sort by computed virtual field, then hydrate with populate
    const sortedIds: { _id: unknown }[] = await List.aggregate([
      { $match: query },
      { $addFields: VIRTUAL_ADD_FIELDS },
      { $sort: { [sortBy]: sortDir } },
      ...(skip ? [{ $skip: skip }] : []),
      ...(limit ? [{ $limit: limit }] : []),
      { $project: { _id: 1 } },
    ]);
    const ids = sortedIds.map((d) => d._id);
    const hydrated = await List.find({ _id: { $in: ids } })
      .populate(authorized ? "creator" : "", authorized ? "_id username displayName" : "")
      .populate(authorized ? "values.creator" : "", authorized ? "_id username displayName" : "")
      .lean({ virtuals: true });
    // Restore aggregation order (find $in does not preserve it)
    const byId = new Map(hydrated.map((h) => [String(h._id), h]));
    lists = ids.map((id) => byId.get(String(id))!).filter(Boolean);
  } else {
    lists = await List.find(query)
      .limit(limit)
      .skip(skip)
      .sort({ [sortBy]: sortDir })
      .populate(authorized ? "creator" : "", authorized ? "_id username displayName" : "")
      .populate(authorized ? "values.creator" : "", authorized ? "_id username displayName" : "")
      .lean({ virtuals: true });
  }

  const result = authorized ? lists : lists.map(({ creator: _c, values: _v, ...rest }) => rest);
  res.json({ result, nextPage: page + 1, count });
});

tenthingsListsRoute.post("/random", async (_: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    const list = await getRandomList({ starred: true });
    if (!list) res.sendStatus(404);
    else res.json(list);
  }
});

tenthingsListsRoute.get("/:id", async (req: Request, res: Response) => {
  const authorized = !!res.locals.isAuthorized;
  if (req.params.id === "names") {
    if (!authorized) return res.sendStatus(401);
    const listNames = await List.find({}).select("_id name").lean();
    return res.json(listNames);
  }
  const list = await getList(new Types.ObjectId(req.params.id));
  if (!list) return res.sendStatus(404);
  else if (!authorized) {
    const { values: _v, creator: _c, ...publicList } = list as any;
    return res.json(publicList);
  } else {
    return res.json(list);
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
      }
      const freshList = await getList(new Types.ObjectId(req.params.id));
      if (freshList) res.json(freshList);
      else res.sendStatus(404);
    } else {
      res.sendStatus(404);
    }
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

tenthingsListsRoute.put("/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    const yesterday = moment().subtract(1, "days");
    const list = await List.findOne({ _id: req.params.id });
    if (!list) res.sendStatus(404);
    else {
      const previousModifyDate = moment(list.modifyDate);
      list.values.filter(({ creator }) => !creator).forEach((value) => (value.creator = list.creator));

      const existingValuesById = new Map(list.values.map((v) => [String(v._id), v]));
      const now = new Date();
      (req.body.values || []).forEach((incoming: IListValue) => {
        const existing = existingValuesById.get(String(incoming._id));
        if (!existing) {
          incoming.date = incoming.date || now.toISOString();
          incoming.modifyDate = now;
        } else if (existing.value !== incoming.value || existing.blurb !== incoming.blurb) {
          incoming.modifyDate = now;
        }
      });

      Object.assign(list, req.body);
      list.modifyDate = now;
      await list.validate();
      await list.save();
      const updatedList = await getList(new Types.ObjectId(req.params.id));
      if (!updatedList) res.sendStatus(404);
      else {
        if (previousModifyDate < yesterday && !res.locals.isAdmin) {
          bot.notifyAdmins(
            `<u>List Updated</u>\nUpdated by <i>${res.locals.user?.username}</i>\n${telegram.listMessage(updatedList)}`,
            curateListKeyboard(list),
          );
        }
        res.json(updatedList);
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
        bot.notifyAdmins(`<u>List Created</u>\n${telegram.listMessage(updatedList)}`, curateListKeyboard(updatedList));
      } else if (previousModifyDate < yesterday && !res.locals.isAdmin) {
        bot.notifyAdmins(
          `<u>List Updated</u>\nUpdated by <i>${res.locals.user?.username}</i>\n${telegram.listMessage(updatedList)}`,
          curateListKeyboard(list),
        );
      }
      res.json(updatedList);
    }
  }
});

tenthingsListsRoute.post("/merge", async (req: Request, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else {
    const lists: Array<IList> = await List.find({ _id: { $in: req.body.lists } })
      .sort({ date: 1 })
      .lean();
    if (!every(lists, (list) => lists[0].language === list.language)) {
      res.sendStatus(400);
      return;
    }
    let mergedList: IList = lists[0];
    for (let i = 1; i < lists.length; i++) {
      mergedList = await mergeLists(mergedList, lists[i]);
    }
    await List.findOneAndUpdate({ _id: mergedList._id }, mergedList, { overwrite: true });
    await List.deleteMany({ _id: { $in: req.body.lists.filter((id: string) => id !== mergedList._id.toString()) } });
    const updatedList = await getList(mergedList._id);
    if (!updatedList) res.sendStatus(500);
    else {
      res.json(updatedList);
      bot.notifyAdmins(
        `<u>Lists Merged</u>\nUpdated by <i>${res.locals.user?.username}</i>\n${lists.reduce((result, list) => `${result} - ${parseSymbols(list.name)}\n`, "")}<b>→</b> ${telegram.listMessage(updatedList)}`,
        curateListKeyboard(updatedList),
      );
    }
  }
});

tenthingsListsRoute.delete("/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    const list = await List.findOne({ _id: req.params.id });
    if (list) {
      if (res.locals.isAdmin || res.locals.user?._id.equals(list.creator.toString())) {
        await List.findByIdAndDelete({ _id: req.params.id });
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
      const now = new Date();
      list.values.push({ ...req.body, creator: res.locals.user!._id, date: now.toISOString(), modifyDate: now });
      list.modifyDate = new Date();
      await list.save();
      const updatedList = await List.findOne({ _id: req.params.id }).lean({ virtuals: true });
      if (!updatedList) res.sendStatus(500);
      else {
        if (moment(list.modifyDate).diff(list.date, "days") > 1) {
          bot.notifyAdmins(`<u>Value added to "${updatedList.name}"</u>\n<b>${req.body.value}</b>`);
        }
        res.json(updatedList.values[updatedList.values.length - 1]);
      }
    }
  }
});

tenthingsListsRoute.put("/:id/values/:valueId", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else {
    const list = await List.findOne({ _id: req.params.id });
    if (!list) res.sendStatus(404);
    else {
      const value = list.values.find(({ _id }) => _id!.toString() === req.params.valueId);
      if (!value) res.sendStatus(404);
      else if (value.creator !== res.locals.user?._id && !res.locals.isAdmin) res.sendStatus(401);
      else {
        if (moment(list.modifyDate).diff(list.date, "days") > 1) {
          bot.notifyAdmins(`<u>Value changed in "${list.name}"</u>\n<b>${value.value}</b> -> <b>${req.body.value}</b>`);
        }
        Object.assign(value, req.body);
        value.modifyDate = new Date();
        list.modifyDate = new Date();
        await list.save();
        const updatedList = await List.findOne({ _id: req.params.id }).lean({ virtuals: true });
        if (!updatedList) res.sendStatus(500);
        else res.json(updatedList.values.find(({ _id }) => _id!.toString() === req.params.valueId));
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
      const value = list.values.find(({ _id }) => _id!.toString() === req.params.valueId);
      if (!value) res.sendStatus(404);
      else if (value.creator !== res.locals.user?._id && !res.locals.isAdmin) res.sendStatus(401);
      else {
        await List.findByIdAndUpdate(req.params.id, { $pull: { values: { _id: req.params.valueId } } }).exec();
        res.sendStatus(200);
      }
    }
  }
});

const parseQuery = (query: { [key: string]: string }) => {
  return Object.keys(query).reduce((params, key) => {
    switch (key) {
      case "search":
        if (query[key]) {
          Object.assign(params, {
            $or: [{ $text: { $search: `"${query[key]}"` } }, { name: { $regex: query[key], $options: "i" } }],
          });
        }
        break;
      case "name":
        Object.assign(params, { name: { $regex: query[key], $options: "i" } });
        break;
      case "creator":
        Object.assign(params, { creator: query[key] });
        break;
      case "categories":
      case "language":
        const values = query[key].split(",");
        Object.assign(params, { [key]: { $in: values } });
        break;
      case "!categories":
      case "!language":
        const notValues = query[key].split(",");
        Object.assign(params, { [key.replace("!", "")]: { $nin: notValues } });
        break;
      default:
        break;
    }
    return params;
  }, {});
};
