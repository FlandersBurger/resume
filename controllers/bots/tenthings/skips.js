const moment = require("moment");

const bot = require("../../../connections/telegram");
const i18n = require("../../../i18n");

const List = require("../../../models/tenthings/list")();
const Player = require("../../../models/tenthings/player")();

const lists = require("./lists");
const stats = require("./stats");
const maingame = require("./maingame");
const keyboards = require("./keyboards");

const SKIP_DELAY = 10;
const VETO_DELAY = 15;
const cache = {};
const vetoes = {};
const skippers = {};

exports.cache = cache;
exports.vetoes = vetoes;

const cooldown = (game, skipper) => {
  if (cache[game.id]) {
    if (cache[game.id].timer > 0) {
      cache[game.id].timer--;
      setTimeout(() => {
        cooldown(game, skipper);
      }, 1000);
    } else {
      skipList(game, skipper);
    }
  }
};

exports.process = (game, skipper) => {
  if (game.chat_id < 0) {
    if (cache[game._id] && cache[game._id].player !== skipper._id) {
      cache[game._id].timer = 2;
    } else if (cache[game._id] && cache[game._id].player === skipper._id) {
      bot.queueMessage(game.chat_id, i18n(game.settings.language, "sentences.skipDenial"));
    } else {
      bot.queueMessage(
        game.chat_id,
        i18n(game.settings.language, "sentences.skipConfirm", {
          list: game.list.name,
          skipDelay: SKIP_DELAY,
        })
      );
      cache[game._id] = {
        timer: SKIP_DELAY,
        player: skipper._id,
      };
      cooldown(game, skipper);
    }
  } else {
    //No need to have a delay in a personal chat
    skipList(game, skipper);
  }
};

const skipList = (game, skipper) => {
  game.list.values.forEach(function ({ guesser }, index) {
    if (!guesser.first_name) {
      this[index].guesser.first_name = i18n(game.settings.language, "sentences.notGuessed");
    }
  }, game.list.values);
  Player.updateMany(
    {
      game: game._id,
      _id: cache[game._id]
        ? {
            $in: [cache[game._id].player, skipper._id],
          }
        : skipper._id,
    },
    {
      $set: {
        hintStreak: 0,
      },
      $inc: {
        skips: 1,
      },
    }
  ).exec((err) => {
    if (err) return bot.notifyAdmin(`Skip List Error:\n${err}`);
    stats.getList(game, async (list) => {
      let message = `${i18n(game.settings.language, "sentences.skippedList", {
        list: game.list.name,
      })}\n`;
      message += list;
      message += "\nExperimental feature to permanently ban list from game:";
      bot.sendKeyboard(game.chat_id, message, keyboards.ban(game.settings.language, game.list));
      delete cache[game._id];
      let foundList = await List.findOne({
        _id: game.list._id,
      })
        .select("_id plays skips votes score")
        .exec();
      if (!foundList) return maingame.newRound(game);
      if (!foundList.skips) {
        foundList.skips = 0;
      }
      foundList.skips++;
      foundList.score = lists.getScore(foundList);
      try {
        await foundList.validate();
        await foundList.save();
      } catch (err) {
        return bot.notifyAdmin(`Skip List Error:\n${err}`);
      }
      bot.queueMessage(game.chat_id, await stats.getDailyScores(game, 5));
      maingame.newRound(game);
    });
  });
};

exports.checkSkipper = async (game, msg, player) => {
  if (!vetoes[game.id] || vetoes[game.id] < moment().subtract(VETO_DELAY, "seconds")) {
    delete vetoes[game.id];
    if (skippers[player.id]) {
      //Check for spamming if it's the same player
      if (skippers[player.id].lastSkipped < moment().subtract(skippers[player.id].delay, "seconds")) {
        delete skippers[player.id];
      } else {
        if (skippers[player.id].delay < 10) {
          skippers[player.id].lastSkipped = moment();
          skippers[player.id].delay += 10;
          return false;
        } else if (skippers[player.id].delay < 50) {
          skippers[player.id].lastSkipped = moment();
          skippers[player.id].delay += 10;
          bot.queueMessage(
            msg.chat.id,
            i18n(game.settings.language, "sentences.skipShortBan", {
              name: player.first_name,
              delay: skippers[player.id].delay,
            })
          );
          return false;
        } else if (skippers[player.id].delay < 60) {
          skippers[player.id].lastSkipped = moment();
          skippers[player.id].delay += 10;
          bot.queueMessage(
            msg.chat.id,
            i18n(game.settings.language, "sentences.skipBanThreat", {
              name: player.first_name,
              delay: skippers[player.id].delay,
            })
          );
          return false;
        } else if (skippers[player.id].delay != 3600) {
          skippers[player.id].delay = 3600;
          i18n(game.settings.language, "sentences.skipLongBan", {
            name: player.first_name,
          });
          return false;
        }
      }
    } else {
      //Start skip spam timer
      skippers[player.id] = {
        lastSkipped: moment(),
        delay: 15,
      };
    }
  }
  return true;
};

exports.veto = async (game, player) => {
  player.vetoes++;
  await player.save();
  if (cache[game.id]) {
    delete cache[game.id];
    vetoes[game.id] = moment();
    bot.queueMessage(
      game.chat_id,
      i18n(game.settings.language, "sentences.skipVeto", {
        name: player.first_name,
        vetoDelay: VETO_DELAY,
      })
    );
  } else {
    bot.queueMessage(
      game.chat_id,
      i18n(game.settings.language, "sentences.skipNotFound", {
        name: player.first_name,
      })
    );
  }
};

exports.abort = (game, player) => {
  delete cache[game.id];
  vetoes[game.id] = moment();
  bot.queueMessage(
    game.chat_id,
    i18n(game.settings.language, "sentences.skipAbort", {
      name: player.first_name,
      vetoDelay: VETO_DELAY,
    })
  );
};
