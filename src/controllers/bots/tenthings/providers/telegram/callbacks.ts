import { HydratedDocument, Types } from "mongoose";
import { Game, List } from "@models/index";
import { IGame, IGameSettings } from "@models/tenthings/game";
import { IList, IVote } from "@models/tenthings/list";
import { capitalize, parseSymbols } from "@root/utils/string-helpers";
import { makePercentage } from "@root/utils/number-helpers";
import find from "lodash/find";

import moment from "moment";
import { getDifficultyMessage, getFrequencyMessage } from "@tenthings/messages";
import { getListScore } from "@tenthings/lists";

import i18n from "@root/i18n";

import { setDisabledCategories } from "@tenthings/categories";
import emojis from "@tenthings/emojis";
import { initiateBan, processBan } from "@tenthings/providers/telegram/bans";
import { getScores, getStats } from "@tenthings/providers/telegram/stats";
import { votersCache } from "@tenthings/cache";
import {
  categoriesKeyboard,
  curateListKeyboard,
  delayKeyboard,
  languageKeyboard,
  languagesKeyboard,
  listStatsKeyboard,
  playerStatsKeyboard,
  settingsKeyboard,
  subcategoriesKeyboard,
} from "./keyboards";
import bot, { TelegramUser } from "@root/connections/telegram";
import { adminOnly } from "@root/controllers/bots/tenthings/providers/telegram/errors";
import { isBotLanguage, isSupportedLanguage, SupportedLanguage } from "@tenthings/languages";
import { convertTelegramUserToPlayer } from ".";

export type TelegramCallbackData = {
  id: string;
  type: string;
  date: Date;
  from: TelegramUser;
  chatId: number;
  callbackQueryId: string;
  text: string;
  data: string;
};

export enum TelegramCallbackDataType {
  Ban = "ban",
  BotLanguage = "lang",
  Category = "cat",
  Subcategory = "sub",
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
  SkipDelay = "skipDelay",
  VetoDelay = "vetoDelay",
  HintDelay = "hintDelay",
}

export type TelegramCallbackDataTypeDelay =
  | TelegramCallbackDataType.SkipDelay
  | TelegramCallbackDataType.VetoDelay
  | TelegramCallbackDataType.HintDelay;

export const callbackDateTypeDelays: TelegramCallbackDataTypeDelay[] = [
  TelegramCallbackDataType.SkipDelay,
  TelegramCallbackDataType.VetoDelay,
  TelegramCallbackDataType.HintDelay,
];

export default async (callbackQuery: TelegramCallbackData) => {
  const game: HydratedDocument<IGame> | null = await Game.findOne({ chat_id: callbackQuery.chatId });
  if (!game) {
    return;
  }
  try {
    await game.validate();
  } catch (err) {
    game.guessers = [];
    game.streak = {
      player: undefined,
      count: 0,
    };
    game.list.values = game.list.values.map((v) => ({ ...v, guesser: undefined }));
    await game.save();
    console.log("Game reset in callback:", game._id);
    return;
  }
  const player = await convertTelegramUserToPlayer(game, callbackQuery.from);
  if (!player || player.banned) {
    return;
  }
  let list: HydratedDocument<IList> | null;
  switch (callbackQuery.type) {
    case TelegramCallbackDataType.Vote:
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
          if (!game) return;
          if (callbackQuery.from.name) {
            bot.queueMessage(
              game.telegramChannel,
              i18n(game.settings.language, `sentences.${vote > 0 ? "" : "dis"}likesList`, {
                name: parseSymbols(callbackQuery.from.name),
                list: parseSymbols(foundList.name),
                score: makePercentage(foundList.score),
              }),
            );
          }
        }
      }
      break;
    case TelegramCallbackDataType.StatOptions:
      if (await bot.checkAdmin(game, callbackQuery.from)) {
        if (!game) return;
        const text = i18n(game.settings.language, `stats.${callbackQuery.data}`);
        switch (callbackQuery.data) {
          case "list":
            bot.answerCallback(callbackQuery.callbackQueryId, text);
            bot.sendKeyboard(game.telegramChannel, `<b>${text}</b>`, listStatsKeyboard(game));
            break;
          case "player":
            bot.answerCallback(callbackQuery.callbackQueryId, text);
            bot.sendKeyboard(game.telegramChannel, `<b>${text}</b>`, playerStatsKeyboard());
            break;
          case "global":
            bot.answerCallback(callbackQuery.callbackQueryId, text);
            getStats(game, "global", callbackQuery.from.name);
            break;
          case "game":
            bot.answerCallback(callbackQuery.callbackQueryId, text);
            getStats(game, "g", callbackQuery.from.name);
            break;
        }
      }
      break;
    case TelegramCallbackDataType.Stats:
      bot.answerCallback(callbackQuery.callbackQueryId, "");
      getStats(game, callbackQuery.data, callbackQuery.from.name);
      break;
    case TelegramCallbackDataType.Score:
      if (callbackQuery.from.name === "^") return "";
      bot.answerCallback(callbackQuery.callbackQueryId, "Score");
      getScores(game, callbackQuery.data);
      break;
    case TelegramCallbackDataType.Category:
      if (game.chat_id != parseInt(process.env.GROUP_CHAT || "")) {
        if (await bot.checkAdmin(game, callbackQuery.from)) {
          bot.queueEditMessage(
            game.telegramChannel,
            callbackQuery.id,
            i18n(game.settings.language, `${callbackQuery.data}.name`, { ns: "categories" }),
            subcategoriesKeyboard(game, callbackQuery.data),
          );
        }
      }
      break;
    case TelegramCallbackDataType.Subcategory:
      if (game.chat_id != parseInt(process.env.GROUP_CHAT || "")) {
        if (await bot.checkAdmin(game, callbackQuery.from)) {
          if (!game || !callbackQuery.data) return;
          const mainCategory = callbackQuery.data.split(".")[0];
          const categoryIndex = game.disabledCategories.indexOf(callbackQuery.data);
          setDisabledCategories(game, callbackQuery.data);
          await game.save();
          bot.answerCallback(
            callbackQuery.callbackQueryId,
            `${i18n(game.settings.language, callbackQuery.data, { ns: "categories" })} -> ${
              categoryIndex >= 0 ? i18n(game.settings.language, "on") : i18n(game.settings.language, "off")
            }`,
          );
          bot.queueEditKeyboard(game.telegramChannel, callbackQuery.id, subcategoriesKeyboard(game, mainCategory));
        } else {
          if (!game) return;
          adminOnly(game, player);
        }
      }
      break;
    case TelegramCallbackDataType.Setting:
      if (game.chat_id !== parseInt(process.env.ADMIN_CHAT || "")) {
        if (await bot.checkAdmin(game, callbackQuery.from)) {
          if (!game || !callbackQuery.data) return;
          if (callbackQuery.data === "langs") {
            const availableLanguages = await List.aggregate([
              { $group: { _id: "$language", count: { $sum: 1 } } },
            ]).exec();
            bot.queueEditMessage(
              game.telegramChannel,
              callbackQuery.id,
              i18n(game.settings.language, "triviaLangauges"),
              languagesKeyboard(game, availableLanguages),
            );
          } else if (callbackQuery.data === "lang") {
            bot.queueEditMessage(
              game.telegramChannel,
              callbackQuery.id,
              i18n(game.settings.language, "botLanguage"),
              languageKeyboard(game),
            );
          } else if (callbackQuery.data === "cats") {
            bot.queueEditMessage(
              game.telegramChannel,
              callbackQuery.id,
              i18n(game.settings.language, "category", { count: 0 }),
              categoriesKeyboard(game),
            );
          } else if (callbackQuery.data === "settings") {
            bot.editMessage(
              game.telegramChannel,
              callbackQuery.id,
              i18n(game.settings.language, "settings"),
              settingsKeyboard(game),
            );
          } else if (callbackDateTypeDelays.includes(callbackQuery.data as TelegramCallbackDataTypeDelay)) {
            // if (game.chat_id < 0) {
            bot.editMessage(
              game.telegramChannel,
              callbackQuery.id,
              `${i18n(game.settings.language, callbackQuery.data)}\n${i18n(game.settings.language, `sentences.${callbackQuery.data}`)}`,
              delayKeyboard(game, callbackQuery.data as TelegramCallbackDataTypeDelay),
            );

            // } else {
            //   bot.answerCallback(callbackQuery.callbackQueryId, "This setting doesn't apply in private chats");
            // }
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
            bot.queueEditKeyboard(game.telegramChannel, callbackQuery.id, settingsKeyboard(game));
          }
        } else {
          if (!game) return;
          adminOnly(game, player);
        }
      }
      break;
    case TelegramCallbackDataType.TriviaLanguages:
      if (await bot.checkAdmin(game, callbackQuery.from)) {
        if (!game || !callbackQuery.data) return;
        if (!isSupportedLanguage(callbackQuery.data)) return;
        const isSelected = game.settings.languages.includes(callbackQuery.data);
        if (isSelected) {
          game.settings.languages = game.settings.languages.filter((language) => language !== callbackQuery.data);
        } else {
          game.settings.languages.push(callbackQuery.data);
        }
        if (!game.settings.languages || game.settings.languages.length === 0) {
          game.settings.languages = [SupportedLanguage.EN];
        }
        game.save();
        bot.answerCallback(
          callbackQuery.callbackQueryId,
          `${callbackQuery.data} -> ${
            isSelected ? i18n(game.settings.language, "off") : i18n(game.settings.language, "on")
          }`,
        );
        const availableLanguages = await List.aggregate([{ $group: { _id: "$language", count: { $sum: 1 } } }]).exec();
        bot.queueEditKeyboard(game.telegramChannel, callbackQuery.id, languagesKeyboard(game, availableLanguages));
      }
      break;
    case TelegramCallbackDataType.BotLanguage:
      if (await bot.checkAdmin(game, callbackQuery.from)) {
        if (!game || !callbackQuery.data) return;
        if (!isBotLanguage(callbackQuery.data)) return;
        game.settings.language = callbackQuery.data;
        await game.save();
        bot.answerCallback(callbackQuery.callbackQueryId, `${callbackQuery.data} -> New bot language`);
        bot.setCommands(game.telegramChannel, callbackQuery.data);
        bot.queueEditKeyboard(game.telegramChannel, callbackQuery.id, languageKeyboard(game));
      }
      break;
    case TelegramCallbackDataType.Pick:
      if (game.chat_id === parseInt(process.env.ADMIN_CHAT || "")) {
        const list: HydratedDocument<IList> | null = await List.findOne({ _id: callbackQuery.data })
          .populate("creator")
          .exec();
        if (!list) return;
        let msg = game.provider.listMessage(list);
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
        if (!game) return;
        if (game.pickedLists.length >= 10)
          return bot.queueMessage(
            game.telegramChannel,
            i18n(game.settings.language, "warnings.fullQueue", { name: callbackQuery.from.name }),
          );
        const list = await List.findOne({ _id: callbackQuery.data }).exec();
        if (!list) return bot.queueMessage(game.telegramChannel, i18n(game.settings.language, "warnings.unfoundList"));
        const foundList = find(game.pickedLists, (pickedListId: Types.ObjectId) => pickedListId === list._id);
        if (foundList) {
          bot.queueMessage(
            game.telegramChannel,
            i18n(game.settings.language, "warnings.alreadyInQueue", {
              list: list.name,
              name: callbackQuery.from.name,
            }),
          );
        } else {
          game.pickedLists.push(list._id);
          if (find(game.bannedLists, (bannedListId: Types.ObjectId) => bannedListId === list._id)) {
            game.bannedLists = game.bannedLists.filter((bannedListId: Types.ObjectId) => bannedListId !== list._id);
          }
          game.save();
          list.picks++;
          list.save();
          bot.answerCallback(
            callbackQuery.callbackQueryId,
            i18n(game.settings.language, "sentences.addedList", {
              list: list.name,
            }),
          );
          bot.queueMessage(
            game.telegramChannel,
            i18n(game.settings.language, "sentences.addedListToQueue", {
              list: list.name,
              name: callbackQuery.from.name,
            }),
          );
        }
      }
      break;
    case TelegramCallbackDataType.Ban:
      if (!game) return;
      initiateBan(game, callbackQuery);
      bot.answerCallback(callbackQuery.callbackQueryId, "");
      break;
    case TelegramCallbackDataType.ConfirmBan:
      if (!game) return;
      if (!game) return;
      processBan(game, callbackQuery);
      bot.answerCallback(callbackQuery.callbackQueryId, "");
      break;
    case TelegramCallbackDataType.Values:
      list = await List.findOne({ _id: callbackQuery.data });
      if (!list) {
        bot.queueMessage(game.telegramChannel, "List not found");
      } else {
        bot.queueMessage(
          game.telegramChannel,
          list.values
            .sort((a, b) => (a.value < b.value ? -1 : 1))
            .reduce((message, item) => `${message}- ${item.value}\n`, `<b>${list.name}</b>\n`),
        );
      }
      break;
    case TelegramCallbackDataType.Description:
      if (!game) return;
      list = await List.findOne({ _id: callbackQuery.data }).exec();
      if (!list) return;
      bot.queueMessage(
        game.telegramChannel,
        `<b>${list.name}</b>\n${i18n(game.settings.language, "description")}:\n<i>${list.description || "N/A"}</i>`,
      );
      break;
    case TelegramCallbackDataType.Difficulty:
      const [difficultyString, difficultyListId] = callbackQuery.data.split("_");
      const difficulty = parseInt(difficultyString);
      await List.findOneAndUpdate({ _id: difficultyListId }, { difficulty });
      bot.answerCallback(callbackQuery.callbackQueryId, `List is ${getDifficultyMessage(difficulty)}`);
      list = await List.findOne({ _id: difficultyListId }).exec();
      if (!list) return;
      bot.queueEditKeyboard(game.telegramChannel, callbackQuery.id, curateListKeyboard(list));
      break;
    case TelegramCallbackDataType.Frequency:
      const [frequencyString, frequencyListId] = callbackQuery.data.split("_");
      const frequency = parseInt(frequencyString);
      await List.findOneAndUpdate({ _id: frequencyListId }, { frequency });
      bot.answerCallback(callbackQuery.callbackQueryId, `${capitalize(getFrequencyMessage(frequency))} changes`);
      list = await List.findOne({ _id: frequencyListId }).exec();
      if (!list) return;
      bot.queueEditKeyboard(game.telegramChannel, callbackQuery.id, curateListKeyboard(list));
      break;
    case TelegramCallbackDataType.SkipDelay:
    case TelegramCallbackDataType.VetoDelay:
    case TelegramCallbackDataType.HintDelay:
      if (await bot.checkAdmin(game, callbackQuery.from)) {
        if (!game || !callbackQuery.data) return;
        game.settings[callbackQuery.type] = parseInt(callbackQuery.data);
        await game.save();
        bot.answerCallback(
          callbackQuery.callbackQueryId,
          `${i18n(game.settings.language, callbackQuery.type)} set to ${callbackQuery.data} seconds`,
        );
        bot.editMessage(
          game.telegramChannel,
          callbackQuery.id,
          i18n(game.settings.language, "settings"),
          settingsKeyboard(game),
        );
      }
  }
};
