const moment = require('moment');

const bot = require('../../../connections/telegram');
const messages = require('./messages');
const hints = require('./hints');

const List = require('../../../models/tenthings/list')();

const create = async (game, msg) => {
  const availableLanguages =
    game.settings.languages && game.settings.languages.length > 0
      ? game.settings.languages
      : ['EN'];
  let minigames = await getMinigames({
    categories: { $nin: game.disabledCategories },
    language: { $in: availableLanguages },
  });
  if (minigames.length === 0) {
    minigames = await getMinigames({
      categories: { $nin: game.disabledCategories },
      language: 'EN',
    });
    if (minigames.length > 0)
      bot.queueMessage(
        msg.chat.id,
        'Not enough lists available in your chosen languages to make a minigame work, defaulting to English'
      );
  }
  if (minigames.length === 0) {
    minigames = await getMinigames({
      language: 'EN',
    });
    if (minigames.length > 0)
      bot.queueMessage(
        msg.chat.id,
        'Not enough lists available in your chosen categories to make a minigame work, defaulting to all lists'
      );
  }
  let minigame = minigames[Math.floor(Math.random() * minigames.length)];

  game.minigame.answer = minigame.answer;
  game.minigame.hints = 0;
  game.minigame.date = moment();
  game.minigame.lists = minigame.lists.getRandom(10);
  bot.queueMessage(msg.chat.id, message(game.minigame));
  try {
    await game.save();
  } catch (err) {
    console.error(`Minigame Error\n${JSON.stringify(err)}`);
    throw err;
  }
  return true;
};

const getMinigames = async (parameters) => {
  let lists = await List.find(parameters).lean();
  if (lists.length === 0) lists = await List.find({}).lean();
  let answers = lists.reduce((answers, list) => {
    for (const value of list.values) {
      if (!answers[value.value]) answers[value.value] = [list.name];
      else answers[value.value].push(list.name);
    }
    return answers;
  }, {});
  return Object.keys(answers)
    .reduce((result, answer) => {
      if (answers[answer] && answers[answer].length > 2) {
        result.push({
          answer: answer,
          lists: answers[answer],
        });
      }
      return result;
    }, [])
    .filter((minigame) => minigame.lists && minigame.lists.length > 0);
};

// Count the possible minigames
// getMinigames({}).then((minigames) => console.log(minigames.length));

const message = (minigame) => {
  let message = '<b>Find the connection</b>\n';
  message += minigame.lists.reduce((msg, list) => {
    msg += `- ${list}\n`;
    return msg;
  }, '');
  message += `\n<b>${hints.getHint(minigame.hints, minigame.answer)}</b>`;
  return message;
};

exports.create = create;
exports.message = message;

exports.check = async (game, player, guess, msg) => {
  if (guess.answer !== game.minigame.answer) return;
  const score = Math.floor(10 * guess.match.distance);
  player.score += score;
  player.scoreDaily += score;
  if (game.minigame.hints === 0) player.hintStreak++;
  player.minigamePlays++;
  const savedPlayer = await player.save();
  game.minigame.plays++;
  const savedGame = await game.save();
  let message = `Minigame answer guessed! (${(guess.match.distance * 100).toFixed(0)}%)\n`;
  message += messages.guessed(game.minigame.answer, msg.from.first_name);
  message += `\n<pre>${player.scoreDaily - score} + ${score} points</pre>`;
  bot.queueMessage(msg.chat.id, message);
  return await create(game, msg);
};
