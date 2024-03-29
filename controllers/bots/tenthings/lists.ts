import moment from "moment";

import bot from "../../../connections/telegram";
import { List } from "../../../models";
import { HydratedDocument, QueryOptions, Types } from "mongoose";
import { IList } from "../../../models/tenthings/list";
import { IGame, IGameSettings } from "../../../models/tenthings/game";

import some from "lodash/some";
import { likeListKeyboard } from "./keyboards";

export const getRandomList = async (parameters: QueryOptions = {}): Promise<HydratedDocument<IList> | undefined> => {
  const count = await List.countDocuments(parameters).exec();
  if (count === 0) return;
  const lists = await List.find(parameters)
    .select("-votes")
    .populate("creator")
    .populate("values.creator")
    .limit(1)
    .skip(Math.floor(Math.random() * count))
    .exec();
  return lists[0];
};

export const getListScore = (list: IList): number => {
  //((upvotes / (upvotes + downvotes)) + (skips / plays)) / 2
  //(upvote ratio in regards to total votes + skip ratio in regards to plays) / 2
  if (list.votes && list.plays) {
    const upvotes = list.votes.filter((vote) => vote.vote > 0);
    const voteRatio = list.votes.length > 0 ? upvotes.length / list.votes.length : 0;
    const score = (voteRatio + (list.plays - (list.skips ?? 0)) / list.plays) / 2;
    return score ? score : 0;
  }
  return 0;
};

export const rateList = (game: IGame) => {
  bot.sendKeyboard(game.chat_id, `Did you like <b>${game.list!.name}</b>?`, likeListKeyboard(game));
};

const getAvailableLanguages = ({ settings }: { settings: IGameSettings }) =>
  settings.languages && settings.languages.length > 0 ? settings.languages : ["EN"];

export const selectList = async (game: IGame): Promise<HydratedDocument<IList>> => {
  const availableLanguages = getAvailableLanguages(game);
  if (game.pickedLists.length > 0) {
    let list = await List.findOne({
      _id: game.pickedLists[0],
    })
      .populate("creator")
      .exec();
    if (!list) {
      game.pickedLists.shift();
      console.log(`Moving to next picked list`);
      return await selectList(game);
    } else {
      if (!some(game.playedLists, (playedListId: Types.ObjectId) => playedListId == list!._id)) {
        game.playedLists.push(list._id);
      }
      return list;
    }
  } else {
    let list = await getRandomList({
      _id: { $nin: game.playedLists.concat(game.bannedLists) },
      categories: { $nin: game.disabledCategories },
      language: { $in: availableLanguages },
    });
    if (!list) {
      game.playedLists = [];
      game.cycles++;
      game.lastCycleDate = moment().toDate();
      bot.queueMessage(game.chat_id, "All lists have been played, a new cycle will now start.");
      list = await getRandomList({
        _id: { $nin: game.bannedLists },
        categories: { $nin: game.disabledCategories },
        language: { $in: availableLanguages },
      });
      if (!list) {
        list = await getRandomList({
          _id: { $nin: game.bannedLists },
          categories: { $nin: game.disabledCategories },
          language: "EN",
        });
      }
    }
    return list!;
  }
};

export const searchList = async (search: string, game: IGame): Promise<IList[]> => {
  const availableLanguages = getAvailableLanguages(game);
  const regex = search
    .replace(new RegExp("[^a-zA-Z0-9 ]+", "g"), ".*")
    .split(" ")
    .reduce((result, word) => `${result}(?=.*${word}.*)`, "");
  let foundLists = await List.find({
    categories: { $nin: game.disabledCategories },
    language: { $in: availableLanguages },
    name: {
      $regex: `.*${regex}.*`,
      $options: "i",
    },
  })
    .select("name")
    .lean();

  if (foundLists.length < 10) {
    const count = await List.countDocuments({
      categories: { $nin: game.disabledCategories },
      language: { $in: availableLanguages },
      "values.value": {
        $regex: `.*${regex}.*`,
        $options: "i",
      },
    });
    const valueLists = await List.find({
      categories: { $nin: game.disabledCategories },
      language: { $in: availableLanguages },
      "values.value": {
        $regex: `.*${regex}.*`,
        $options: "i",
      },
    })
      .select("name")
      .skip(count > 10 ? Math.floor(Math.random() * (count - 10)) : 0)
      .limit(10 - foundLists.length)
      .lean();
    foundLists.push(...valueLists);
  }
  if (foundLists.length < 10) {
    const count = await List.countDocuments({
      language: { $in: availableLanguages },
      categories: {
        $regex: `.*${regex}.*`,
        $options: "i",
      },
    });
    const categoryLists = await List.find({
      language: { $in: availableLanguages },
      categories: {
        $regex: `.*${regex}.*`,
        $options: "i",
      },
    })
      .select("name")
      .skip(count > 10 ? Math.floor(Math.random() * (count - 10)) : 0)
      .limit(10 - foundLists.length)
      .lean();
    foundLists.push(...categoryLists);
  }
  return foundLists;
};

/*
const curateList = async () => {
	const list = await lists.getRandomList();
	let msg = listInfo(list);
	msg += ` - Values: ${list.values.length}\n`;
	msg += ` - Plays: ${list.plays}\n`;
	msg += ` - Skips: ${list.skips}\n`;
	msg += ` - Hints: ${list.hints}\n\n`;
	msg += `Rate Difficulty and Update Frequency`;
	bot.notifyAdmins(msg, keyboards.curate(list));
};
curateList();
*/

export const logHint = async (listId: Types.ObjectId) => {
  let list = await List.findOne({ _id: listId }).select("_id name hints").exec();
  if (list) {
    if (!list.hints) {
      list.hints = 0;
    }
    list.hints++;
    try {
      await list.validate();
      await list.save();
    } catch (err) {
      return bot.notifyAdmin(`Hint List Error:\n${list.name}`);
    }
  }
};
