const request = require('request');
const Queue = require('bull');
const config = require('../config');

const TOKEN = config.tokens.telegram.tenthings;

const messageQueue = new Queue('sendMessage', {
	redis: {
		port: config.redis.port,
		host: 'localhost',
		password: config.redis.password,
	},
	limiter: {
		max: 30,
		duration: 1000,
	},
});
messageQueue.on('completed', function (job) {
	//Job finished we remove it]
	job.remove();
});

function TelegramBot() {
	const bot = this;

	bot.init = TOKEN => {
		bot.token = TOKEN;
		return new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${bot.token}/getMe`;
			request(url, (error, r, body) => {
				if (error) return;
				const response = JSON.parse(body).result;
				if (!response) return;
				bot.id = response.id || '';
				bot.first_name = response.first_name || '';
				bot.last_name = response.last_name || '';
				bot.username = response.username || '';
				bot.language_code = response.language_code || '';
				resolve();
			});
		});
	};

	bot.setWebhook = api =>
		new Promise((resolve, reject) => {
			//var url = 'https://api.telegram.org/beta/bot' + bot.token + '/setWebhook?url=https://belgocanadian.com/bots/' + api;
			const allowed_updates = JSON.stringify(['message', 'callback_query']);
			const url = `https://api.telegram.org/bot${bot.token}/setWebhook?url=https://belgocanadian.com/bots/${api}&allowed_updates=${allowed_updates}`;
			request(url, (error, r, body) => {
				if (error) return console.error(error);
				console.log(body);
				resolve(body);
			});
		});

	bot.getWebhook = () =>
		new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${bot.token}/getWebhookInfo`;
			request(url, (error, r, body) => {
				if (error) return;
				const response = JSON.parse(body).result;
				if (!response) return;
				resolve(response);
			});
		});

	bot.deleteWebhook = () =>
		new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/beta/bot${bot.token}/deleteWebhook`;
			request(url, (error, r, body) => {
				if (error) return;
				resolve(body);
			});
		});

	bot.sendMessage = (channel, message) => {
		message = encodeURIComponent(message);
		return new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${channel}&disable_notification=true&parse_mode=html&text=${message}`;
			request(url, (err, r, body) => {
				if (err) {
					console.error('Send Fail');
					console.error(err);
					//return reject(err);
				}
			});
			resolve();
		});
	};

	bot.deleteMessage = (channel, message_id) => {
		const url = `https://api.telegram.org/beta/bot${bot.token}/deleteMessage?chat_id=${channel}&message_id=${message_id}`;
		request(url, (error, r, body) => {
			if (error) return;
		});
	};

	bot.queueMessage = (channel, message) => {
		messageQueue.add({
			channel,
			message,
		});
	};

	messageQueue.process(
		async ({ data }) => await bot.sendMessage(data.channel, data.message)
	);

	bot.getQueue = async () => await messageQueue.count();

	bot.kick = (channel, user, minutes) => {
		if (!minutes) minutes = 1;
		let date = new Date();
		date.setTime(date.getTime() + minutes * 60 * 1000);
		date = Math.floor(date / 1000);
		return new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${bot.token}/kickChatMember?chat_id=${channel}&user_id=${user}&until_date=${date}`;
			request(url, (error, r, body) => {
				if (error) return;
				resolve();
			});
		});
	};

	bot.notifyAdmin = msg => {
		bot.queueMessage(config.masterChat, msg);
	};

	bot.notify = msg => {
		bot.queueMessage(config.noticeChannel, msg);
	};

	bot.notifyAdmins = (msg, keyboard) => {
		if (keyboard) bot.sendKeyboard(config.adminChat, msg, keyboard);
		else bot.queueMessage(config.adminChat, msg);
	};

	bot.broadcast = (channels, message) => {
		channels.forEach((channel, index) => {
			setTimeout(() => {
				bot.queueMessage(channel, message);
			}, index * 50);
		});
	};

	bot.getChat = channel =>
		new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${bot.token}/getChat?chat_id=${channel}`;
			request(encodeURI(url), (error, r, body) => {
				if (error)
					return reject({
						id: channel,
						code: 500,
						error,
					});
				const response = JSON.parse(body);
				if (!response || !response.ok)
					return reject({
						id: channel,
						code: 404,
					});
				resolve({
					id: channel,
					code: 200,
				});
			});
		});

	bot.exportChatInviteLink = channel =>
		new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${bot.token}/exportChatInviteLink?chat_id=${channel}`;
			request(encodeURI(url), (error, r, body) => {
				if (error) resolve();
				const response = JSON.parse(body);
				if (!response || !response.ok || !response.result) resolve();
				resolve(response.result);
			});
		});

	bot.getChat = channel =>
		new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${bot.token}/getChat?chat_id=${channel}`;
			request(encodeURI(url), (error, r, body) => {
				if (error) resolve();
				const response = JSON.parse(body);
				if (!response || !response.ok || !response.result) resolve();
				if (response.result.invite_link) return resolve(response.result.invite_link);
				else if (response.result.username) return resolve(`@${response.result.username}`);
				resolve();
			});
		});

	bot.getChatMember = (channel, user_id) =>
		new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${bot.token}/getChatMember?chat_id=${channel}&user_id=${user_id}`;
			request(url, (error, r, body) => {
				if (error) return reject(error);
				const response = JSON.parse(body).result;
				resolve(
					!(
						!response ||
						['restricted', 'left', 'kicked'].includes(response.status)
					)
				);
			});
		});

	bot.checkAdmin = (channel, user_id) =>
		new Promise((resolve, reject) => {
			if (channel > 0 || user_id === config.masterChat) resolve(true);
			const url = `https://api.telegram.org/bot${bot.token}/getChatMember?chat_id=${channel}&user_id=${user_id}`;
			request(url, (error, r, body) => {
				if (error) return reject(error);
				const response = JSON.parse(body).result;
				resolve(
					response && ['creator', 'administrator'].includes(response.status)
				);
			});
		});

	bot.sendKeyboard = (channel, message, keyboard) =>
		new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${
				bot.token
			}/sendMessage?chat_id=${channel}&disable_notification=true&parse_mode=html&text=${message}&reply_markup=${JSON.stringify(
				keyboard
			)}`;
			request(encodeURI(url), (error, r, body) => {
				if (error) return;
				resolve();
			});
		});

	bot.sendPhoto = (channel, photo) =>
		new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${bot.token}/sendPhoto?chat_id=${channel}&photo=${photo}`;
			request(encodeURI(url), (error, r, body) => {
				if (error) return;
				resolve();
			});
		});

	bot.sendAnimation = (channel, animation) =>
		new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${bot.token}/sendAnimation?chat_id=${channel}&animation=${animation}`;
			request(encodeURI(url), (error, r, body) => {
				if (error) return;
				resolve();
			});
		});

	bot.getChatMember = (channel, user_id) =>
		new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${bot.token}/getChatMember?chat_id=${channel}&user_id=${user_id}`;
			request(url, (error, r, body) => {
				const response = JSON.parse(body).result;
				if (error) return;
				if (
					!response ||
					['restricted', 'left', 'kicked'].includes(response.status)
				)
					return reject();
				resolve(response);
			});
		});

	bot.editKeyboard = (channel, message_id, keyboard) =>
		new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${
				bot.token
			}/editMessageReplyMarkup?chat_id=${channel}&message_id=${message_id}&reply_markup=${JSON.stringify(
				keyboard
			)}`;
			request(encodeURI(url), (error, r, body) => {
				if (error) return;
				resolve();
			});
		});

	bot.answerCallback = (callback_query_id, text) =>
		new Promise((resolve, reject) => {
			const url = `https://api.telegram.org/bot${bot.token}/answerCallbackQuery?callback_query_id=${callback_query_id}&text=${text}`;
			request(encodeURI(url), (error, r, body) => {
				if (error) return;
				resolve();
			});
		});

	bot.getName = () => {
		if (bot.last_name) {
			return `${bot.first_name} ${bot.last_name}`;
		} else {
			return bot.first_name;
		}
	};

	bot.introduceYourself = () => {
		console.log(
			`Hello, my name is ${bot.getName()}. You can talk to me through my username: @${
				bot.username
			}`
		);
	};

	bot.reset = () => {
		let url = `https://api.telegram.org/bot${TOKEN}/setWebhook?url=`;
		request(url, (error, r, body) => {
			if (error) return console.error(error);
			url = `https://api.telegram.org/bot${TOKEN}/getUpdates?offset=-5`;
			request(url, (error, r, body) => {
				if (error) return console.error(error);
				bot.init(TOKEN);
			});
		});
	};
}

const b = new TelegramBot();

b.init(TOKEN).then(() => {
	b.getWebhook().then(response => {
		//console.log(response);
		if (
			response &&
			'https://belgocanadian.com/bots/tenthings' === response.url
		) {
			console.log('Webhook Set');
		} else {
			b.setWebhook('tenthings').then(body => {
				b.introduceYourself();
			});
		}
	});
});

/*
let url = `https://api.telegram.org/bot${TOKEN}/setWebhook?url=`;
request(url, (error, r, body) => {
  if (error) return console.error(error);
  console.log(body);
  url = `https://api.telegram.org/bot${TOKEN}/getUpdates?offset=-5`;
  request(url, (error, r, body) => {
    if (error) return console.error(error);
    console.log(body);
  });
});*/

module.exports = b;
