const moment = require("moment");

const bot = require("../../../connections/telegram");

const messages = require("./messages");
const guesses = require("./guesses");
const hints = require("./hints");
const lists = require("./lists");
const i18n = require("../../../i18n");

const create = async (game) => {
  const availableLanguages =
    game.settings.languages && game.settings.languages.length > 0 ? game.settings.languages : ["EN"];
  let list = await lists.getRandomList({
    categories: { $nin: game.disabledCategories },
    language: { $in: availableLanguages },
  });
  if (!list) {
    list = await lists.getRandomList({
      categories: { $nin: game.disabledCategories },
      language: "EN",
    });
    if (!list) {
      list = await lists.getRandomList({
        language: "EN",
      });
    }
  }
  const tinygame = {
    answer: list.name,
    clues: list.values.map((answer) => answer.value).getRandom(10),
  };
  game.tinygame.answer = tinygame.answer;
  game.tinygame.hints = 1;
  game.tinygame.date = moment();
  game.tinygame.clues = tinygame.clues;
  sendMessage(game);
  try {
    await game.save();
  } catch (err) {
    console.error(`Tinygame Error\n${JSON.stringify(err)}`);
    throw err;
  }
  return true;
};

const sendMessage = (game) => {
  let message = `<b>${i18n(game.settings.language, "sentences.findTheTitle")}</b>\n`;
  message += game.tinygame.clues.reduce((msg, clue) => {
    msg += `- ${clue}\n`;
    return msg;
  }, "");
  message += `\n<b>${hints.getHint(game.tinygame.hints, game.tinygame.answer)}</b>`;
  bot.queueMessage(game.chat_id, message);
};

exports.create = create;
exports.sendMessage = sendMessage;

exports.check = async (game, player, guess, msg) => {
  if (guess.match.value !== game.tinygame.answer) return;
  const score = guesses.getAnswerScore(game.minigame.hints, guess.match.distance);
  player.score += score;
  player.scoreDaily += score;
  if (game.tinygame.hints === 0) player.hintStreak++;
  player.tinygamePlays++;
  await player.save();
  game.tinygame.plays++;
  await game.save();
  let message = `${i18n(game.settings.language, "sentences.tinygameAnswered")} (${(guess.match.distance * 100).toFixed(
    0
  )}%)\n`;
  message += messages.guessed(game.settings.language, game.tinygame.answer, msg.from.first_name);
  message += `\n<u>${player.scoreDaily - score} + ${i18n(game.settings.language, "point", {
    count: score,
  })}</u>`;
  bot.queueMessage(msg.chat.id, message);
  setTimeout(() => {
    create(game);
  }, 1000);
};
