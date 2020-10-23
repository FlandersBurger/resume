const moment = require('moment');

const bot = require('../../../bots/telegram');
const messages = require('./messages');
const hints = require('./hints');

const List = require('../../../models/tenthings/list')();

const create = async (game, msg) => {
	let lists = await List.find({
		categories: {
			$nin: game.disabledCategories,
		},
	}).lean();
	if (lists.length === 0) lists = await List.find({}).lean();
	let answers = lists.reduce((answers, list) => {
		for (const value of list.values) {
			if (!answers[value.value]) answers[value.value] = [list.name];
			else answers[value.value].push(list.name);
		}
		return answers;
	}, {});
	let result = Object.keys(answers)
		.reduce((result, answer) => {
			if (answers[answer] && answers[answer].length > 2) {
				result.push({
					answer: answer,
					lists: answers[answer],
				});
			}
			return result;
		}, [])
		.filter(minigame => minigame.lists && minigame.lists.length > 0);
	if (result.length === 0) {
		bot.queueMessage(
			msg.chat.id,
			'Insufficient categories selected for the minigame to work'
		);
		return;
	}
	let minigame = result[Math.floor(Math.random() * result.length)];

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

const message = minigame => {
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
	player.minigamePlays++;
	const savedPlayer = await player.save();
	game.minigame.plays++;
	const savedGame = await game.save();
	let message = `Minigame answer guessed! (${(
		guess.match.distance * 100
	).toFixed(0)}%)\n`;
	message += messages.guessed(game.minigame.answer, msg.from.first_name);
	message += `\n<pre>${player.scoreDaily - score} + ${score} points</pre>`;
	bot.queueMessage(msg.chat.id, message);
	return await create(game, msg);
};
