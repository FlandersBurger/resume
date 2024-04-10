const _ = require("underscore");
const moment = require("moment");

const config = require("../../../config");
const bot = require("../../../connections/telegram");
const i18n = require("../../../i18n");

const lists = require("./lists");
const bans = require("./bans");
const messages = require("./messages");
const keyboards = require("./keyboards");
const stats = require("./stats");
const cache = require("./cache");
const categories = require("./categories");
const emojis = require("./emojis");

const Game = require("../../../models/tenthings/game")();
const List = require("../../../models/tenthings/list")();

module.exports = async (data) => {
  let game;
  switch (data.type) {
    case "rate":
      let doVote = false;
      if (cache.voters[data.from_id]) {
        if (cache.voters[data.from_id].lastVoted < moment().subtract(cache.voters[data.from_id].delay, "seconds")) {
          doVote = true;
          delete cache.voters[data.from_id];
        }
      } else {
        cache.voters[data.from_id] = { lastVoted: moment(), delay: 10 };
        doVote = true;
      }
      if (doVote) {
        let foundList = await List.findOne({ _id: data.list }).select("name votes modifyDate score skips plays").exec();
        let voter = _.find(foundList.votes, (vote) => vote.voter == data.from_id);
        if (!voter) {
          foundList.votes.push({ voter: data.from_id, vote: data.vote });
          voter = foundList.votes[foundList.votes.length - 1];
        } else {
          voter.vote = data.vote;
          voter.modifyDate = new Date();
        }
        foundList.score = lists.getScore(foundList);
        delete foundList.voters;
        await foundList.save();
        bot.answerCallback(data.callback_query_id, data.vote > 0 ? emojis.thumbsUp : emojis.thumbsDown);
        //bot.notifyAdmin(`"<b>${foundList.name}</b>" ${data.vote > 0 ? 'up' : 'down'}voted by <i>${body.callback_query.from.first_name}</i>!`);
        if (moment(data.date) > moment().subtract(1, "days")) {
          game = await Game.findOne({ chat_id: data.chat_id }).select("settings").exec();
          bot.queueMessage(
            data.chat_id,
            i18n(game.settings.language, `sentences.${data.vote > 0 ? "" : "dis"}likesList`, {
              name: data.requestor,
              list: foundList.name,
              score: foundList.score.makePercentage(),
            })
          );
        }
      }
      break;
    case "stats":
      if (await bot.checkAdmin(data.chat_id, data.from_id)) {
        game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id list settings").exec();
        const text = i18n(game.settings.language, `stats.${data.data}`);
        switch (data.data) {
          case "list":
            bot.answerCallback(data.callback_query_id, text);
            bot.sendKeyboard(game.chat_id, `<b>${text}</b>`, keyboards.stats_list(game));
            break;
          case "player":
            bot.answerCallback(data.callback_query_id, text);
            bot.sendKeyboard(game.chat_id, `<b>${text}</b>`, keyboards.stats_player(game));
            break;
          case "global":
            bot.answerCallback(data.callback_query_id, text);
            bot.queueMessage(game.chat_id, "Coming Soon");
            break;
          case "game":
            bot.answerCallback(data.callback_query_id, text);
            bot.sendKeyboard(game.chat_id, `<b>${text}</b>`, keyboards.stats_game(game));
            break;
        }
      }
      break;
    case "stat":
      bot.answerCallback(data.callback_query_id, "");
      stats.getStats(data.chat_id, data, data.from_id);
      break;
    case "score":
      if (data.requestor === "^") return "";
      bot.answerCallback(data.callback_query_id, "Score");
      stats.getScores(data.chat_id, data.id);
      break;
    case "cat":
      if (data.chat_id != config.groupChat) {
        if (await bot.checkAdmin(data.chat_id, data.from_id)) {
          game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id disabledCategories settings").exec();
          const categoryIndex = game.disabledCategories.indexOf(data.id);
          if (categoryIndex >= 0) {
            game.disabledCategories.splice(categoryIndex, 1);
          } else {
            if (game.disabledCategories.length === categories.length - 1) {
              return bot.queueMessage(data.chat_id, i18n(game.settings.language, "warnings.minimum1Category"));
            }
            game.disabledCategories.push(data.id);
          }
          game.save((err, savedGame) => {
            if (err) return bot.notifyAdmin(`Category Save Error: \n${JSON.stringify(err)}`);
            bot.answerCallback(
              data.callback_query_id,
              `${data.id} -> ${
                categoryIndex >= 0 ? i18n(game.settings.language, "on") : i18n(game.settings.language, "off")
              }`
            );
            bot.editKeyboard(data.chat_id, data.message_id, keyboards.categories(game));
          });
        } else {
          game = await Game.findOne({ chat_id: data.chat_id }).select("settings").exec();
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
            game.settings[data.id] = !game.settings[data.id];
            game.save((err, savedGame) => {
              if (err) return bot.notifyAdmin(`Settings Save Error: \n${JSON.stringify(err)}`);
              bot.answerCallback(
                data.callback_query_id,
                `${data.id} -> ${
                  game.settings[data.id] ? i18n(game.settings.language, "on") : i18n(game.settings.language, "off")
                }`
              );
              bot.editKeyboard(data.chat_id, data.message_id, keyboards.settings(game));
            });
          }
        } else {
          game = await Game.findOne({ chat_id: data.chat_id }).select("settings").exec();
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
        const isSelected = game.settings.languages.includes(data.id);
        if (isSelected) {
          game.settings.languages = game.settings.languages.filter((language) => language !== data.id);
        } else {
          game.settings.languages.push(data.id);
        }
        if (!game.settings.languages || game.settings.languages.length === 0) {
          game.settings.languages = ["EN"];
        }
        game.save(async (err, savedGame) => {
          if (err) return bot.notifyAdmin(`Languages Save Error: \n${JSON.stringify(err)}`);
          bot.answerCallback(
            data.callback_query_id,
            `${data.id} -> ${isSelected ? i18n(game.settings.language, "off") : i18n(game.settings.language, "on")}`
          );
          const availableLanguages = await List.aggregate([
            { $group: { _id: "$language", count: { $sum: 1 } } },
          ]).exec();
          bot.editKeyboard(data.chat_id, data.message_id, keyboards.languages(game, availableLanguages));
        });
      }
      break;
    case "lang":
      if (await bot.checkAdmin(data.chat_id, data.from_id)) {
        game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id settings").exec();
        game.settings.language = data.id;
        game.save(async (err, savedGame) => {
          if (err) return bot.notifyAdmin(`Language Save Error: \n${JSON.stringify(err)}`);
          bot.answerCallback(data.callback_query_id, `${data.id} -> New bot language`);
          bot.setCommands(data.chat_id, data.id);
          const availableLanguages = await List.aggregate([
            { $group: { _id: "$language", count: { $sum: 1 } } },
          ]).exec();
          bot.editKeyboard(data.chat_id, data.message_id, keyboards.language(game, availableLanguages));
        });
      }
      break;
    case "pick":
      if (data.chat_id === config.adminChat) {
        const list = await List.findOne({ _id: data.list }).populate("creator").exec();
        let msg = messages.listInfo(list);
        msg += ` - Created: ${moment(list.date).format("DD-MMM-YYYY")}\n`;
        msg += ` - Modified: ${moment(list.modifyDate).format("DD-MMM-YYYY")}\n`;
        msg += ` - Score: ${list.score.makePercentage()}\n`;
        msg += ` - Values: ${list.values.length}\n`;
        msg += ` - Plays: ${list.plays}\n`;
        msg += ` - Skips: ${list.skips}\n`;
        msg += ` - Hints: ${list.hints}\n\n`;
        msg += `Rate Difficulty and Update Frequency`;
        bot.notifyAdmins(msg, keyboards.curate(list));
      } else {
        game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id pickedLists").exec();
        if (game.pickedLists >= 10)
          return bot.queueMessage(
            data.chat_id,
            i18n(game.settings.language, "warnings.fullQueue", { name: data.requestor })
          );
        List.findOne({ _id: data.list }).exec((err, list) => {
          const foundList = _.find(game.pickedLists, (pickedList) => pickedList == list._id);
          if (foundList) {
            bot.queueMessage(
              data.chat_id,
              i18n(game.settings.language, "warnings.alreadyInQueue", {
                list: list.name,
                name: data.requestor,
              })
            );
          } else {
            if (list) {
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
            } else {
              bot.queueMessage(data.chat_id, i18n(game.settings.language, "warnings.unfoundList"));
            }
          }
        });
      }
      break;
    case "ban":
      game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id bannedLists settings").exec();
      bans.initiate(game, data);
      bot.answerCallback(data.callback_query_id, "");
      break;
    case "c_ban":
      game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id bannedLists settings").exec();
      bans.process(game, data);
      bot.answerCallback(data.callback_query_id, "");
      break;
    case "suggest":
      game = await Game.findOne({ chat_id: data.chat_id }).select("chat_id list settings").exec();
      const suggestion = data.message.substring(data.message.indexOf(' "') + 2, data.message.indexOf('",'));

      let message = `<b>${data.id.capitalize()}</b>\n${suggestion}\n<i>By ${data.requestor}</i>`;
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
      List.findOne({ _id: data.list }).exec((err, list) => {
        var message = `<b>${list.name}</b>\n${i18n(game.settings.language, "description")}:\n<i>${
          list.description || "N/A"
        }</i>`;
        bot.queueMessage(data.chat_id, message);
      });
      break;
    case "diff":
      await List.findOneAndUpdate({ _id: data.list }, { difficulty: data.vote });
      bot.answerCallback(data.callback_query_id, `List is ${messages.difficulty(data.vote)}`);
      bot.editKeyboard(data.chat_id, data.message_id, keyboards.curate(await List.findOne({ _id: data.list })));
      break;
    case "freq":
      await List.findOneAndUpdate({ _id: data.list }, { frequency: data.vote });
      bot.answerCallback(data.callback_query_id, `${messages.frequency(data.vote).capitalize()} changes`);
      bot.editKeyboard(data.chat_id, data.message_id, keyboards.curate(await List.findOne({ _id: data.list })));
      break;
  }
};
