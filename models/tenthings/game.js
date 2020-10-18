var db = require('../../db');
var TenThings = {};

for (const name in db) {
	TenThings[name] = db[name].model('TenThings', {
		chat_id: {
			type: String,
			required: true,
		},
		enabled: {
			type: Boolean,
			required: true,
			default: true,
		},
		hints: {
			type: Number,
			required: true,
			default: 0,
		},
		cycles: {
			type: Number,
			required: true,
			default: 0,
		},
		lastCycleDate: {
			type: Date,
			required: true,
			default: Date.now,
		},
		lastPlayDate: {
			type: Date,
			required: false,
			default: new Date(2019, 5, 15).valueOf(),
		},
		listsPlayed: {
			type: Number,
			required: true,
			default: 0,
		},
		guessers: [
			{
				type: String,
				required: true,
			},
		],
		streak: {
			player: {
				type: String,
				required: false,
			},
			count: {
				type: Number,
				required: false,
			},
		},
		disabledCategories: [String],
		playedLists: [
			{
				type: String,
			},
		],
		pickedLists: [
			{
				type: String,
			},
		],
		list: {
			_id: String,
			name: String,
			description: String,
			category: String,
			categories: [String],
			totalValues: Number,
			creator: {
				type: String,
				ref: 'User',
				required: false,
			},
			values: [
				{
					value: String,
					blurb: String,
					guesser: {
						id: {
							type: String,
							required: false,
						},
						first_name: {
							type: String,
							required: false,
						},
						last_name: {
							type: String,
							required: false,
						},
						username: {
							type: String,
							required: false,
						},
					},
				},
			],
		},
		date: {
			type: Date,
			required: true,
			default: Date.now,
		},
		minigame: {
			answer: {
				type: String,
				required: false,
			},
			date: {
				type: Date,
				required: true,
				default: Date.now,
			},
			lists: [
				{
					type: String,
					required: false,
				},
			],
			plays: {
				type: Number,
				default: 0,
			},
		},
		settings: {
			intro: {
				type: Boolean,
				required: true,
				default: false,
			},
			sass: {
				type: Boolean,
				required: true,
				default: true,
			},
			snubs: {
				type: Boolean,
				required: true,
				default: true,
			},
			updates: {
				type: Boolean,
				required: true,
				default: true,
			},
			languages: [
				{
					type: String,
					required: true,
					default: 'EN',
				},
			],
		},
	});
}

module.exports = (database = 'master') => TenThings[database];
