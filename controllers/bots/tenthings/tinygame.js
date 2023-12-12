const moment = require("moment");

const bot = require("../../../connections/telegram");
const messages = require("./messages");
const hints = require("./hints");
const lists = require("./lists");

const List = require("../../../models/tenthings/list")();

const create = async (game, msg) => {
  const availableLanguages =
    game.settings.languages && game.settings.languages.length > 0
      ? game.settings.languages
      : ["EN"];
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
  bot.queueMessage(msg.chat.id, message(game.tinygame));
  try {
    await game.save();
  } catch (err) {
    console.error(`Tinygame Error\n${JSON.stringify(err)}`);
    throw err;
  }
  return true;
};

const message = (tinygame) => {
  let message = "<b>Find the list title</b>\n";
  message += tinygame.clues.reduce((msg, clue) => {
    msg += `- ${clue}\n`;
    return msg;
  }, "");
  message += `\n<b>${hints.getHint(tinygame.hints, tinygame.answer)}</b>`;
  return message;
};

exports.create = create;
exports.message = message;

exports.check = async (game, player, guess, msg) => {
  if (guess.match.value !== game.tinygame.answer) return;
  const score = Math.floor(10 * guess.match.distance);
  player.score += score;
  player.scoreDaily += score;
  if (game.tinygame.hints === 0) player.hintStreak++;
  player.tinygamePlays++;
  await player.save();
  game.tinygame.plays++;
  await game.save();
  let message = `Tinygame answer guessed! (${(guess.match.distance * 100).toFixed(0)}%)\n`;
  message += messages.guessed(game.tinygame.answer, msg.from.first_name);
  message += `\n<pre>${player.scoreDaily - score} + ${score} points</pre>`;
  bot.queueMessage(msg.chat.id, message);
  return await create(game, msg);
};
