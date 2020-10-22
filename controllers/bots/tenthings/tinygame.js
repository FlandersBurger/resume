const moment = require('moment');

const bot = require('../../../bots/telegram');
const messages = require('./messages');
const hints = require('./hints');

const List = require('../../../models/tenthings/list')();

const create = async (game, msg) => {
	const availableLanguages =
		game.settings.languages && game.settings.languages.length > 0
			? game.settings.languages
			: ['EN'];
	let count = await List.countDocuments({
		categories: { $nin: game.disabledCategories },
		language: { $in: availableLanguages },
	}).exec();
	let lists;
	if (count === 0) {
		count = await List.countDocuments({}).exec();
		lists = await List.find({
			language: { $in: availableLanguages },
		})
			.select('name values')
			.populate('creator')
			.limit(1)
			.lean()
			.skip(Math.floor(Math.random() * count))
			.exec();
	} else {
		lists = await List.find({
			categories: { $nin: game.disabledCategories },
			language: { $in: availableLanguages },
		})
			.select('name values')
			.populate('creator')
			.limit(1)
			.lean()
			.skip(Math.floor(Math.random() * count))
			.exec();
	}
	const tinygame = {
		answer: lists[0].name,
		clues: lists[0].values.map(answer => answer.value).getRandom(10),
	};
	let message = '<b>Find the list title</b>\n';
	message += tinygame.clues.reduce((msg, clue) => {
		msg += `- ${clue}\n`;
		return msg;
	}, '');
	message += `\n<b>${hints.getHint(1, tinygame.answer)}</b>`;
	bot.queueMessage(msg.chat.id, message);
	game.tinygame.answer = tinygame.answer;
	game.tinygame.date = moment();
	game.tinygame.clues = tinygame.clues;
	try {
		await game.save();
	} catch (err) {
		console.error(`Tinygame Error\n${JSON.stringify(err)}`);
		throw err;
	}
	return true;
};

exports.create = create;

exports.check = async (game, player, guess, msg) => {
	if (guess.answer !== game.tinygame.answer) return;
	const score = Math.floor(10 * guess.match.distance);
	player.score += score;
	player.scoreDaily += score;
	player.tinygamePlays++;
	const savedPlayer = await player.save();
	game.tinygame.plays++;
	const savedGame = await game.save();
	let message = `Tinygame answer guessed! (${(
		guess.match.distance * 100
	).toFixed(0)}%)\n`;
	message += messages.guessed(game.tinygame.answer, msg.from.first_name);
	message += `\n<pre>${player.scoreDaily - score} + ${score} points</pre>`;
	bot.queueMessage(msg.chat.id, message);
	return await create(game, msg);
};
