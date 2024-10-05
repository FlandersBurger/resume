import moment from "moment";

import bot from "@root/connections/telegram";
import { List } from "@models/index";
import { HydratedDocument, QueryOptions, Types } from "mongoose";
import { IList } from "@models/tenthings/list";
import { IGame, IGameSettings } from "@models/tenthings/game";

import some from "lodash/some";
import sampleSize from "lodash/sampleSize";
import orderBy from "lodash/orderBy";
import uniqBy from "lodash/uniqBy";
import { likeListKeyboard } from "./keyboards";
import i18n from "@root/i18n";
import { parseSymbols } from "@root/utils/string-helpers";

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
  bot.sendKeyboard(
    game.telegramChannel,
    i18n(game.settings.language, "sentences.likeList", { list: parseSymbols(game.list!.name) }),
    likeListKeyboard(game),
  );
};

const getAvailableLanguages = ({ settings }: { settings: IGameSettings }) =>
  settings.languages && settings.languages.length > 0 ? settings.languages : ["EN"];

export const selectList = async (game: IGame): Promise<HydratedDocument<IList>> => {
  const availableLanguages = getAvailableLanguages(game);
  if (game.pickedLists.length > 0) {
    let list = await List.findOne({ _id: game.pickedLists[0] }).populate("creator").exec();
    game.pickedLists.shift();
    if (!list) {
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
      _id: { $nin: game.playedLists.concat(game.bannedLists ?? []) },
      categories: { $nin: game.disabledCategories },
      language: { $in: availableLanguages },
    });
    if (!list) {
      game.playedLists = [];
      game.cycles++;
      game.lastCycleDate = moment().toDate();
      bot.queueMessage(game.telegramChannel, i18n(game.settings.language, "sentences.allListsPlayed"));
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

const sampleLists = async (query: QueryOptions<IList>, sampledLists: IList[]): Promise<IList[]> => {
  let foundLists = await List.find({ ...query, _id: { $nin: sampledLists.map(({ _id }) => _id) } })
    .select("name")
    .lean();
  return [...sampledLists, ...sampleSize(foundLists, 10 - sampledLists.length)];
};

export const searchList = async (search: string, game: IGame): Promise<IList[]> => {
  const availableLanguages = getAvailableLanguages(game);
  let foundLists = await sampleLists(
    {
      categories: { $nin: game.disabledCategories },
      language: { $in: availableLanguages },
      name: { $regex: search, $options: "i" },
    },
    [],
  );
  if (foundLists.length >= 10) return foundLists;
  foundLists = await sampleLists(
    {
      categories: { $nin: game.disabledCategories },
      language: { $in: availableLanguages },
      $text: { $search: `"${search}"` },
    },
    foundLists,
  );
  if (foundLists.length >= 10) return foundLists;
  foundLists = await sampleLists(
    { language: { $in: availableLanguages }, name: { $regex: search, $options: "i" } },
    foundLists,
  );
  if (foundLists.length >= 10) return foundLists;
  foundLists = await sampleLists(
    { language: { $in: availableLanguages }, $text: { $search: `"${search}"` } },
    foundLists,
  );
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

export const getList = async (listId: Types.ObjectId): Promise<IList | undefined> => {
  const list = await List.findOne({ _id: listId })
    .populate("creator", "_id username displayName")
    .populate("values.creator", "_id username displayName")
    .lean({ virtuals: true });
  if (!list) return;
  return list;
};

// ███    ███ ███████ ██████   ██████  ███████     ██      ██ ███████ ████████ ███████
// ████  ████ ██      ██   ██ ██       ██          ██      ██ ██         ██    ██
// ██ ████ ██ █████   ██████  ██   ███ █████       ██      ██ ███████    ██    ███████
// ██  ██  ██ ██      ██   ██ ██    ██ ██          ██      ██      ██    ██         ██
// ██      ██ ███████ ██   ██  ██████  ███████     ███████ ██ ███████    ██    ███████

export const mergeLists = (originalList: IList, mergeList: IList): IList => {
  const valuesToMerge = mergeList.values.filter(
    (value) => !some(originalList.values, (listValue) => listValue.value == value.value),
  );
  const newValues = [
    ...originalList.values.map((originalListValue) => {
      const mergeListValue = mergeList.values.find((valueToMerge) => valueToMerge.value == originalListValue.value);
      return mergeListValue
        ? {
            ...mergeListValue,
            ...originalListValue,
            blurb: originalListValue.blurb || mergeListValue.blurb,
          }
        : originalListValue;
    }),
    ...valuesToMerge,
  ];
  const newVotes = uniqBy(orderBy([...originalList.votes, ...mergeList.votes], ["modifyDate"], ["desc"]), "voter");
  const mergedList = {
    ...originalList,
    description: originalList.description || mergeList.description,
    values: newValues,
    plays: (originalList.plays ?? 0) + (mergeList.plays ?? 0),
    skips: (originalList.skips ?? 0) + (mergeList.skips ?? 0),
    hints: (originalList.hints ?? 0) + (mergeList.hints ?? 0),
    bans: (originalList.bans ?? 0) + (mergeList.bans ?? 0),
    modifyDate: new Date(),
    votes: newVotes,
  };
  return mergedList;
};
