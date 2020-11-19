/*jslint esversion: 10*/
const router = require('express').Router();
const _ = require('underscore');
const FuzzyMatching = require('fuzzy-matching');
//const kue = require('kue');
const Queue = require('bull');
const moment = require('moment');
const request = require('request');
const config = require('../../../config');
const redis = require('../../../redis');
const bot = require('../../../bots/telegram');

const lists = require('./lists');
const messages = require('./messages');
const keyboards = require('./keyboards');
const stats = require('./stats');
const jobs = require('./jobs');
const hints = require('./hints');
const categories = require('./categories');
const minigame = require('./minigame');
const tinygame = require('./tinygame');

//-------------//
//redis.set('pause', true);
//-------------//

const User = require('../../../models/user')();
const Game = require('../../../models/tenthings/game')();
const Player = require('../../../models/tenthings/player')();
const List = require('../../../models/tenthings/list')();

const MAX_HINTS = hints.getMaxHints();
const VETO_DELAY = 15;
const ANSWER_DELAY = 2;
const BANNED_USERS = [];
//const BANNED_USERS = [513934222, 1051982986, 1049452899,1286805649, 1156746047, 1221878428, 928265957, 811672759, 1291668503, 1136025506, 1162690484, 1158491266, 1053547542, 1182973691, 1010339222, 906650538, 1153021237, 623100045, 1269984320];

const cooldowns = {};
const skips = {};
const vetoes = {};
const skippers = {};
const voters = {};
const antispam = {};
/*
  Game.update(
    {},
    {
      'players.$[].wins': 0,
      'players.$[].plays': 0,
      'players.$[].score': 0,
      'players.$[].scoreDaily': 0
    },
    { multi: true },
    function(err, saved) {
      if (err) {
        console.log(err);
      } else {
        console.log(saved);
      }
    }
  );
*/
/*
  bot.getChatMember(config.groupChat, config.masterChat)
  .then(function(present) {
    console.log(present);
  });*/
/*
Game.find({}).select('chat_id players').exec(function(err, games) {

games.forEach(function(game, gameIndex) {
    game.players.forEach(function(player, index, array) {
      setTimeout(function() {
        bot.getChatMember(game.chat_id, player.id)
        .then(function(present) {
          if (present) {
            console.log(player.first_name + ' present');
            player.present = true;
          } else {
            console.log(player.first_name + ' absent');
            player.present = false;
          }
          if (index === array.length - 1) {
            game.save(function(err, saved) {
              if (err) return console.error(err);
            });
          }
        }, function(error) {
          console.error(error);
        });
      }, index * 50 * gameIndex);
    });
});

});
*/
/*
const queue = kue.createQueue({
  redis: {
    port: config.redis.port,
    host: 'localhost',
    auth: config.redis.password,
    //db: 3, // if provided select a non-default redis db
  }
});
*/
const guessQueue = new Queue('processGuess', {
	redis: {
		port: config.redis.port,
		host: 'localhost',
		password: config.redis.password,
	},
});
guessQueue.on('completed', function (job) {
	//Job finished we remove it
	job.remove();
});

//addJob();
/*
queue.on('job complete', function(id, result){
  console.log('Job done:' + id);
  console.log('------------');
  kue.Job.get(id, function(err, job){
    if (err) return;
    job.remove(function(err){
      if (err) throw err;
      console.log('removed completed job #%d', job.id);
    });
  });
});
*/

/*
Game.find()
.then(function(games) {
  games.forEach(function(game) {
    if (game.chat_id !== config.groupChat) {
      bot.queueMessage(game.chat_id, 'Come join us in the <a href="https://t.me/tenthings">Ten Things config.groupChat</a>!');
    }
  });
});
*/
function getLanguage(language) {
	return 'en';
	/*
  if (language) {
    language = language.toLowerCase();
    if (translate[language.substring(0, 2)]) {
      return language.substring(0, 2);
    } else {
      bot.notifyAdmin('New language: ' + language);
      return 'en';
    }
  } else {
    return 'en';
  }
  */
}

if (process.env.NODE_ENV === 'production') {
	bot.notifyAdmin('<b>Started Ten Things</b>');
}

//bot.queueMessage('-1001394022777', "test<a href=\'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Regular_Hexagon_Inscribed_in_a_Circle.gif/360px-Regular_Hexagon_Inscribed_in_a_Circle.gif\'>&#8204;</a>\nsome other stuff")
//var url = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg';
//bot.queueMessage(config.masterChat, "test<a href=\'" + url + "\'>&#8204;</a>\nsome other stuff");
//bot.queueMessage(config.masterChat, JSON.stringify(msg));
//The Group: '5b6361dcbd0ff6645df5f225'  '-1001394022777'
/*
Game.findOne({ chat_id: '-1001394022777'})
.then(function(game) {
  var winner = game.players.reduce(function(player1, player2) {
    return (player1.scoreDaily > player2.scoreDaily) ? player1 : player2;
  });
  bot.notifyAdmin(winner);
});*/
/*
bot.exportChatInviteLink('-1001394022777').then(function(chat) {
  console.log(chat);
});
*/

const selectList = async game => {
	const availableLanguages =
		game.settings.languages && game.settings.languages.length > 0
			? game.settings.languages
			: ['EN'];
	if (game.pickedLists.length > 0) {
		let list = await List.findOne({
			_id: game.pickedLists[0],
		})
			.select('-votes')
			.populate('creator')
			.exec();
		if (!list) {
			game.pickedLists.shift();
			console.log(`Moving to next picked list`);
			return await selectList(game);
		} else {
			if (!_.some(game.playedLists, playedList => playedList == list._id)) {
				game.playedLists.push(list._id);
			}
			return list;
		}
	} else {
		let list = await lists.getRandomList({
			_id: { $nin: game.playedLists },
			categories: { $nin: game.disabledCategories },
			language: { $in: availableLanguages },
		});
		if (!list) {
			game.playedLists = [];
			game.cycles++;
			game.lastCycleDate = moment();
			bot.queueMessage(
				game.chat_id,
				'All lists have been played, a new cycle will now start.'
			);
			list = await lists.getRandomList({
				categories: { $nin: game.disabledCategories },
				language: { $in: availableLanguages },
			});
			if (!list) {
				list = await lists.getRandomList({
					categories: {
						$in: _.difference(categories, game.disabledCategories),
					},
					language: { $in: availableLanguages },
				});
			}
			if (!list) {
				list = await lists.getRandomList({
					categories: { $nin: game.disabledCategories },
					language: 'EN',
				});
			}
			if (!list) {
				list = await lists.getRandomList({
					categories: {
						$in: _.difference(categories, game.disabledCategories),
					},
					language: 'EN',
				});
			}
		}
		return list;
	}
};

const getGame = async (chat_id, user) => {
	const game = await Game.findOne({
		chat_id,
	})
		.populate('list.creator')
		.exec();
	if (!game) return await createGame(chat_id, user.id);
	let player = await getPlayer(game._id, user);
	return {
		game,
		player,
	};
};

const getPlayer = async (gameId, user) => {
	let player = await Player.findOne({
		game: gameId,
		id: `${user.id}`,
	}).exec();
	if (!player) player = await createPlayer(gameId, user);
	return player;
};

const createGame = async (chat_id, user) => {
	const game = new Game({
		chat_id,
		settings: {
			languages: ['EN'],
		},
	});
	const savedGame = await game.save();
	const savedPlayer = await createPlayer(savedGame._id, user);
	return {
		game: savedGame,
		player: savedPlayer,
	};
};

const createPlayer = async (gameId, user) => {
	const player = new Player({
		game: gameId,
		...user,
	});
	const savedPlayer = await player.save();
	return savedPlayer;
};

/*
bot.sendKeyboard(config.masterChat, 'test', {
  //reply_to_message_id: '32936',
  //reply_markup: {
    keyboard: [[
      { 'text': '\ud83d\udc4d', 'callback_data': '1' },
      { 'text': '\ud83d\udc4e', 'callback_data': '2' }
    ]]
  //}
});
*/

/*
List.find({
    categories: {
      $nin: ['Music', 'Movies']
    }
  })
  .select('category')
  .exec((err, lists) => {
    console.log(_.uniq(lists.map(list => list.category)));
  });
  */
const rateList = game => {
	bot.sendKeyboard(
		game.chat_id,
		`Did you like <b>${game.list.name}</b>?`,
		keyboards.like(game)
	);
};

const queueGuess = (game, player, msg) => {
	const values = game.list.values
		.filter(({ guesser }) => guesser)
		.map(({ value }) => value.removeAllButLetters());
	const text = msg.text.removeAllButLetters();
	const correctMatch = _.findIndex(values, value => value === text);
	if (correctMatch >= 0) {
		return queueingGuess({
			type: 'game',
			msg,
			game: game.chat_id,
			player: player.id,
			list: game.list._id,
			match: {
				index: correctMatch,
				distance: 1,
			},
		});
	}
	const lengths = values.reduce(
		(lengths, value) => ({
			longest: lengths.longest < value.length ? value.length : lengths.longest,
			shortest:
				lengths.shortest > value.length ? value.length : lengths.shortest,
		}),
		{
			longest: 1,
			shortest: 1000,
		}
	);
	let found = false;
	if (
		text.length / lengths.shortest > 0.75 &&
		text.length / lengths.longest < 1.25
	) {
		const fuzzyMatch = new FuzzyMatching(values);
		const guess = {
			type: 'game',
			msg,
			game: game.chat_id,
			player: player.id,
			list: game.list._id,
			match: fuzzyMatch.get(text, {
				min: 0.75,
			}),
		};
		guess.match.index = _.findIndex(
			values,
			value => value === guess.match.value
		);
		if (guess.match.distance >= 0.75) {
			found = true;
			setTimeout(() => {
				queueingGuess(guess);
			}, (2000 / 0.25) * (1 - guess.match.distance));
		}
	}
	if (!found) {
		const minigameAnswer = game.minigame.answer
			? game.minigame.answer.removeAllButLetters()
			: '';
		if (
			minigameAnswer &&
			text.length / minigameAnswer.length > 0.75 &&
			text.length / minigameAnswer.length < 1.25
		) {
			const fuzzyMatch = new FuzzyMatching([minigameAnswer]);
			const match = fuzzyMatch.get(text, {
				min: 0.75,
			});
			if (match.distance >= 0.75) {
				found = true;
				const guess = {
					type: 'minigame',
					msg,
					game: game.chat_id,
					player: player.id,
					answer: game.minigame.answer,
					match,
				};
				setTimeout(() => {
					queueingGuess(guess);
				}, (2000 / 0.25) * (1 - match.distance));
			} else {
				sass(game, msg.text, msg.from);
			}
		}
	}
	if (!found) {
		const tinygameAnswer = game.tinygame.answer
			? game.tinygame.answer.removeAllButLetters()
			: '';
		if (
			tinygameAnswer &&
			text.length / tinygameAnswer.length > 0.75 &&
			text.length / tinygameAnswer.length < 1.25
		) {
			const fuzzyMatch = new FuzzyMatching([tinygameAnswer]);
			const match = fuzzyMatch.get(text, {
				min: 0.75,
			});
			if (match.distance >= 0.75) {
				const guess = {
					type: 'tinygame',
					msg,
					game: game.chat_id,
					player: player.id,
					answer: game.tinygame.answer,
					match,
				};
				setTimeout(() => {
					queueingGuess(guess);
				}, (2000 / 0.25) * (1 - match.distance));
			} else {
				sass(game, msg.text, msg.from);
			}
		}
	}
};

const sass = (game, text, from) => {
	if (game.settings.sass && game.lastPlayDate > moment().subtract(7, 'days')) {
		messages.sass(text).then(
			sass => {
				if (sass) {
					if (sass.indexOf('http') === 0) {
						if (sass.indexOf('.gif') > 0) {
							bot.sendAnimation(game.chat_id, sass);
						} else {
							bot.sendPhoto(game.chat_id, sass);
						}
					} else {
						bot.queueMessage(game.chat_id, sass);
					}
				}
			},
			err => null
		);
	}
};

const queueingGuess = guess => guessQueue.add(guess);

guessQueue.process(({ data }) => processGuess(data));

const processGuess = guess => {
	return new Promise((resolve, reject) => {
		Game.findOne({
			chat_id: guess.game,
		})
			.populate('list.creator')
			.select(
				'_id chat_id guessers list lastPlayDate hints streak settings minigame tinygame disabledCategories'
			)
			.exec(async (err, game) => {
				if (err) {
					console.error(err);
					return reject();
				}
				let player = await getPlayer(game._id, {
					id: guess.player,
				});
				if (guess.type === 'game') {
					checkGuess(game, player, guess, guess.msg).then(
						() => {
							console.log(
								`${guess.game} - Guess for ${game.list.name}: "${guess.msg.text}" by ${guess.msg.from.first_name}`
							);
							resolve();
						},
						err => {
							console.error(err);
							reject(err);
						}
					);
				} else if (guess.type === 'minigame') {
					minigame.check(game, player, guess, guess.msg).then(
						() => {
							console.log(
								`${guess.game} - Minigame guess for ${game.minigame.answer}: "${guess.msg.text}" by ${guess.msg.from.first_name}`
							);
							resolve();
						},
						err => {
							console.error(err);
							reject(err);
						}
					);
				} else if (guess.type === 'tinygame') {
					tinygame.check(game, player, guess, guess.msg).then(
						() => {
							console.log(
								`${guess.game} - Tinygame guess for ${game.tinygame.answer}: "${guess.msg.text}" by ${guess.msg.from.first_name}`
							);
							resolve();
						},
						err => {
							console.error(err);
							reject(err);
						}
					);
				}
			});
	});
};

const checkGuess = async (game, player, guess, msg) => {
	if (guess.list !== game.list._id) return;
	game.lastPlayDate = moment();
	player.lastPlayDate = moment();
	if (skips[game.id]) {
		delete skips[game.id];
		vetoes[game.id] = moment();
		bot.queueMessage(
			msg.chat.id,
			`Skip vetoed by ${msg.from.first_name} giving a correct answer\nNo skipping allowed for ${VETO_DELAY} seconds`
		);
	}
	if (!_.some(game.guessers, guesser => guesser == msg.from.id)) {
		game.guessers.push(`${msg.from.id}`);
	}
	const match = game.list.values[guess.match.index];
	if (!player) {
		bot.notifyAdmin(
			`Something wrong with this guess:\n${JSON.stringify(guess)}`
		);
		console.error(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
		return resolve();
	}
	if (!match.guesser.first_name) {
		match.guesser = msg.from;
		player.answers++;
		const score = Math.round(
			(MAX_HINTS - game.hints + game.guessers.length) *
				(guess.match.distance - 0.6) *
				2.5
		);
		const accuracy = `${(guess.match.distance * 100).toFixed(0)}%`;
		player.score += score;
		player.scoreDaily += score;
		if (game.hints === 0) {
			player.hintStreak++;
		}
		if (!game.streak || game.streak.player != player.id) {
			game.streak = {
				player: player.id,
				count: 1,
			};
		} else {
			game.streak.count++;
		}
		if (player.streak < game.streak.count) {
			player.streak = game.streak.count;
		}
		if (player.scoreDaily > player.highScore) {
			player.highScore = player.scoreDaily;
		}
		if (player.maxHintStreak < player.hintStreak) {
			player.maxHintStreak = player.hintStreak;
		}
		if (match.blurb) {
			guessed(
				game,
				player,
				msg,
				match.value,
				match.blurb.substring(0, 4) === 'http'
					? `<a href="${match.blurb}">&#8204;</a>`
					: `\n<i>${match.blurb}</i>`,
				score,
				accuracy
			);
		} else {
			guessed(game, player, msg, match.value, '', score, accuracy);
			/*
      request(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Earth&generator=prefixsearch&exintro=1&explaintext=1&gpssearch=${encodeURIComponent(match.value)}`, (err, response, body) => {
        if (err) {
          guessed(game, player, msg, match.value, '', score, accuracy);
        } else {
          try {
            const pages = JSON.parse(body).query.pages;
            let result = pages[Object.keys(pages)[0]].extract;
            if (result.length > 200) {
              result = result.substring(0, 200) + '...';
            }
            if (result && !result.includes('refer to:') && !result.includes('refers to:')) {
              guessed(game, player, msg, match.value, `\nRandom Wiki:\n<i>${result}</i>`, score, accuracy);
            } else {
              guessed(game, player, msg, match.value, '', score, accuracy);
            }
          } catch (e) {
            console.error(e);
            guessed(game, player, msg, match.value, '', score, accuracy);
          }
        }
      });
      */
		}
		setTimeout(() => {
			checkRound(game);
		}, 200);
	} else {
		player.snubs++;
		/*
    if (game.settings.snubs) {
      bot.queueMessage(msg.chat.id, messages.alreadyGuessed(match.value, msg.from, match.guesser));
    }
    */
	}
	try {
		const savedPlayer = await player.save();
		const savedGame = await game.save();
		return true;
	} catch (e) {
		console.log(player);
		console.error(e);
		console.trace();
		throw e;
	}
};

const guessed = async (
	{ streak, list },
	{ scoreDaily },
	{ from, chat },
	value,
	blurb,
	score,
	accuracy
) => {
	let message = messages.guessed(value, from.first_name);
	message += messages.streak(streak.count);
	message += blurb;
	message += `\n<pre>${
		scoreDaily - score
	} + ${score} points (${accuracy})</pre>`;
	const answersLeft = list.values.filter(({ guesser }) => !guesser.first_name)
		.length;
	if (answersLeft > 0) {
		message += `\n${answersLeft} answer${answersLeft > 1 ? 's' : ''} left.`;
	} else {
		message += '\nRound over.';
	}
	return await bot.queueMessage(chat.id, message);
};

const checkRound = game => {
	if (
		game.list.values.filter(({ guesser }) => !guesser.first_name).length === 0
	) {
		setTimeout(() => {
			stats.getList(game, async list => {
				const foundList = await List.findOne({
					_id: game.list._id,
				}).exec();
				let message = `<b>${game.list.name}</b>`;
				message += game.list.creator
					? ` by ${game.list.creator.username}\n`
					: '\n';
				message +=
					game.list.categories.length > 0
						? `Categor${
								game.list.categories.length > 1 ? 'ies' : 'y'
						  }: <b>${game.list.categories.join(', ')}</b>\n`
						: '';
				message += list;
				message += messages.listStats(foundList);
				message += await stats.getDailyScores(game, 5);
				bot.queueMessage(game.chat_id, message);
				setTimeout(() => {
					rateList(game);
					setTimeout(() => {
						newRound(game);
					}, 1000);
				}, 1000);
			});
		}, 1000);
	}
};

const newRound = (currentGame, player) => {
	Game.findOne({
		_id: currentGame._id,
	})
		.select(
			'_id chat_id playedLists list listsPlayed pickedLists cycles guessers hintCooldown hints disabledCategories settings'
		)
		.populate('list.creator')
		.exec(async (err, game) => {
			if (err) return console.error(err);
			if (!game) return console.log('Game not found');
			let players = await Player.find({
				game: currentGame._id,
				id: {
					$in: game.guessers,
				},
			}).exec();
			selectList(game).then(
				async list => {
					if (game.pickedLists.length > 0) {
						game.pickedLists = game.pickedLists.filter(
							pickedList => pickedList != list._id
						);
					}
					list.plays++;
					await list.save();
					for (let player of players) {
						player.lists++;
						const savedPlayer = await player.save();
					}
					game.list = JSON.parse(JSON.stringify(list));
					game.list.totalValues = game.list.values.length;
					game.list.values = game.list.values.getRandom(10);
					game.listsPlayed++;
					game.hints = 0;
					game.hintCooldown = 0;
					game.guessers = [];
					let message = 'A new round will start in 3 seconds';
					message +=
						game.list.categories.length > 0
							? `\nCategor${
									game.list.categories.length > 1 ? 'ies' : 'y'
							  }: <b>${game.list.categories}</b>`
							: '';
					bot.queueMessage(game.chat_id, message);
					setTimeout(() => {
						let message = `<b>${game.list.name}</b> (${game.list.totalValues}) by ${game.list.creator.username}`;
						message += game.list.description
							? `\n<i>${angleBrackets(game.list.description)}</i>`
							: '';
						bot.queueMessage(game.chat_id, message);
					}, 3000);
					game.playedLists.push(game.list._id);
					game.save(err => {
						if (err)
							return bot.notifyAdmin(
								'newRound: ' + JSON.stringify(err) + '\n' + JSON.stringify(game)
							);
						console.log(
							`${game.chat_id} - New round started -> "${list.name}"`
						);
					});
				},
				err => bot.notifyAdmin(`Select List Error: ${JSON.stringify(err)}`)
			);
		});
};

const angleBrackets = str => {
	return str.replace('<', '&lt;').replace('>', '&gt;');
};

/*
var string = 'Coinage metals';
//string = 'TERA';
console.log(hints.getHint(0, string));
console.log(hints.getHint(1, string));
console.log(hints.getHint(2, string));
console.log(hints.getHint(3, string));
console.log(hints.getHint(4, string));
console.log(hints.getHint(5, string));
console.log(hints.getHint(6, string));
*/

function skip(game, skipper) {
	if (game.chat_id < 0) {
		if (skips[game._id] && skips[game._id].player !== skipper._id) {
			skips[game._id].timer = 2;
		} else if (skips[game._id] && skips[game._id].player === skipper._id) {
			bot.queueMessage(
				game.chat_id,
				'Get someone else to confirm your skip request!'
			);
		} else {
			bot.queueMessage(
				game.chat_id,
				`Skipping <b>${game.list.name}</b> in 15 seconds.\nType /veto to cancel or have someone else type /skip to confirm.`
			);
			skips[game._id] = {
				timer: 15,
				player: skipper._id,
			};
			cooldownSkip(game, skipper);
		}
	} else {
		//No need to have a delay in a personal chat
		skipList(game, skipper);
	}
}

const skipList = (game, skipper) => {
	game.list.values.forEach(function ({ guesser }, index) {
		if (!guesser.first_name) {
			this[index].guesser.first_name = 'Not guessed';
		}
	}, game.list.values);
	Player.updateMany(
		{
			game: game._id,
			_id: skips[game._id]
				? {
						$in: [skips[game._id].player, skipper._id],
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
	).exec((err, updatedPlayers) => {
		if (err) return bot.notifyAdmin(`Skip List Error:\n${err}`);
		stats.getList(game, async list => {
			let message = `<b>${game.list.name}</b> skipped!\n`;
			message += list;
			bot.queueMessage(game.chat_id, message);
			delete skips[game._id];
			let foundList = await List.findOne({
				_id: game.list._id,
			}).exec();
			if (!foundList) return newRound(game);
			if (!foundList.skips) {
				foundList.skips = 0;
			}
			foundList.skips++;
			const savedList = await foundList.save();
			bot.queueMessage(game.chat_id, await stats.getDailyScores(game, 5));
			newRound(game);
		});
	});
};

function cooldownSkip(game, skipper) {
	if (skips[game.id]) {
		if (skips[game.id].timer > 0) {
			skips[game.id].timer--;
			setTimeout(() => {
				cooldownSkip(game, skipper);
			}, 1000);
		} else {
			skipList(game, skipper);
		}
	}
}

const hint = async (game, player, type = 'main') => {
	if (
		(type === 'main' && game.hints >= MAX_HINTS) ||
		(type !== 'main' && game[type].hints >= MAX_HINTS)
	) {
		bot.queueMessage(
			game.chat_id,
			"What? Another hint? I'm just gonna ignore that request"
		);
	} else if (cooldowns[game.id] && cooldowns[game.id] > 0) {
		bot.queueMessage(
			game.chat_id,
			`Calm down with the hints, wait ${cooldowns[game.id]} more seconds`
		);
	} else {
		if (player) {
			player.hints++;
			player.hintStreak = 0;
			const savedPlayer = await player.save();
		}
		let message;
		switch (type) {
			case 'minigame':
				game.minigame.hints++;
				message = minigame.message(game.minigame);
				break;
			case 'tinygame':
				game.tinygame.hints++;
				message = tinygame.message(game.tinygame);
				break;
			default:
				game.hints++;
				message = `<b>${game.list.name}</b>\n`;
				message += game.list.values.reduce((str, { guesser, value }, index) => {
					if (!guesser.first_name) {
						str += index + 1;
						str += ': ';
						str += hints.getHint(game.hints, value);
						str += '\n';
					}
					return str;
				}, '');
				let list = await List.findOne({
					_id: game.list._id,
				}).exec();
				if (list) {
					if (!list.hints) {
						list.hints = 0;
					}
					list.hints++;
					const saved = await list.save();
				}
				break;
		}
		bot.queueMessage(game.chat_id, message);
		cooldowns[game.id] = 10;
		cooldownHint(game.id);
		const savedGame = await game.save();
	}
	return true;
};

function cooldownHint(gameId) {
	if (cooldowns[gameId] > 0) {
		cooldowns[gameId]--;
		setTimeout(() => {
			cooldownHint(gameId);
		}, 1000);
	} else {
		delete cooldowns[gameId];
	}
}

router.post('/', async ({ body }, res, next) => {
	if (body.object === 'page') {
		res.status(200).send('EVENT_RECEIVED');
		return console.log(body);
	}
	/*
  console.log(body);
  return res.status(200).send(body);
  */
	if (body.message || body.callback_query) {
		const from = body.message
			? body.message.from.id
			: body.callback_query.from.id;
		const name = body.message
			? body.message.from.first_name
			: body.callback_query.from.first_name;
		const chat = body.message
			? body.message.chat.id
			: body.callback_query.message.chat.id;
		const date = body.message ? moment.unix(body.message.date) : moment();
		const message = body.message
			? body.message.text
				? body.message.text
				: 'Not a callback or typed message'
			: body.callback_query.data;
		if (from != config.masterChat && (await redis.get('pause')) === 'true')
			return res.sendStatus(200);
		//if (date.diff(moment(), 'hours') > 1) return res.sendStatus(200);
		if (BANNED_USERS.indexOf(from) >= 0) return res.sendStatus(200);

		if (antispam[from]) {
			if (antispam[from].lastMessage < moment().subtract(10, 'seconds')) {
				delete antispam[from];
			} else if (antispam[from].lastMessage > moment()) {
				antispam[from].count++;
				antispam[from].lastMessage = moment().add(10, 'seconds');
				return res.sendStatus(200);
			} else if (antispam[from].count <= 30) {
				antispam[from].count++;
				if (antispam[from].count === 20) {
					bot.queueMessage(
						chat,
						`You sure seem to be sending a lot of messages, ${name}. I'm keeping an eye on you`
					);
				} else if (antispam[from].count === 30) {
					antispam[from].lastMessage = moment();
					bot.queueMessage(
						chat,
						`Ok, ${name}, calm down, I can't keep up.  Please stay silent for 10 seconds so I can process your stuff`
					);
				}
			} else if (antispam[from].count > 35) {
				antispam[from].count++;
				if (antispam[from].count === 35) {
					bot.exportChatInviteLink(chat).then(
						url => {
							bot.notifyAdmin(
								`Possible spammer: ${name} (${from}) in chat ${chat} ${
									chat == config.groupChat ? ' - The main chat!' : ''
								}\n\n${message}\n\nURL: ${url}`
							);
						},
						err => {
							bot.notifyAdmin(
								`Possible spammer: ${name} (${from}) in chat ${chat} ${
									chat == config.groupChat ? ' - The main chat!' : ''
								}\n\n${message}\n\nURL: Not available`
							);
						}
					);
					/*
                  } else if (antispam[from].count % 10 === 0) {
                    bot.notifyAdmin(`Possible spammer: ${name} (${from}) -> ${antispam[from].count} messages`);*/
				}
				antispam[from].lastMessage = moment();
				return res.sendStatus(200);
			} else {
				return res.sendStatus(200);
			}
		} else {
			antispam[from] = {
				lastMessage: moment(),
				count: 1,
			};
		}
	} else {
		return res.sendStatus(200);
	}
	let msg, i, item;
	if (body.callback_query) {
		const data = JSON.parse(body.callback_query.data);
		data.requestor = body.callback_query.from.username
			? `@${body.callback_query.from.username}`
			: `${body.callback_query.from.first_name} ${
					body.callback_query.from.last_name
						? body.callback_query.from.last_name
						: ''
			  }`;
		if (data.type === 'rate') {
			let doVote = false;
			if (voters[body.callback_query.from.id]) {
				if (
					voters[body.callback_query.from.id].lastVoted <
					moment().subtract(
						voters[body.callback_query.from.id].delay,
						'seconds'
					)
				) {
					doVote = true;
					delete voters[body.callback_query.from.id];
				}
			} else {
				voters[body.callback_query.from.id] = {
					lastVoted: moment(),
					delay: 10,
				};
				doVote = true;
			}
			if (doVote) {
				let foundList = await List.findOne({
					_id: data.list,
				})
					.select('name votes modifyDate score')
					.exec();
				let voter = _.find(
					foundList.votes,
					vote => vote.voter == body.callback_query.from.id
				);
				if (!voter) {
					foundList.votes.push({
						voter: body.callback_query.from.id,
						vote: data.vote,
					});
					voter = foundList.votes[foundList.votes.length - 1];
				} else {
					voter.vote = data.vote;
					voter.modifyDate = new Date();
				}
				foundList.score = foundList.votes.reduce(
					(score, vote) => (score += vote.vote),
					0
				);
				delete foundList.voters;
				foundList.save(err => {
					if (err) return console.error(err);
					bot.answerCallback(
						body.callback_query.id,
						data.vote > 0 ? '\ud83d\udc4d' : '\ud83d\udc4e'
					);
					//bot.notifyAdmin(`"<b>${foundList.name}</b>" ${data.vote > 0 ? 'up' : 'down'}voted by <i>${body.callback_query.from.first_name}</i>!`);
					const score = foundList.votes.reduce(
						(result, vote) => {
							result.score += vote.vote;
							result.positive += vote.vote > 0 ? 1 : 0;
						},
						{ score: 0, positive: 0 }
					);
					if (moment(data.date) > moment().subtract(1, 'days')) {
						bot.queueMessage(
							body.callback_query.message.chat.id,
							` ${data.vote > 0 ? '\ud83d\udc4d' : '\ud83d\udc4e'} ${
								body.callback_query.from.first_name
							} ${data.vote > 0 ? '' : 'dis'}likes <b>${foundList.name}</b> (${
								result.score
							} - ${
								Math.round((result.positive / result.score) * 10000) / 100
							}%)`
						);
					}
				});
			}
		} else if (data.type === 'stats') {
			const isAdmin =
				body.callback_query.message.chat.id > 0 ||
				(await bot.checkAdmin(
					body.callback_query.message.chat.id,
					body.callback_query.from.id
				));
			if (isAdmin) {
				Game.findOne({
					chat_id: body.callback_query.message.chat.id,
				})
					.select('chat_id list')
					.exec((err, game) => {
						switch (data.data) {
							case 'list':
								bot.answerCallback(body.callback_query.id, 'List Stats');
								bot.sendKeyboard(
									game.chat_id,
									'<b>List Stats</b>',
									keyboards.stats_list(game)
								);
								break;
							case 'player':
								bot.answerCallback(body.callback_query.id, 'Player Stats');
								console.log(keyboards.stats_player(game));
								bot.sendKeyboard(
									game.chat_id,
									'<b>Player Stats</b>',
									keyboards.stats_player(game)
								);
								break;
							case 'global':
								bot.answerCallback(body.callback_query.id, 'Global Stats');
								bot.queueMessage(game.chat_id, 'Coming Soon');
								break;
							case 'game':
								bot.answerCallback(body.callback_query.id, 'Game Stats');
								bot.sendKeyboard(
									game.chat_id,
									'<b>Game Stats</b>',
									keyboards.stats_game(game)
								);
								break;
						}
					});
			}
		} else if (data.type === 'stat') {
			//bot.notifyAdmin(`${body.callback_query.from.id} (${body.callback_query.from.first_name}) requested stats`);
			bot.answerCallback(body.callback_query.id, '');
			stats.getStats(
				body.callback_query.message.chat.id,
				data,
				body.callback_query.from.id
			);
		} else if (data.type === 'score') {
			if (body.callback_query.from.first_name === '^') return '';
			//bot.notifyAdmin(`${body.callback_query.from.id} (${body.callback_query.from.first_name}) requested stats`);
			bot.answerCallback(body.callback_query.id, 'Score');
			stats.getScores(body.callback_query.message.chat.id, data.id);
		} else if (data.type === 'cat') {
			if (body.callback_query.message.chat.id != config.groupChat) {
				const isAdmin =
					body.callback_query.message.chat.id > 0 ||
					(await bot.checkAdmin(
						body.callback_query.message.chat.id,
						body.callback_query.from.id
					));
				if (isAdmin) {
					let game = await Game.findOne({
						chat_id: body.callback_query.message.chat.id,
					})
						.select('chat_id disabledCategories')
						.exec();
					const categoryIndex = game.disabledCategories.indexOf(data.id);
					if (categoryIndex >= 0) {
						game.disabledCategories.splice(categoryIndex, 1);
					} else {
						if (game.disabledCategories.length === categories.length - 1) {
							return bot.queueMessage(
								body.callback_query.message.chat.id,
								'A minimum of 1 category is required'
							);
						}
						game.disabledCategories.push(data.id);
					}
					game.save((err, savedGame) => {
						if (err)
							return bot.notifyAdmin(
								`Category Save Error: \n${JSON.stringify(err)}`
							);
						bot.answerCallback(
							body.callback_query.id,
							`${data.id} -> ${categoryIndex >= 0 ? 'On' : 'Off'}`
						);
						bot.editKeyboard(
							body.callback_query.message.chat.id,
							body.callback_query.message.message_id,
							keyboards.categories(game)
						);
					});
				} else {
					bot.queueMessage(
						body.callback_query.message.chat.id,
						`Sorry ${data.requestor}, this is a chat admin function`
					);
				}
			}
		} else if (data.type === 'setting') {
			if (body.callback_query.message.chat_id != config.masterChat) {
				const isAdmin =
					body.callback_query.message.chat.id > 0 ||
					(await bot.checkAdmin(
						body.callback_query.message.chat.id,
						body.callback_query.from.id
					));
				if (isAdmin) {
					Game.findOne({
						chat_id: body.callback_query.message.chat.id,
					})
						.select('chat_id settings')
						.exec(async (err, game) => {
							if (err)
								return bot.notifyAdmin(
									`Settings Find Error: \n${JSON.stringify(err)}`
								);
							if (data.id === 'lang') {
								const availableLanguages = await List.aggregate([
									{
										$group: {
											_id: '$language',
											count: { $sum: 1 },
										},
									},
								]).exec();
								bot.editKeyboard(
									body.callback_query.message.chat.id,
									body.callback_query.message.message_id,
									keyboards.languages(game, availableLanguages)
								);
							} else {
								console.log(`${data.id} toggled for ${game._id}`);
								game.settings[data.id] = !game.settings[data.id];
								game.save((err, savedGame) => {
									if (err)
										return bot.notifyAdmin(
											`Settings Save Error: \n${JSON.stringify(err)}`
										);
									bot.answerCallback(
										body.callback_query.id,
										`${data.id} -> ${game.settings[data.id] ? 'On' : 'Off'}`
									);
									bot.editKeyboard(
										body.callback_query.message.chat.id,
										body.callback_query.message.message_id,
										keyboards.settings(game)
									);
								});
							}
						});
				} else {
					bot.queueMessage(
						body.callback_query.message.chat.id,
						`Nice try ${data.requestor} but that's an admin function`
					);
				}
			}
		} else if (data.type === 'lang') {
			Game.findOne({
				chat_id: body.callback_query.message.chat.id,
			})
				.select('chat_id settings')
				.exec((err, game) => {
					if (err)
						return bot.notifyAdmin('Language button\n' + JSON.stringify(err));
					const isSelected = game.settings.languages.includes(data.id);
					if (isSelected) {
						game.settings.languages = game.settings.languages.filter(
							language => language !== data.id
						);
					} else {
						game.settings.languages.push(data.id);
					}
					if (
						!game.settings.languages ||
						game.settings.languages.length === 0
					) {
						game.settings.languages = ['EN'];
					}
					game.save(async (err, savedGame) => {
						if (err)
							return bot.notifyAdmin(
								`Language Save Error: \n${JSON.stringify(err)}`
							);
						bot.answerCallback(
							body.callback_query.id,
							`${data.id} -> ${isSelected ? 'Off' : 'On'}`
						);
						const availableLanguages = await List.aggregate([
							{
								$group: {
									_id: '$language',
									count: { $sum: 1 },
								},
							},
						]).exec();
						bot.editKeyboard(
							body.callback_query.message.chat.id,
							body.callback_query.message.message_id,
							keyboards.languages(game, availableLanguages)
						);
					});
				});
		} else if (data.type === 'pick') {
			Game.findOne({
				chat_id: body.callback_query.message.chat.id,
			})
				.select('chat_id pickedLists')
				.exec((err, game) => {
					if (err)
						return bot.notifyAdmin('Pick list button\n' + JSON.stringify(err));
					List.findOne({
						_id: data.list,
					}).exec((err, list) => {
						const foundList = _.find(
							game.pickedLists,
							pickedList => pickedList == list._id
						);
						if (foundList) {
							bot.queueMessage(
								body.callback_query.message.chat.id,
								`<b>${list.name}</b> is already in the queue, ${data.requestor}`
							);
						} else {
							if (list) {
								game.pickedLists.push(list._id);
								game.save();
								bot.answerCallback(
									body.callback_query.id,
									`${list.name} added`
								);
								bot.queueMessage(
									body.callback_query.message.chat.id,
									`<b>${list.name}</b> added to the queue, ${data.requestor}.\nType /lists to see the queue`
								);
							} else {
								bot.queueMessage(
									body.callback_query.message.chat.id,
									`This list no longer exists`
								);
							}
						}
					});
				});
		} else if (data.type === 'suggest') {
			Game.findOne({
				chat_id: body.callback_query.message.chat.id,
			})
				.select('chat_id list')
				.exec((err, game) => {
					const suggestion = body.callback_query.message.text.substring(
						body.callback_query.message.text.indexOf(' "') + 2,
						body.callback_query.message.text.indexOf('",')
					);

					let message = `<b>${data.id.capitalize()}</b>\n${suggestion}\n<i>By ${
						data.requestor
					}</i>`;
					message += data.id === 'typo' ? `\nList: ${game.list.name}` : '';
					bot.notify(message);
					bot.notifyAdmins(message);
					message +=
						data.id === 'list'
							? '\nNote that you can add your own lists at https://belgocanadian.com/tenthings'
							: '';
					bot.answerCallback(body.callback_query.id, `Suggestion noted`);
					bot.deleteMessage(
						body.callback_query.message.chat.id,
						body.callback_query.message.message_id
					);
					bot.queueMessage(body.callback_query.message.chat.id, message);
				});
		}
		return res.sendStatus(200);
		/*
      } else if (!body.message) {
        msg = {
          id: config.masterChat,
          from: {
            first_name: 'Bot Error'
          },
          command: '/error',
          text: JSON.stringify(body),
          chat: {
            id: config.masterChat
          }
        };*/
	} else if (body.message.chat.id === config.adminChat) {
		//Ignore game commands in the admin chat
		return res.sendStatus(200);
	} else if (!body.message.text) {
		if (body.message.new_chat_participant) {
			Game.findOne({
				chat_id: body.message.chat.id,
			})
				.select('settings')
				.exec((err, game) => {
					if (err) return notifyAdmin(`New Participant Error:\n${err}`);
					if (game && game.settings.intro) {
						bot.queueMessage(
							body.message.chat.id,
							messages.introduction(
								body.message.new_chat_participant.first_name
							)
						);
					}
				});
			return res.sendStatus(200);
		} else if (body.message.group_chat_created) {
			msg = {
				id: body.message.chat.id,
				from: body.from,
				command: '/info',
				chat: body.message.chat,
			};
		} else if (body.message.left_chat_participant) {
			Game.findOne({
				chat_id: body.message.chat.id,
			}).exec((err, game) => {
				if (err) return console.error(err);
				if (!game) return;
				Player.findOne({
					game: game._id,
					id: `${body.message.left_chat_participant.id}`,
				}).exec((err, player) => {
					if (err || !player) return;
					if (player) {
						player.present = false;
						player.save();
					}
				});
			});
			return res.sendStatus(200);
		} else if (
			body.edited_message ||
			body.update_id ||
			body.message.from.is_bot ||
			body.message.game ||
			body.message.photo ||
			body.message.video ||
			body.message.audio ||
			body.message.video_note ||
			body.message.emoji ||
			body.message.voice ||
			body.message.animation ||
			body.message.sticker ||
			body.message.reply_to_message ||
			body.message.migrate_to_chat_id ||
			body.message.pinned_message ||
			body.message.new_chat_title ||
			body.message.new_chat_photo ||
			body.message.document
		) {
			//Ignore these messages as they're just chat interactions
			//console.log('Ignoring this message:');
			//console.log(body.message);
			return res.sendStatus(200);
		} else {
			msg = {
				id: config.masterChat,
				from: {
					first_name: 'Bot Error',
				},
				command: '/error',
				text: JSON.stringify(body),
				chat: {
					id: config.masterChat,
				},
			};
		}
	} else {
		msg = {
			id: body.message.message_id,
			from: body.message.from,
			command: body.message.text.substring(
				0,
				!body.message.text.includes(' ')
					? body.message.text.length
					: body.message.text.indexOf(' ')
			),
			text: body.message.text,
			chat: body.message.chat,
		};
	}
	if (msg.command.includes('@')) {
		if (msg.command.substring(msg.command.indexOf('@') + 1) !== 'TenThings_Bot')
			return res.sendStatus(200);
		msg.command = msg.command.substring(0, msg.command.indexOf('@'));
	}
	try {
		if (!msg.from || !msg.from.id) {
			return res.sendStatus(200);
		}
	} catch (e) {
		console.error(e);
		bot.notifyAdmin(`Can't send message:\n${JSON.stringify(msg)}`);
		return res.sendStatus(200);
	}
	Game.findOne({
		chat_id: msg.chat.id,
	})
		.populate('list.creator')
		.select('-playedLists')
		//.select('chat_id enabled players hints cycles lastCycleDate lastPlayDate listsPlayed guessers streak disabledCategories pickedLists list date minigame tinygame settings')
		.exec((err, existingGame) => {
			if (err) {
				bot.notifyAdmin(`Error finding game: ${msg.chat.id}`);
				return next(err);
			}
			if (!existingGame) {
				createGame(msg.chat.id, msg.from).then(newGame => {
					if (err)
						bot.notifyAdmin(
							'POST: ' + JSON.stringify(err) + '\n' + JSON.stringify(game)
						);
					console.log(`New game created for ${msg.chat.id}`);
					return evaluateCommand(res, msg, newGame.game, newGame.player, true);
				});
			} else {
				Player.findOne({
					game: existingGame._id,
					id: `${msg.from.id}`,
				}).exec((err, player) => {
					if (!player) {
						console.log(
							`Player ${msg.from.id} not found for chat ${existingGame._id}`
						);
						createPlayer(existingGame._id, msg.from).then(
							newPlayer => {
								return evaluateCommand(
									res,
									msg,
									existingGame,
									newPlayer,
									false
								);
							},
							err => {
								bot.notifyAdmin("Can't add new player: " + JSON.stringify(err));
								console.error(err);
								console.log(player);
								console.log(msg.from);
								res.sendStatus(200);
							}
						);
					} else {
						player.first_name = msg.from.first_name;
						player.last_name = msg.from.last_name;
						player.username = msg.from.username;
						player.present = true;
						return evaluateCommand(res, msg, existingGame, player, false);
					}
				});
			}
		});
});

router.get('/', ({ query }, res, next) => {
	const token = query['hub.verify_token'];
	if (query['hub.verify_token'] === config.tokens.facebook.tenthings) {
		res.status(200).send(query['hub.challenge']);
	} else {
		res.sendStatus(200);
	}
});

// Creates the endpoint for our webhook
router.post('/webhook', (req, res) => {
	const body = req.body;
	if (body.object === 'page') {
		// Iterates over each entry - there may be multiple if batched
		body.entry.forEach(({ messaging }) => {
			// Gets the message. entry.messaging is an array, but
			// will only ever contain one message, so we get index 0
			const webhook_event = messaging[0];
			console.log(webhook_event);
			// Get the sender PSID
			const sender_psid = webhook_event.sender.id;
			console.log(`Sender PSID: ${sender_psid}`);
			// Check if the event is a message or postback and
			// pass the event to the appropriate handler function
			if (webhook_event.message) {
				console.log(webhook_event.message);
			} else if (webhook_event.postback) {
				console.log(webhook_event.postback);
			}
		});
		// Returns a '200 OK' response to all requests
		res.status(200).send('EVENT_RECEIVED');
	} else {
		// Returns a '404 Not Found' if event is not = require(a page subscription
		res.sendStatus(404);
	}
});

function countBytes(s) {
	console.log(encodeURI(s).split(/%..|./).length - 1);
}

const evaluateCommand = async (res, msg, game, player, isNew) => {
	//bot.notifyAdmin(tenthings);
	//bot.notifyAdmin(games[msg.chat.id].list);
	if (!msg.from.first_name) {
		console.error('msg without a first_name?');
		console.error(msg);
		return res.sendStatus(200);
	} else {
		res.sendStatus(200);
	}
	/*
  const flood = await floodChecker();
  if (flood) res.sendStatus(200);
  */
	if (game.list.values.length === 0) {
		newRound(game);
	}
	switch (msg.command.toLowerCase()) {
		case '/error':
			bot.queueMessage(msg.chat.id, msg.text);
			break;
		case '/intro':
			bot.queueMessage(msg.chat.id, messages.introduction(msg.from.first_name));
			break;
		case '/logica':
		case '/logic':
			bot.queueMessage(msg.chat.id, messages.logic());
			break;
		case '/comandos':
			bot.queueMessage(msg.chat.id, messages.commands('PT'));
			break;
		case '/commands':
			bot.queueMessage(msg.chat.id, messages.commands());
			break;
		case '/parar':
		case '/stop':
			deactivateGame(game);
			break;
		case '/new':
		case '/start':
			if (isNew) {
				newRound(game);
			} else {
				stats.getList(game, list => {
					let message = `<b>${game.list.name}</b> (${game.list.totalValues})`;
					message += game.list.creator
						? ` by ${game.list.creator.username}\n`
						: '\n';
					message +=
						game.list.categories.length > 0
							? `Categor${
									game.list.categories.length > 1 ? 'ies' : 'y'
							  }: <b>${game.list.categories.join(', ')}</b>\n`
							: '';
					message += game.list.description
						? game.list.description.includes('href')
							? game.list.description
							: `<i>${angleBrackets(game.list.description)}</i>\n`
						: '';
					message += list;
					bot.queueMessage(msg.chat.id, message);
					activateGame(game, true);
				});
			}
			break;
		case '/pule':
		case '/skip':
			if (
				!vetoes[game.id] ||
				vetoes[game.id] < moment().subtract(VETO_DELAY, 'seconds')
			) {
				delete vetoes[game.id];
				let doSkip = false;
				if (skippers[player.id]) {
					if (
						skippers[player.id].lastSkipped <
						moment().subtract(skippers[player.id].delay, 'seconds')
					) {
						doSkip = true;
						delete skippers[player.id];
					} else {
						if (skippers[player.id].delay < 10) {
							skippers[player.id].lastSkipped = moment();
							skippers[player.id].delay += 10;
						} else if (skippers[player.id].delay < 50) {
							skippers[player.id].lastSkipped = moment();
							skippers[player.id].delay += 10;
							bot.queueMessage(
								msg.chat.id,
								`Banned ${player.first_name} from skipping again for ${
									skippers[player.id].delay
								} seconds`
							);
						} else if (skippers[player.id].delay < 60) {
							skippers[player.id].lastSkipped = moment();
							skippers[player.id].delay += 10;
							bot.queueMessage(
								msg.chat.id,
								`If you skip again within ${
									skippers[player.id].delay
								} seconds, ${player.first_name}, you will be banned for 1 hour`
							);
						} else if (skippers[player.id].delay != 3600) {
							skippers[player.id].delay = 3600;
							bot.queueMessage(
								msg.chat.id,
								`Banned ${player.first_name} from skipping for 1 hour`
							);
						}
					}
				} else {
					skippers[player.id] = {
						lastSkipped: moment(),
						delay: 15,
					};
					doSkip = true;
				}
				if (doSkip) {
					activateGame(game, true);
					skip(game, player);
				}
			}
			break;
		case '/veto':
			player.vetoes++;
			player.save();
			if (skips[game.id]) {
				delete skips[game.id];
				vetoes[game.id] = moment();
				bot.queueMessage(
					msg.chat.id,
					`Skip vetoed by ${msg.from.first_name}\nNo skipping allowed for ${VETO_DELAY} seconds`
				);
			} else {
				bot.queueMessage(
					msg.chat.id,
					`I can't find a skip request, ${msg.from.first_name}`
				);
			}
			break;
		case '/estatisticas':
		case '/stats':
			bot.sendKeyboard(
				game.chat_id,
				'<b>Stats</b>',
				keyboards.stats(game.chat_id)
			);
			break;
		case '/lista':
		case '/list':
			try {
				stats.getList(game, list => {
					let message = `<b>${game.list.name}</b> (${game.list.totalValues})`;
					message += game.list.creator
						? ` by ${game.list.creator.username}\n`
						: '\n';
					message +=
						game.list.categories.length > 0
							? `Categor${
									game.list.categories.length > 1 ? 'ies' : 'y'
							  }: <b>${game.list.categories.join(', ')}</b>\n`
							: '';
					message += game.list.description
						? game.list.description.includes('href')
							? game.list.description
							: `<i>${angleBrackets(game.list.description)}</i>\n`
						: '';
					message += list;
					bot.queueMessage(msg.chat.id, message);
					activateGame(game, true);
				});
			} catch (e) {
				console.error(e);
			}
			break;
		case '/erro':
		case '/typo':
			const typo = msg.text.substring(msg.command.length + 1, msg.text.length);
			if (typo && typo != 'TenThings_Bot' && typo != '@TenThings_Bot') {
				player.suggestions++;
				player.save();
				let message = `<b>Typo</b>\n${typo}\nin "${game.list.name}"\n<i>${
					msg.from.username ? `@${msg.from.username}` : msg.from.first_name
				}</i>`;
				bot.notifyAdmins(message);
				bot.notify(message);
				message = `<b>Typo</b>\n<i>${typo}</i>\nThank you, ${
					msg.from.username ? `@${msg.from.username}` : msg.from.first_name
				}`;
				bot.queueMessage(msg.chat.id, message);
			} else {
				bot.queueMessage(
					msg.chat.id,
					`You didn't add a typo ${msg.from.first_name}. Add your message after /typo`
				);
			}
			break;
		case '/bug':
			const bug = msg.text.substring(msg.command.length + 1, msg.text.length);
			if (bug && bug != 'TenThings_Bot' && bug != '@TenThings_Bot') {
				player.suggestions++;
				player.save();
				let message = `<b>Bug</b>\n${bug}\n<i>${
					msg.from.username ? `@${msg.from.username}` : msg.from.first_name
				}</i>`;
				bot.notifyAdmins(message);
				bot.notify(message);
				message = `<b>Bug</b>\n<i>${bug}</i>\nThank you, ${
					msg.from.username ? `@${msg.from.username}` : msg.from.first_name
				}`;
				bot.queueMessage(msg.chat.id, message);
			} else {
				bot.queueMessage(
					msg.chat.id,
					`You didn't add a bug ${msg.from.first_name}. Add your message after /bug`
				);
			}
			break;
		case '/feature':
			const feature = msg.text.substring(
				msg.command.length + 1,
				msg.text.length
			);
			if (feature && feature != 'TenThings_Bot' && bug != '@TenThings_Bot') {
				player.suggestions++;
				player.save();
				let message = `<b>Feature</b>\n${feature}\n<i>${
					msg.from.username ? `@${msg.from.username}` : msg.from.first_name
				}</i>`;
				bot.notifyAdmins(message);
				bot.notify(message);
				message = `<b>Feature</b>\n<i>${feature}</i>\nThank you, ${
					msg.from.username ? `@${msg.from.username}` : msg.from.first_name
				}`;
				bot.queueMessage(msg.chat.id, message);
			} else {
				bot.queueMessage(
					msg.chat.id,
					`You didn't add a feature ${msg.from.first_name}. Add your message after /feature`
				);
			}
			break;
		case '/pesquisar':
		case '/search':
			const search = msg.text.substring(
				msg.command.length + 1,
				msg.text.length
			);
			if (search && search != 'TenThings_Bot' && search != '@TenThings_Bot') {
				player.searches++;
				player.save();
				console.log(`${game.chat_id} - Search for ${search}`);
				const regex = search
					.replace(new RegExp('[^a-zA-Z0-9 ]+', 'g'), '.*')
					.split(' ')
					.reduce((result, word) => `${result}(?=.*${word}.*)`, '');
				let lists = await List.find({
					$or: [
						{
							search: {
								$regex: `.*${regex}.*`,
								$options: 'gi',
							},
						},
						{
							categories: {
								$regex: `.*${regex}.*`,
								$options: 'gi',
							},
						},
						{
							'values.value': {
								$regex: `.*${regex}.*`,
								$options: 'gi',
							},
						},
					],
				}).select('name');
				if (lists.length > 0) {
					bot.sendKeyboard(
						game.chat_id,
						`<b>Which list would you like to queue?</b>`,
						keyboards.lists(lists)
					);
				} else {
					bot.queueMessage(
						game.chat_id,
						`I didn't find any corresponding lists for <b>"${search}"</b>, ${msg.from.first_name}.\nSimpler queries return better results.`
					);
				}
			} else {
				bot.queueMessage(
					msg.chat.id,
					`You didn't search anything ${msg.from.first_name}. Add your message after /search`
				);
			}
			break;
		case '/suggest':
			const suggestion = msg.text.substring(
				msg.command.length + 1,
				msg.text.length
			);
			if (
				suggestion &&
				suggestion != 'TenThings_Bot' &&
				suggestion != '@TenThings_Bot'
			) {
				bot.notify(suggestion);
			}
			let message =
				'The suggest command has been retired.\nPlease use one of the following commands instead:\n';
			message += '/search -> Search lists to queue\n';
			message += '/typo -> Report a typo in the current list\n';
			message += '/bug -> Report a bug with the bot\n';
			message += '/feature -> Suggest an enhancement feature\n';
			message +=
				'<i>Note that lists can be added and enhanced by anyone at https://belgocanadian.com/tenthings</i>';
			bot.queueMessage(game.chat_id, message);
			break;
		case '/dica':
		case '/hint':
			activateGame(game, false);
			if (
				game.list.values.filter(({ guesser }) => !guesser.first_name).length !==
				0
			) {
				hint(game, player);
			}
			break;
		case '/minidica':
		case '/minihint':
			hint(game, player, 'minigame');
			break;
		case '/dicaminusculo':
		case '/tinyhint':
			hint(game, player, 'tinygame');
			break;
		case '/notify':
			if (msg.chat.id === config.masterChat) {
				Game.find({})
					.select('chat_id')
					.then(games => {
						bot.broadcast(
							games.map(({ chat_id }) => chat_id),
							msg.text.replace('/notify ', '')
						);
					});
			}
			break;
		/*
    case '/pause':
      if (msg.chat.id === config.masterChat) {
        redis.get('pause').then(value => {
          const pause = value === 'true';
          bot.notifyAdmin(`Pause = ${!pause}`);
          redis.set('pause', !pause);
        });
      }
      break;
      */
		case '/eu':
		case '/me':
			stats.getStats(
				msg.chat.id,
				{
					id: 'p_',
				},
				msg.from.id
			);
			break;
		case '/pontuacao':
		case '/score':
			bot.queueMessage(game.chat_id, await stats.getDailyScores(game));
			break;
		case '/minijogo':
		case '/minigame':
			if (!game.minigame.answer) {
				minigame.create(game, msg);
			} else {
				let message = '<b>Find the connection</b>\n';
				message += game.minigame.lists.reduce((msg, list) => {
					msg += `- ${list}\n`;
					return msg;
				}, '');
				message += '\n';
				message += `<b>${hints.getHint(
					game.minigame.hints,
					game.minigame.answer
				)}</b>`;
				//message += game.minigame.answer.conceal(game.minigame.date < moment().subtract(1, 'hours') ? 'aeoui' : '');
				bot.queueMessage(msg.chat.id, message);
			}
			break;
		case '/jogominusculo':
		case '/tinygame':
			if (!game.tinygame.answer) {
				tinygame.create(game, msg);
			} else {
				let message = '<b>Find the list name</b>\n';
				message += game.tinygame.clues.reduce((msg, clue) => {
					msg += `- ${clue}\n`;
					return msg;
				}, '');
				message += '\n';
				message += `<b>${hints.getHint(
					game.tinygame.hints,
					game.tinygame.answer
				)}</b>`;
				//message += game.tinygame.answer.conceal(game.tinygame.date < moment().subtract(1, 'hours') ? 'aeoui' : '');
				bot.queueMessage(msg.chat.id, message);
			}
			break;
		case '/categorias':
		case '/categories':
			if (game.chat_id != config.groupChat) {
				bot.checkAdmin(game.chat_id, msg.from.id).then(admin => {
					if (admin) {
						bot.sendKeyboard(
							game.chat_id,
							'<b>Categories</b>',
							keyboards.categories(game)
						);
					} else {
						bot.queueMessage(
							game.chat_id,
							`Sorry ${msg.from.first_name}, that's an admin only function`
						);
					}
				}, console.error);
			}
			break;
		case '/confi':
		case '/settings':
			if (game.chat_id != config.groupChat) {
				bot.checkAdmin(game.chat_id, msg.from.id).then(admin => {
					if (admin) {
						bot.sendKeyboard(
							game.chat_id,
							'<b>Settings</b>',
							keyboards.settings(game)
						);
					} else {
						bot.queueMessage(
							game.chat_id,
							`Sorry ${msg.from.first_name}, that's an admin only function`
						);
					}
				});
			}
			break;
		case '/check':
			if (msg.from.id === config.masterChat) {
				bot.queueMessage(
					msg.chat.id,
					'Yes, master. Let me send you what you need!'
				);
				bot.notifyAdmin(
					`Chat id: ${msg.chat.id}\nGame _id: ${
						game._id
					}\nSettings:\n${JSON.stringify(game.settings)}\nList: ${
						game.list.name
					}\nMinigame: ${game.minigame.answer}\nTinygame: ${
						game.tinygame.answer
					}`
				);
			}
			break;
		case '/flush':
			if (msg.from.id === config.masterChat) {
				game.lists = [];
				//game.playedLists = [];
				game.save();
				bot.queueMessage(msg.chat.id, 'Flushed this chat');
			}
			break;
		case '/ping':
			bot.queueMessage(msg.chat.id, 'pong');
			break;
		case '/hello':
			bot.queueMessage(
				msg.chat.id,
				'You already had me but you got greedy, now you ruined it'
			);
			break;
		case '/queue':
			getQueue().then(message => {
				bot.sendMessage(msg.chat.id, message);
			}, console.error);
			break;
		case '/listas':
		case '/lists':
			if (game.pickedLists.length > 0) {
				List.find({
					_id: {
						$in: game.pickedLists,
					},
				}).exec((err, lists) => {
					let message = '<b>Upcoming lists</b>\n';
					for (const list of lists.slice(0, 10)) {
						message += `- ${list.name}\n`;
					}
					bot.queueMessage(msg.chat.id, message);
				});
			} else {
				bot.queueMessage(
					msg.chat.id,
					'There are no lists queued, use the /search [message] command to find some'
				);
			}
			break;
		default:
			if (game.enabled) {
				queueGuess(game, player, msg);
			}
	}
};
/*
List.updateMany({}, {
  $unset: {
    category: ''
  }
}).exec((err, done) => {
  if (err) return console.error(err);
  console.log(done);
});
*/
router.get('/queue', async (req, res, next) => {
	res.json(await getQueue());
});

module.exports = router;

const getQueue = async () => {
	const count = await guessQueue.count();
	const outgoing = await bot.getQueue();
	const webhook = await bot.getWebhook();
	let message = `<b>Queue</b>\n`;
	message += `${count} correct answers queued\n`;
	message += `${outgoing} outgoing messages queued (max 30/sec)\n`;
	message += `${webhook.pending_update_count} incoming messages pending in Telegram (max 100/sec)`;
	return message;
};

const floodChecker = async () => {
	const webhook = await bot.getWebhook();
	return webhook.pending_update_count > 500;
};

const activateGame = (game, save = false) => {
	if (!game.enabled) {
		game.lastPlayDate = moment();
		game.enabled = true;
		bot.sendMessage(game.chat_id, 'Ten Things started');
		if (save) game.save();
	}
};

const deactivateGame = game => {
	game.enabled = false;
	game.save();
	bot.sendMessage(
		game.chat_id,
		'I am now sleeping, type /list or /start to wake me up.\nInactive games will be deleted after 30 days'
	);
};

/*
getQueue().then(message => {
  bot.notifyAdmin(message);
}, console.error);
*/
/*
const fs = require('fs');

List
.find()
.lean()
.exec((err, lists) => {
  let answers = lists.reduce((answers, list) => {
    for (const value of list.values) {
      if (!answers[value.value]) answers[value.value] = [list.name.replace(',', ' ')];
      else answers[value.value].push(list.name.replace(',', ' '));
    }
    return answers;
  }, {});
  let result = Object.keys(answers).reduce((result, answer) => {
    if (answers[answer] && answers[answer].length === 2) {
      result.push({
        answer: answer,
        lists: answers[answer]
      });
    }
    return result;
  }, []);

  const string = result.reduce((result, answer) => {
    result += `${answer.answer},${answer.lists.reduce((str, list) => {
      str += list + ',';
      return str;
    }, '')}\n`
  return result},
     '')
  fs.writeFile("./temp/test.csv", string, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  });

  //console.log(result);
});
*/
/*
List.find({})
  .select('_id name category categories')
  .exec((err, lists) => {
    Promise.all(
      lists.map(list => {
        if (!list.categories) {
          list.categories = [];
        }
        if (list.categories.length === 0) {
          list.categories.push(list.category);
        }
        return list.save();
      })).then(console.log, console.error);
  });
  */
/*
List
  .aggregate([{
    $unwind: '$values'
  }, {
    $group: {
      _id: '$name',
      creators: {
        $push: '$values.creator'
      }
    }
  }])
  .exec((err, lists) => {
    console.log(lists.filter(list => _.uniq(list.creators).length > 1));
  });
  */
/*
List
.find()
.lean()
.exec((err, lists) => {
  let answers = lists.reduce((answers, list) => {
    for (const value of list.values) {
      if (!answers[value.value]) answers[value.value] = [list.name.replace(',', ' ')];
      else answers[value.value].push(list.name.replace(',', ' '));
    }
    return answers;
  }, {});
  let result = Object.keys(answers).reduce((result, answer) => {
    if (answers[answer] && answers[answer].length > 2) {
      result.push({
        answer: answer,
        lists: answers[answer]
      });
    }
    return result;
  }, []);
  console.log(result.length);
  console.log(result.reduce((count, answer) => {
    if (!count[answer.lists.length]) count[answer.lists.length] = 1;
    else count[answer.lists.length]++;
    if (answer.lists.length >= 30) console.log(answer.answer + ' ' +  answer.lists.length);
    return count;
  }, {}));

});
*/
/*
Game.find({
    //_id: '5e6863596b0cae091d896170',
    'list.name': 'Marvel Comics - Women That Fly'
  })
  .exec((err, games) => {
    console.log(games.map(game => game._id));
    //game.chat_id = '-1001195181419'; //'-1001380477486'
    //game.save();
  });
  */
/*
getGame(config.groupChat, {
  id: '592503547',
  first_name: 'Somebody',
  last_name: 'That I Used to Know',
  username: 'Gotye'
}).then(console.log);
*/
/*
Game.findOne({
    //_id: '5ea571afe7076e790d20182d',
    chat_id: config.groupChat
  }, {
    players: {
      $elemMatch: {
        id: '592503547'
      }
    }
  })
  .select('_id list guessers')
  .exec((err, game) => {
    console.log(game);

        Game.updateOne({
            //_id: '5ea571afe7076e790d20182d',
            chat_id: config.groupChat,
            'players.id': '592503547'
          }, {
            $set: {
              "players.$.first_name": 'LauLaue'
            }
          })
          .exec((err, game) => {
            if (err) return console.error(err);
            console.log(game);
          });

    //game.chat_id = '-1001195181419'; //'-1001380477486'
    //game.disabledCategories = ['Non-English'];
    //game.save();
  });
*/
/*
Game.findOne({
  'list.name': 'Things designed to hold liquids'
}).populate('list.creator', 'username').exec((err, game) => {
  if (err) console.error(err);
  console.log(game);
});
*/
/*
User.findOne({
  _id: '5ae15f14b5f7883ff0497339'
}).exec((err, user) => {
  if (err) console.error(err);
  console.log(user);
});
*/
/*
List.findOne({
    _id: '5eb69f1b5bcb682e62770f1a'
  })
  .lean()
  .exec((err, list) => {
    //console.log(list);
    let score = list.votes.reduce((score, vote) => score + vote.vote, 0);
    console.log(score);
  });*/
/*
request(`https://api.themoviedb.org/3/search/movie?api_key=${moviedbAPIKey}&query=${encodeURIComponent('good will hunting')}`, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.parse(response.body).results[0]);
  }
});*/
