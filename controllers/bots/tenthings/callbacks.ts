import { HydratedDocument, Types } from "mongoose";
import { Game, List } from "../../../models";
import { IGame, IGameSettings } from "../../../models/tenthings/game";
import { IList, IVote } from "../../../models/tenthings/list";
import { capitalize } from "../../../utils/string-helpers";
import { makePercentage } from "../../../utils/number-helpers";
import find from "lodash/find";

import moment from "moment";
import { getDifficultyMessage, getFrequencyMessage, getListMessage } from "./messages";
import { getListScore } from "./lists";

const config = require("../../../config");
const bot = require("../../../connections/telegram");
import i18n from "../../../i18n";

import keyboards from "./keyboards";
import categories from "./categories";
import emojis from "./emojis";
import { initiateBan, processBan } from "./bans";
import { getScores, getStats } from "./stats";
import { votersCache } from "./cache";

export interface ICallbackData {
  type: string;
  date: Date;
  requestor: string;
  from_id: string;
  chat_id: string;
  message_id: string;
  callback_query_id: string;
  message: string;

  vote?: number;
  list?: string;
  data?: string;
  id?: string;
}

export default async (data: ICallbackData) => {
  let game: HydratedDocument<IGame> | null;
  let list: HydratedDocument<IList> | null;
  switch (data.type) {
    case "rate":
      let doVote = false;
      if (votersCache[data.from_id]) {
        if (votersCache[data.from_id].lastVoted < moment().subtract(votersCache[data.from_id].delay, "seconds")) {
          doVote = true;
          delete votersCache[data.from_id];
        }
      } else {
        votersCache[data.from_id] = { lastVoted: moment(), delay: 10 };
        doVote = true;
      }
      if (doVote) {
        const foundList: HydratedDocument<IList> | null = await List.findOne({ _id: data.list })
          .select("name votes modifyDate score skips plays")
          .exec();
        if (!foundList) {
          return bot.answerCallback(data.callback_query_id, "Can't find list 😱");
        }
        let voter = find(foundList.votes, (vote: IVote) => vote.voter == data.from_id);
        if (!voter) {
          foundList.votes.push({ voter: data.from_id, vote: data.vote!, date: new Date(), modifyDate: new Date() });
          voter = foundList.votes[foundList.votes.length - 1];
        } else {
          voter.vote = data.vote!;
          voter.modifyDate = new Date();
        }
        foundList.score = getListScore(foundList);
        delete foundList.voters;
        await foundList.save();
        bot.answerCallback(data.callback_query_id, data.vote! > 0 ? emojis.thumbsUp : emojis.thumbsDown);
        //bot.notifyAdmin(`"<b>${foundList.name}</b>" ${data.vote > 0 ? 'up' : 'down'}voted by <i>${body.callback_query.from.first_name}</i>!`);
        if (moment(data.date) > moment().subtract(1, "days")) {
          game = await Game.findOne({ chat_id: data.chat_id }).select("settings").exec();
          if (!game) return;
          bot.queueMessage(
            data.chat_id,
            i18n(game.settings.language, `sentences.${data.vote! > 0 ? "" : "dis"}likesList`, {
              name: data.requestor,
              list: foundList.name,
              score: makePercentage(foundList.score),
            })
          );
        }
      }
      break;
    case "stats":
      if (await bot.checkAdmin(data.chat_id, data.from_id)) {
        game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id list settings").exec();
        if (!game) return;
        const text = i18n(game.settings.language, `stats.${data.data}`);
        switch (data.data) {
          case "list":
            bot.answerCallback(data.callback_query_id, text);
            bot.sendKeyboard(game.chat_id, `<b>${text}</b>`, keyboards.stats_list(game));
            break;
          case "player":
            bot.answerCallback(data.callback_query_id, text);
            bot.sendKeyboard(game.chat_id, `<b>${text}</b>`, keyboards.stats_player());
            break;
          case "global":
            bot.answerCallback(data.callback_query_id, text);
            bot.queueMessage(game.chat_id, "Coming Soon");
            break;
          case "game":
            bot.answerCallback(data.callback_query_id, text);
            bot.queueMessage(game.chat_id, "Coming Soon");
            break;
        }
      }
      break;
    case "stat":
      bot.answerCallback(data.callback_query_id, "");
      getStats(data.chat_id, data as { id: string }, data.from_id);
      break;
    case "score":
      if (data.requestor === "^") return "";
      bot.answerCallback(data.callback_query_id, "Score");
      getScores(data.chat_id, data.id!);
      break;
    case "cat":
      if (data.chat_id != config.groupChat) {
        if (await bot.checkAdmin(data.chat_id, data.from_id)) {
          game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id disabledCategories settings").exec();
          if (!game || !data.id) return;
          const categoryIndex = game.disabledCategories.indexOf(data.id);
          if (categoryIndex >= 0) {
            game.disabledCategories.splice(categoryIndex, 1);
          } else {
            if (game.disabledCategories.length === categories.length - 1) {
              return bot.queueMessage(data.chat_id, i18n(game.settings.language, "warnings.minimum1Category"));
            }
            game.disabledCategories.push(data.id!);
          }
          await game.save();
          bot.answerCallback(
            data.callback_query_id,
            `${data.id} -> ${
              categoryIndex >= 0 ? i18n(game.settings.language, "on") : i18n(game.settings.language, "off")
            }`
          );
          bot.editKeyboard(data.chat_id, data.message_id, keyboards.categories(game));
        } else {
          game = await Game.findOne({ chat_id: data.chat_id }).select("settings").exec();
          if (!game) return;
          bot.queueMessage(
            data.chat_id,
            i18n(game.settings.language, "warnings.adminFunction", { name: data.requestor })
          );
        }
      }
      break;
    case "setting":
      if (data.chat_id != config.masterChat) {
        if (await bot.checkAdmin(data.chat_id, data.from_id)) {
          game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id settings").exec();
          if (!game || !data.id) return;
          if (data.id === "langs") {
            const availableLanguages = await List.aggregate([
              { $group: { _id: "$language", count: { $sum: 1 } } },
            ]).exec();
            bot.editKeyboard(data.chat_id, data.message_id, keyboards.languages(game, availableLanguages));
          } else if (data.id === "lang") {
            const availableLanguages = await List.aggregate([
              { $group: { _id: "$language", count: { $sum: 1 } } },
            ]).exec();
            bot.editKeyboard(data.chat_id, data.message_id, keyboards.language(game, availableLanguages));
          } else {
            console.log(`${data.id} toggled for ${game._id}`);
            game.settings[data.id] = !game.settings[data.id as keyof IGameSettings];
            await game.save();
            bot.answerCallback(
              data.callback_query_id,
              `${data.id} -> ${
                game.settings[data.id] ? i18n(game.settings.language, "on") : i18n(game.settings.language, "off")
              }`
            );
            bot.editKeyboard(data.chat_id, data.message_id, keyboards.settings(game));
          }
        } else {
          game = await Game.findOne({ chat_id: data.chat_id }).select("settings").exec();
          if (!game) return;
          bot.queueMessage(
            data.chat_id,
            i18n(game.settings.language, "warnings.adminFunction", { name: data.requestor })
          );
        }
      }
      break;
    case "langs":
      if (await bot.checkAdmin(data.chat_id, data.from_id)) {
        game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id settings").exec();
        if (!game || !data.id) return;
        const isSelected = game.settings.languages.includes(data.id);
        if (isSelected) {
          game.settings.languages = game.settings.languages.filter((language) => language !== data.id);
        } else {
          game.settings.languages.push(data.id);
        }
        if (!game.settings.languages || game.settings.languages.length === 0) {
          game.settings.languages = ["EN"];
        }
        game.save();
        bot.answerCallback(
          data.callback_query_id,
          `${data.id} -> ${isSelected ? i18n(game.settings.language, "off") : i18n(game.settings.language, "on")}`
        );
        const availableLanguages = await List.aggregate([{ $group: { _id: "$language", count: { $sum: 1 } } }]).exec();
        bot.editKeyboard(data.chat_id, data.message_id, keyboards.languages(game, availableLanguages));
      }
      break;
    case "lang":
      if (await bot.checkAdmin(data.chat_id, data.from_id)) {
        game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id settings").exec();
        if (!game || !data.id) return;
        game.settings.language = data.id;
        await game.save();
        bot.answerCallback(data.callback_query_id, `${data.id} -> New bot language`);
        bot.setCommands(data.chat_id, data.id);
        const availableLanguages = await List.aggregate([{ $group: { _id: "$language", count: { $sum: 1 } } }]).exec();
        bot.editKeyboard(data.chat_id, data.message_id, keyboards.language(game, availableLanguages));
      }
      break;
    case "pick":
      if (data.chat_id === config.adminChat) {
        const list: HydratedDocument<IList> | null = await List.findOne({ _id: data.list }).populate("creator").exec();
        if (!list) return;
        let msg = getListMessage(list);
        msg += ` - Created: ${moment(list.date).format("DD-MMM-YYYY")}\n`;
        msg += ` - Modified: ${moment(list.modifyDate).format("DD-MMM-YYYY")}\n`;
        msg += ` - Score: ${makePercentage(list.score)}\n`;
        msg += ` - Values: ${list.values.length}\n`;
        msg += ` - Plays: ${list.plays}\n`;
        msg += ` - Skips: ${list.skips}\n`;
        msg += ` - Hints: ${list.hints}\n\n`;
        msg += `Rate Difficulty and Update Frequency`;
        bot.notifyAdmins(msg, keyboards.curate(list));
      } else {
        game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id pickedLists").exec();
        if (!game) return;
        if (game.pickedLists.length >= 10)
          return bot.queueMessage(
            data.chat_id,
            i18n(game.settings.language, "warnings.fullQueue", { name: data.requestor })
          );
        const list = await List.findOne({ _id: data.list }).exec();
        if (!list) return bot.queueMessage(data.chat_id, i18n(game.settings.language, "warnings.unfoundList"));
        const foundList = find(game.pickedLists, (pickedListId: Types.ObjectId) => pickedListId == list._id);
        if (foundList) {
          bot.queueMessage(
            data.chat_id,
            i18n(game.settings.language, "warnings.alreadyInQueue", {
              list: list.name,
              name: data.requestor,
            })
          );
        } else {
          game.pickedLists.push(list._id);
          game.save();
          bot.answerCallback(
            data.callback_query_id,
            i18n(game.settings.language, "sentences.addedList", {
              list: list.name,
            })
          );
          bot.queueMessage(
            data.chat_id,
            i18n(game.settings.language, "sentences.addedListToQueue", {
              list: list.name,
              name: data.requestor,
            })
          );
        }
      }
      break;
    case "ban":
      game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id bannedLists settings").exec();
      if (!game) return;
      initiateBan(game, data);
      bot.answerCallback(data.callback_query_id, "");
      break;
    case "c_ban":
      game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id bannedLists settings").exec();
      if (!game) return;
      if (!game) return;
      processBan(game, data);
      bot.answerCallback(data.callback_query_id, "");
      break;
    case "suggest":
      game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id list settings").exec();
      if (!game) return;
      const suggestion = data.message.substring(data.message.indexOf(' "') + 2, data.message.indexOf('",'));

      let message = `<b>${capitalize(data.id as string)}</b>\n${suggestion}\n<i>By ${data.requestor}</i>`;
      message += data.id === "typo" ? `\nList: ${game.list.name}` : "";
      bot.notify(message);
      bot.notifyAdmins(message);
      message += data.id === "list" ? `\n${i18n(game.settings.language, "sentences.addOwnList")}}` : "";
      bot.answerCallback(data.callback_query_id, i18n(game.settings.language, "sentences.suggestionNoted"));
      bot.deleteMessage(data.chat_id, data.message_id);
      bot.queueMessage(data.chat_id, message);
      break;
    case "values":
      List.findOne({ _id: data.list }).exec((err, list) => {
        if (!list) {
          bot.queueMessage(data.chat_id, "List not found");
        } else {
          bot.queueMessage(
            data.chat_id,
            list.values
              .sort((a, b) => (a.value < b.value ? -1 : 1))
              .reduce((message, item) => `${message}- ${item.value}\n`, `<b>${list.name}</b>\n`)
          );
        }
      });
      break;
    case "desc":
      game = await Game.findOne({ chat_id: data.chat_id }).select("settings").exec();
      if (!game) return;
      list = await List.findOne({ _id: data.list }).exec();
      if (!list) return;
      bot.queueMessage(
        data.chat_id,
        `<b>${list.name}</b>\n${i18n(game.settings.language, "description")}:\n<i>${list.description || "N/A"}</i>`
      );
      break;
    case "diff":
      await List.findOneAndUpdate({ _id: data.list }, { difficulty: data.vote });
      bot.answerCallback(data.callback_query_id, `List is ${getDifficultyMessage(data.vote!)}`);
      list = await List.findOne({ _id: data.list }).exec();
      if (!list) return;
      bot.editKeyboard(data.chat_id, data.message_id, keyboards.curate(list));
      break;
    case "freq":
      await List.findOneAndUpdate({ _id: data.list }, { frequency: data.vote });
      bot.answerCallback(data.callback_query_id, `${capitalize(getFrequencyMessage(data.vote!))} changes`);
      list = await List.findOne({ _id: data.list }).exec();
      if (!list) return;
      bot.editKeyboard(data.chat_id, data.message_id, keyboards.curate(list));
      break;
  }
};
