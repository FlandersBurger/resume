const moment = require("moment");
const _ = require("underscore");

const bot = require("../../../connections/telegram");
const i18n = require("../../../i18n");
const messages = require("./messages");
const guesses = require("./guesses");
const hints = require("./hints");

const List = require("../../../models/tenthings/list")();
const Minigame = require("../../../models/tenthings/minigame")();

const create = async (game) => {
  const availableLanguages =
    game.settings.languages && game.settings.languages.length > 0 ? game.settings.languages : ["EN"];
  let minigames = await getMinigames({
    categories: { $nin: game.disabledCategories },
    language: { $in: availableLanguages },
  });
  if (minigames.length === 0) {
    minigames = await getMinigames({
      categories: { $nin: game.disabledCategories },
      language: "EN",
    });
    if (minigames.length > 0)
      bot.queueMessage(
        game.chat_id,
        "Not enough lists available in your chosen languages to make a minigame work, defaulting to English"
      );
  }
  if (minigames.length === 0) {
    minigames = await getMinigames({
      language: "EN",
    });
    if (minigames.length > 0)
      bot.queueMessage(
        game.chat_id,
        "Not enough lists available in your chosen categories to make a minigame work, defaulting to all lists"
      );
  }
  let minigame = minigames[Math.floor(Math.random() * minigames.length)];

  game.minigame.answer = minigame.answer;
  game.minigame.hints = 0;
  game.minigame.date = moment();
  game.minigame.lists = minigame.lists.getRandom(10);
  sendMessage(game);
  try {
    await game.save();
  } catch (err) {
    console.error(`Minigame Error\n${JSON.stringify(err)}`);
    throw err;
  }
  return true;
};

const getAllMinigames = async () => {
  const lists = await List.find({}).select("name language values categories").lean();
  bot.notifyAdmin(`Vetting ${lists.length} lists for minigames`);
  let answers = lists.reduce((answers, list) => {
    for (const value of list.values) {
      const key = `${list.language}-${value.value}`;
      if (!answers[key]) {
        answers[key] = {
          answer: value.value,
          language: list.language,
          lists: [list.name],
          categories: list.categories,
        };
      } else {
        answers[key].lists.push(list.name);
        answers[key].categories = _.uniq([...answers[key].categories, ...list.categories]);
      }
    }
    return answers;
  }, {});
  return Object.keys(answers)
    .reduce((result, key) => {
      if (answers[key] && answers[key].lists.length > 2) {
        result.push(answers[key]);
      }
      return result;
    }, [])
    .filter((minigame) => minigame.lists && minigame.lists.length > 0);
};

const getMinigames = async (parameters) => {
  let minigames = await Minigame.find(parameters).lean();
  if (minigames.length === 0) minigames = await Minigame.find({}).lean();
  return minigames;
};

exports.createMinigames = async () => {
  const minigames = await getAllMinigames();
  minigames.forEach((game) => {
    Minigame.findOneAndUpdate(
      { language: game.language, answer: game.answer },
      game,
      { new: true, upsert: true },
      (err, saved) => {
        if (err) console.error(err);
      }
    );
  });
  bot.notifyAdmin(`${minigames.length} minigames created`);
};

// Count the possible minigames
// getMinigames({}).then((minigames) => console.log(minigames.length));

const sendMessage = (game) => {
  let message = `<b>${i18n(game.settings.language, "sentences.findTheConnection")}</b>\n`;
  message += game.minigame.lists.reduce((msg, list) => {
    msg += `- ${list}\n`;
    return msg;
  }, "");
  message += `\n<b>${hints.getHint(game.minigame.hints, game.minigame.answer)}</b>`;
  bot.queueMessage(game.chat_id, message);
};

exports.create = create;
exports.sendMessage = sendMessage;

exports.check = async (game, player, guess, msg) => {
  if (guess.match.value !== game.minigame.answer) return;
  const score = guesses.getAnswerScore(game.minigame.hints, guess.match.distance);
  player.score += score;
  player.scoreDaily += score;
  if (game.minigame.hints === 0) player.hintStreak++;
  player.minigamePlays++;
  await player.save();
  game.minigame.plays++;
  await game.save();
  let message = `${i18n(game.settings.language, "sentences.minigameAnswered")} (${(guess.match.distance * 100).toFixed(
    0
  )}%)\n`;
  message += messages.guessed(game.settings.language, game.minigame.answer, msg.from.first_name);
  message += `\n<u>${player.scoreDaily - score} + ${i18n(game.settings.language, "point", {
    count: score,
  })}</u>`;
  bot.queueMessage(msg.chat.id, message);
  setTimeout(() => {
    create(game);
  }, 1000);
};
