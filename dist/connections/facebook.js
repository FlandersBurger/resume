"use strict";
var request = require("request");
module.exports = function () {
    var bot = this;
    bot.init = function (TOKEN) {
        bot.token = TOKEN;
        return new Promise(function (resolve, reject) {
            var url = "https://api.telegram.org/bot" + bot.token + "/getMe";
            request(url, function (error, r, body) {
                var response = JSON.parse(body).result;
                if (error)
                    return;
                if (!response)
                    return;
                bot.id = response.id || "";
                bot.first_name = response.first_name || "";
                bot.last_name = response.last_name || "";
                bot.username = response.username || "";
                bot.language_code = response.language_code || "";
                resolve();
            });
        });
    };
    bot.setWebhook = function (api) {
        return new Promise(function (resolve, reject) {
            var url = "https://api.telegram.org/bot" + bot.token + "/setWebhook?url=https://belgocanadian.com/bots/" + api;
            request(url, function (error, r, body) {
                var response = JSON.parse(body).result;
                if (error)
                    return;
                if (!response)
                    return;
                resolve();
            });
        });
    };
    bot.queueMessage = function (chat_id, message) {
        var request_body = {
            recipient: {
                id: chat_id,
            },
            message: message,
        };
        request({
            uri: "https://graph.facebook.com/v2.6/me/messages",
            qs: { access_token: config.get(process.env.FACEBOOK_TOKEN) },
            method: "POST",
            json: request_body,
        }, function (err, res, body) {
            if (!err) {
                console.log(body);
            }
            else {
                console.error("Unable to send message:" + err);
            }
        });
    };
};
//# sourceMappingURL=facebook.js.map