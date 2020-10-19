const moment = require('moment');
const _ = require('underscore');
const categories = require('./categories');
const languages = require('./languages');
const THUMBS_UP = '\ud83d\udc4d';
const THUMBS_DOWN = '\ud83d\udc4e';
const OFF = '\ud83c\udf11';
const ON = '\ud83c\udf15';

module.exports = {
	stats: function (chat_id) {
		return {
			inline_keyboard: [
				[
					{
						text: 'List Stats',
						callback_data: JSON.stringify({
							type: 'stats',
							data: 'list',
						}),
					},
					{
						text: 'Player Stats',
						callback_data: JSON.stringify({
							type: 'stats',
							data: 'player',
						}),
					},
				],
				[
					{
						text: 'Global Stats',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'global',
						}),
					},
					{
						text: 'Game Stats',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'g',
						}),
					},
				],
			],
		};
	},
	stats_list: function (game) {
		return {
			inline_keyboard: [
				[
					{
						text: '"' + game.list.name + '"',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'l_' + game.list._id,
						}),
					},
				],
				[
					{
						text: 'Most Skipped',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'mostskipped',
						}),
					},
					{
						text: 'Least Skipped',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'leastskipped',
						}),
					},
				],
				[
					{
						text: 'Most Hints Asked',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'mosthinted',
						}),
					},
					{
						text: 'Least Hints Asked',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'leasthinted',
						}),
					},
				],
				[
					{
						text: 'Least Popular Lists by Votes',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'leastpopular',
						}),
					},
					{
						text: 'Most Popular Lists by Votes',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'mostpopular',
						}),
					},
				],
				[
					{
						text: 'Most Played Lists',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'mostplayed',
						}),
					},
				],
			],
		};
	},
	stats_player: function (game) {
		return {
			inline_keyboard: [
				[
					{
						text: 'My Stats',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'p_',
						}),
					},
					{
						text: 'Most Minigames Answered',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'minigames',
						}),
					},
				],
				[
					{
						text: 'Daily Score',
						callback_data: JSON.stringify({
							type: 'score',
							id: 'd',
						}),
					},
					{
						text: 'Top Daily Score',
						callback_data: JSON.stringify({
							type: 'score',
							id: 'td',
						}),
					},
				],
				[
					{
						text: 'Top Win Ratio',
						callback_data: JSON.stringify({
							type: 'score',
							id: 'tr',
						}),
					},
					{
						text: 'Top Overall Score',
						callback_data: JSON.stringify({
							type: 'score',
							id: 'ts',
						}),
					},
				],
				[
					{
						text: 'Top Average',
						callback_data: JSON.stringify({
							type: 'score',
							id: 'ta',
						}),
					},
					{
						text: 'Best No Hint Streak',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'hstreak',
						}),
					},
				],
				[
					{
						text: 'Best Answer Streak',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'astreak',
						}),
					},
					{
						text: 'Best Play Streak',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'pstreak',
						}),
					},
				],
				[
					{
						text: 'Most Skips Requested',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'skippers',
						}),
					},
					{
						text: 'Least Skips Requested',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'unskippers',
						}),
					},
				],
				[
					{
						text: 'Most Days Played',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'plays',
						}),
					},
					{
						text: 'Most Correct Answers',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'answers',
						}),
					},
				],
				[
					{
						text: 'Most Snubs',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'snubs',
						}),
					},
					{
						text: 'Least Snubs',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'unsnubs',
						}),
					},
				],
				[
					{
						text: 'Most Hints Asked',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'hints',
						}),
					},
					{
						text: 'Least Hints Asked',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'unhints',
						}),
					},
				],
				[
					{
						text: 'Most Wins',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'wins',
						}),
					},
					{
						text: 'Least Wins',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'unwins',
						}),
					},
				],
				[
					{
						text: 'Voted Most on Lists',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'mostvoted',
						}),
					},
					{
						text: 'Voted Least on Lists',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'leastvoted',
						}),
					},
				],
				[
					{
						text: 'Voted Most Positively on Lists',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'mostpositive',
						}),
					},
					{
						text: 'Voted Most Negatively on Lists',
						callback_data: JSON.stringify({
							type: 'stat',
							id: 'leastnegative',
						}),
					},
				],
			],
		};
	},
	suggestion: {
		inline_keyboard: [
			[
				{
					text: `🆕 List`,
					callback_data: JSON.stringify({
						type: 'suggest',
						id: 'list',
					}),
				},
				{
					text: `☑ Feature`,
					callback_data: JSON.stringify({
						type: 'suggest',
						id: 'feature',
					}),
				},
			],
			[
				{
					text: `⚠ Typo`,
					callback_data: JSON.stringify({
						type: 'suggest',
						id: 'typo',
					}),
				},
				{
					text: `⛔ Bug`,
					callback_data: JSON.stringify({
						type: 'suggest',
						id: 'bug',
					}),
				},
			],
		],
	},
	categories: ({ chat_id, disabledCategories }) => {
		return {
			inline_keyboard: categories.sort().reduce((result, category, i) => {
				const button = {
					text: `${category}: ${
						disabledCategories.indexOf(category) < 0 ? ON : OFF
					}`,
					callback_data: JSON.stringify({
						type: 'cat',
						id: category,
						game: chat_id,
					}),
				};
				if (i % 2 === 0) {
					result.push([button]);
				} else {
					result[result.length - 1].push(button);
				}
				return result;
			}, []),
		};
	},
	settings: ({ chat_id, settings }) => {
		return {
			inline_keyboard: [
				[
					{
						text: `Player intro: ${settings.intro ? ON : OFF}`,
						callback_data: JSON.stringify({
							type: 'setting',
							id: 'intro',
							game: chat_id,
						}),
					},
					{
						text: `Sass: ${settings.sass ? ON : OFF}`,
						callback_data: JSON.stringify({
							type: 'setting',
							id: 'sass',
							game: chat_id,
						}),
					},
				],
				[
					{
						text: `Daily updates: ${settings.updates ? ON : OFF}`,
						callback_data: JSON.stringify({
							type: 'setting',
							id: 'updates',
							game: chat_id,
						}),
					},
					{
						text: `Languages: ${settings.languages.join(', ')}`,
						callback_data: JSON.stringify({
							type: 'setting',
							id: 'lang',
							game: chat_id,
						}),
					},
					/*
                    {
                      'text': `Snub Messages: ${settings.snubs ? THUMBS_UP : OFF}`,
                      'callback_data': JSON.stringify({
                        type: 'setting',
                        id: 'snubs',
                        game: game
                      })
                    },*/
				],
			],
		};
	},
	languages: ({ chat_id, settings }, availableLanguages) => {
		return {
			inline_keyboard: languages
				.filter(language =>
					_.some(
						availableLanguages,
						availableLanguage => availableLanguage._id === language.code
					)
				)
				.sort()
				.reduce((result, language, i) => {
					const button = {
						text: `${language.code} - ${language.native} (${
							_.find(
								availableLanguages,
								availableLanguage => availableLanguage._id === language.code
							).count
						}): ${settings.languages.includes(language.code) ? ON : OFF}`,
						callback_data: JSON.stringify({
							type: 'lang',
							id: language.code,
							game: chat_id,
						}),
					};
					if (i % 2 === 0) {
						result.push([button]);
					} else {
						result[result.length - 1].push(button);
					}
					return result;
				}, []),
		};
	},
	like: function (game) {
		return {
			inline_keyboard: [
				[
					{
						text: THUMBS_UP,
						callback_data: JSON.stringify({
							type: 'rate',
							list: game.list._id,
							vote: 1,
						}),
					},
					{
						text: THUMBS_DOWN,
						callback_data: JSON.stringify({
							type: 'rate',
							list: game.list._id,
							vote: -1,
						}),
					},
				],
			],
		};
	},
	lists: lists => ({
		inline_keyboard: _.shuffle(lists)
			.slice(0, 10)
			.sort()
			.reduce((result, list, i) => {
				result.push([
					{
						text: `${list.name}`,
						callback_data: JSON.stringify({
							type: 'pick',
							list: list._id,
						}),
					},
				]);
				return result;
			}, []),
	}),
};
