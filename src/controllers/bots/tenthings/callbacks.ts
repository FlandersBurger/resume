import { HydratedDocument, Types } from "mongoose";
import { Game, List } from "@models/index";
import { IGame, IGameSettings } from "@models/tenthings/game";
import { IList, IVote } from "@models/tenthings/list";
import { angleBrackets, capitalize } from "@root/utils/string-helpers";
import { makePercentage } from "@root/utils/number-helpers";
import find from "lodash/find";

import moment from "moment";
import { getDifficultyMessage, getFrequencyMessage, getListMessage } from "./messages";
import { getListScore } from "./lists";

import i18n from "@root/i18n";

import categories from "./categories";
import emojis from "./emojis";
import { initiateBan, processBan } from "./bans";
import { getScores, getStats } from "./stats";
import { votersCache } from "./cache";
import {
  categoriesKeyboard,
  curateListKeyboard,
  languageKeyboard,
  languagesKeyboard,
  listStatsKeyboard,
  playerStatsKeyboard,
  settingsKeyboard,
} from "./keyboards";
import bot, { ITelegramUser } from "@root/connections/telegram";

export interface ICallbackData {
  id: string;
  type: string;
  date: Date;
  from: ITelegramUser;
  chatId: number;
  callbackQueryId: string;
  text: string;
  data: string;
}

export enum CallbackDataType {
  Ban = "ban",
  BotLanguage = "lang",
  Category = "cat",
  ConfirmBan = "cban",
  Description = "desc",
  Difficulty = "diff",
  Frequency = "freq",
  Pick = "pick",
  Score = "score",
  Setting = "setting",
  Stats = "stat",
  StatOptions = "stats",
  Suggestion = "suggest",
  TriviaLanguages = "langs",
  Values = "values",
  Vote = "vote",
}

export default async (callbackQuery: ICallbackData) => {
  let game: HydratedDocument<IGame> | null;
  let list: HydratedDocument<IList> | null;
  switch (callbackQuery.type) {
    case CallbackDataType.Vote:
      let doVote = false;
      if (votersCache[callbackQuery.from.id]) {
        if (
          votersCache[callbackQuery.from.id].lastVoted <
          moment().subtract(votersCache[callbackQuery.from.id].delay, "seconds")
        ) {
          doVote = true;
          delete votersCache[callbackQuery.from.id];
        }
      } else {
        votersCache[callbackQuery.from.id] = { lastVoted: moment(), delay: 10 };
        doVote = true;
      }
      if (doVote) {
        const [voteString, listId] = callbackQuery.data.split("_");
        const vote = parseInt(voteString);
        const foundList: HydratedDocument<IList> | null = await List.findOne({ _id: listId })
          .select("name votes modifyDate score skips plays")
          .exec();
        if (!foundList) {
          return bot.answerCallback(callbackQuery.callbackQueryId, "Can't find list 😱");
        }
        let voter = find(foundList.votes, (vote: IVote) => vote.voter == callbackQuery.from.id);
        if (!voter) {
          foundList.votes.push({ voter: callbackQuery.from.id, vote, date: new Date(), modifyDate: new Date() });
          voter = foundList.votes[foundList.votes.length - 1];
        } else {
          voter.vote = vote;
          voter.modifyDate = new Date();
        }
        foundList.score = getListScore(foundList);
        delete foundList.voters;
        await foundList.save();
        bot.answerCallback(callbackQuery.callbackQueryId, vote > 0 ? emojis.thumbsUp : emojis.thumbsDown);
        //bot.notifyAdmin(`"<b>${foundList.name}</b>" ${data.vote > 0 ? 'up' : 'down'}voted by <i>${body.callback_query.from.first_name}</i>!`);
        if (moment(callbackQuery.date) > moment().subtract(1, "days")) {
          game = await Game.findOne({ chat_id: callbackQuery.chatId }).select("settings").exec();
          if (!game) return;
          bot.queueMessage(
            callbackQuery.chatId,
            i18n(game.settings.language, `sentences.${vote > 0 ? "" : "dis"}likesList`, {
              name: callbackQuery.from.name,
              list: foundList.name,
              score: makePercentage(foundList.score),
            }),
          );
        }
      }
      break;
    case CallbackDataType.StatOptions:
      console.log(callbackQuery);
      if (await bot.checkAdmin(callbackQuery.chatId, callbackQuery.from.id)) {
        game = await Game.findOne({ chat_id: callbackQuery.chatId }).select("chat_id list settings").exec();
        if (!game) return;
        const text = i18n(game.settings.language, `stats.${callbackQuery.data}`);
        switch (callbackQuery.data) {
          case "list":
            bot.answerCallback(callbackQuery.callbackQueryId, text);
            bot.sendKeyboard(game.chat_id, `<b>${text}</b>`, listStatsKeyboard(game));
            break;
          case "player":
            bot.answerCallback(callbackQuery.callbackQueryId, text);
            bot.sendKeyboard(game.chat_id, `<b>${text}</b>`, playerStatsKeyboard());
            break;
          case "global":
            bot.answerCallback(callbackQuery.callbackQueryId, text);
            getStats(game.chat_id, "global", callbackQuery.from.name);
            break;
          case "game":
            bot.answerCallback(callbackQuery.callbackQueryId, text);
            getStats(game.chat_id, "g", callbackQuery.from.name);
            break;
        }
      }
      break;
    case CallbackDataType.Stats:
      bot.answerCallback(callbackQuery.callbackQueryId, "");
      getStats(callbackQuery.chatId, callbackQuery.data, callbackQuery.from.name);
      break;
    case CallbackDataType.Score:
      if (callbackQuery.from.name === "^") return "";
      bot.answerCallback(callbackQuery.callbackQueryId, "Score");
      getScores(callbackQuery.chatId, callbackQuery.data);
      break;
    case CallbackDataType.Category:
      if (callbackQuery.chatId != parseInt(process.env.GROUP_CHAT || "")) {
        if (await bot.checkAdmin(callbackQuery.chatId, callbackQuery.from.id)) {
          game = await Game.findOne({ chat_id: callbackQuery.chatId })
            .select("chat_id disabledCategories settings")
            .exec();
          if (!game || !callbackQuery.data) return;
          const categoryIndex = game.disabledCategories.indexOf(callbackQuery.data);
          if (categoryIndex >= 0) {
            game.disabledCategories.splice(categoryIndex, 1);
          } else {
            if (game.disabledCategories.length === categories.length - 1) {
              return bot.queueMessage(callbackQuery.chatId, i18n(game.settings.language, "warnings.minimum1Category"));
            }
            game.disabledCategories.push(callbackQuery.data);
          }
          await game.save();
          bot.answerCallback(
            callbackQuery.callbackQueryId,
            `${callbackQuery.data} -> ${
              categoryIndex >= 0 ? i18n(game.settings.language, "on") : i18n(game.settings.language, "off")
            }`,
          );
          bot.editKeyboard(callbackQuery.chatId, callbackQuery.id, categoriesKeyboard(game));
        } else {
          game = await Game.findOne({ chat_id: callbackQuery.chatId }).select("settings").exec();
          if (!game) return;
          bot.queueMessage(
            callbackQuery.chatId,
            i18n(game.settings.language, "warnings.adminFunction", { name: callbackQuery.from.name }),
          );
        }
      }
      break;
    case CallbackDataType.Setting:
      if (callbackQuery.chatId !== parseInt(process.env.ADMIN_CHAT || "")) {
        if (await bot.checkAdmin(callbackQuery.chatId, callbackQuery.from.id)) {
          game = await Game.findOne({ chat_id: callbackQuery.chatId })
            .select("chat_id settings disabledCategories")
            .exec();
          if (!game || !callbackQuery.data) return;
          if (callbackQuery.data === "langs") {
            const availableLanguages = await List.aggregate([
              { $group: { _id: "$language", count: { $sum: 1 } } },
            ]).exec();
            bot.editKeyboard(callbackQuery.chatId, callbackQuery.id, languagesKeyboard(game, availableLanguages));
          } else if (callbackQuery.data === "lang") {
            bot.editKeyboard(callbackQuery.chatId, callbackQuery.id, languageKeyboard(game));
          } else if (callbackQuery.data === "cats") {
            bot.editKeyboard(callbackQuery.chatId, callbackQuery.id, categoriesKeyboard(game));
          } else if (callbackQuery.data === "settings") {
            bot.editKeyboard(callbackQuery.chatId, callbackQuery.id, settingsKeyboard(game));
          } else {
            console.log(`${callbackQuery.data} toggled for ${game._id}`);
            game.settings[callbackQuery.data] = !game.settings[callbackQuery.data as keyof IGameSettings];
            await game.save();
            bot.answerCallback(
              callbackQuery.callbackQueryId,
              `${callbackQuery.data} -> ${
                game.settings[callbackQuery.data]
                  ? i18n(game.settings.language, "on")
                  : i18n(game.settings.language, "off")
              }`,
            );
            bot.editKeyboard(callbackQuery.chatId, callbackQuery.id, settingsKeyboard(game));
          }
        } else {
          game = await Game.findOne({ chat_id: callbackQuery.chatId }).select("settings").exec();
          if (!game) return;
          bot.queueMessage(
            callbackQuery.chatId,
            i18n(game.settings.language, "warnings.adminFunction", { name: callbackQuery.from.name }),
          );
        }
      }
      break;
    case CallbackDataType.TriviaLanguages:
      if (await bot.checkAdmin(callbackQuery.chatId, callbackQuery.from.id)) {
        game = await Game.findOne({ chat_id: callbackQuery.chatId }).select("chat_id settings").exec();
        if (!game || !callbackQuery.data) return;
        const isSelected = game.settings.languages.includes(callbackQuery.data);
        if (isSelected) {
          game.settings.languages = game.settings.languages.filter((language) => language !== callbackQuery.data);
        } else {
          game.settings.languages.push(callbackQuery.data);
        }
        if (!game.settings.languages || game.settings.languages.length === 0) {
          game.settings.languages = ["EN"];
        }
        game.save();
        bot.answerCallback(
          callbackQuery.callbackQueryId,
          `${callbackQuery.data} -> ${
            isSelected ? i18n(game.settings.language, "off") : i18n(game.settings.language, "on")
          }`,
        );
        const availableLanguages = await List.aggregate([{ $group: { _id: "$language", count: { $sum: 1 } } }]).exec();
        bot.editKeyboard(callbackQuery.chatId, callbackQuery.id, languagesKeyboard(game, availableLanguages));
      }
      break;
    case CallbackDataType.BotLanguage:
      if (await bot.checkAdmin(callbackQuery.chatId, callbackQuery.from.id)) {
        game = await Game.findOne({ chat_id: callbackQuery.chatId }).select("chat_id settings").exec();
        if (!game || !callbackQuery.data) return;
        game.settings.language = callbackQuery.data;
        await game.save();
        bot.answerCallback(callbackQuery.callbackQueryId, `${callbackQuery.data} -> New bot language`);
        bot.setCommands(callbackQuery.chatId, callbackQuery.data);
        bot.editKeyboard(callbackQuery.chatId, callbackQuery.id, languageKeyboard(game));
      }
      break;
    case CallbackDataType.Pick:
      if (callbackQuery.chatId === parseInt(process.env.ADMIN_CHAT || "")) {
        const list: HydratedDocument<IList> | null = await List.findOne({ _id: callbackQuery.data })
          .populate("creator")
          .exec();
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
        bot.notifyAdmins(msg, curateListKeyboard(list));
      } else {
        game = await Game.findOne({ chat_id: callbackQuery.chatId }).select("chat_id pickedLists").exec();
        if (!game) return;
        if (game.pickedLists.length >= 10)
          return bot.queueMessage(
            callbackQuery.chatId,
            i18n(game.settings.language, "warnings.fullQueue", { name: callbackQuery.from.name }),
          );
        const list = await List.findOne({ _id: callbackQuery.data }).exec();
        if (!list) return bot.queueMessage(callbackQuery.chatId, i18n(game.settings.language, "warnings.unfoundList"));
        const foundList = find(game.pickedLists, (pickedListId: Types.ObjectId) => pickedListId == list._id);
        if (foundList) {
          bot.queueMessage(
            callbackQuery.chatId,
            i18n(game.settings.language, "warnings.alreadyInQueue", {
              list: list.name,
              name: callbackQuery.from.name,
            }),
          );
        } else {
          game.pickedLists.push(list._id);
          game.save();
          bot.answerCallback(
            callbackQuery.callbackQueryId,
            i18n(game.settings.language, "sentences.addedList", {
              list: list.name,
            }),
          );
          bot.queueMessage(
            callbackQuery.chatId,
            i18n(game.settings.language, "sentences.addedListToQueue", {
              list: list.name,
              name: callbackQuery.from.name,
            }),
          );
        }
      }
      break;
    case CallbackDataType.Ban:
      game = await Game.findOne({ chat_id: callbackQuery.chatId }).select("chat_id bannedLists settings").exec();
      if (!game) return;
      initiateBan(game, callbackQuery);
      bot.answerCallback(callbackQuery.callbackQueryId, "");
      break;
    case CallbackDataType.ConfirmBan:
      game = await Game.findOne({ chat_id: callbackQuery.chatId }).select("chat_id bannedLists settings").exec();
      if (!game) return;
      if (!game) return;
      processBan(game, callbackQuery);
      bot.answerCallback(callbackQuery.callbackQueryId, "");
      break;
    case CallbackDataType.Values:
      List.findOne({ _id: callbackQuery.data }).exec((_, list) => {
        if (!list) {
          bot.queueMessage(callbackQuery.chatId, "List not found");
        } else {
          bot.queueMessage(
            callbackQuery.chatId,
            list.values
              .sort((a, b) => (a.value < b.value ? -1 : 1))
              .reduce((message, item) => `${message}- ${item.value}\n`, `<b>${list.name}</b>\n`),
          );
        }
      });
      break;
    case CallbackDataType.Description:
      game = await Game.findOne({ chat_id: callbackQuery.chatId }).select("settings").exec();
      if (!game) return;
      list = await List.findOne({ _id: callbackQuery.data }).exec();
      if (!list) return;
      bot.queueMessage(
        callbackQuery.chatId,
        `<b>${list.name}</b>\n${i18n(game.settings.language, "description")}:\n<i>${list.description || "N/A"}</i>`,
      );
      break;
    case CallbackDataType.Difficulty:
      const [difficultyString, difficultyListId] = callbackQuery.data.split("_");
      const difficulty = parseInt(difficultyString);
      await List.findOneAndUpdate({ _id: difficultyListId }, { difficulty });
      bot.answerCallback(callbackQuery.callbackQueryId, `List is ${getDifficultyMessage(difficulty)}`);
      list = await List.findOne({ _id: difficultyListId }).exec();
      if (!list) return;
      bot.editKeyboard(callbackQuery.chatId, callbackQuery.id, curateListKeyboard(list));
      break;
    case CallbackDataType.Frequency:
      const [frequencyString, frequencyListId] = callbackQuery.data.split("_");
      const frequency = parseInt(frequencyString);
      await List.findOneAndUpdate({ _id: frequencyListId }, { frequency });
      bot.answerCallback(callbackQuery.callbackQueryId, `${capitalize(getFrequencyMessage(frequency))} changes`);
      list = await List.findOne({ _id: frequencyListId }).exec();
      if (!list) return;
      bot.editKeyboard(callbackQuery.chatId, callbackQuery.id, curateListKeyboard(list));
      break;
    case CallbackDataType.Suggestion:
      game = await Game.findOne({ chat_id: callbackQuery.chatId }).select("list").exec();
      if (!game) return;
      switch (callbackQuery.data) {
        case "list":
          bot.sendMessage(
            callbackQuery.chatId,
            "You can add your own lists over here: https://belgocanadian.com/tenthings",
          );
          break;
        case "feature":
          bot.sendMessage(
            callbackQuery.chatId,
            `<b>FEATURE</b>\nWhat would you like to see added?`,
            undefined,
            callbackQuery.id,
          );
          break;
        case "typo":
          bot.sendMessage(
            callbackQuery.chatId,
            `<b>TYPO</b>\nPlease specify the list with the typo if it is not within "${angleBrackets(game.list.name)}"`,
            undefined,
            callbackQuery.id,
          );
          break;
        case "bug":
          bot.sendMessage(
            callbackQuery.chatId,
            "<b>BUG</b>\nPlease provide some details as to what went wrong.",
            undefined,
            callbackQuery.id,
          );
          break;
        default:
          break;
      }
      bot.deleteMessage(callbackQuery.chatId, callbackQuery.id);
  }
};
