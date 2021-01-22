const moment = require('moment');
const config = require('../config');
const request = require('request-promise');

module.exports = function () {
	const api = this;

	api.init = () => {
		const token = Buffer.from(
			`${config.tokens.spotifyapi.id}:${config.tokens.spotifyapi.secret}`
		);
		const options = {
			method: 'POST',
			url: 'https://accounts.spotify.com/api/token',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${token.toString('base64')}`,
			},
			body: 'grant_type=client_credentials',
			json: true, // Automatically stringifies the body to JSON
		};
		request(options, (error, r, body) => {
			if (error) return console.error(error);
			api.TOKEN = body.access_token;
		});
	};
};
