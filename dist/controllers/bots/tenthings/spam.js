"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSpam = void 0;
const moment_1 = __importDefault(require("moment"));
const config = require("../../../config");
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const cache = {};
const checkSpam = (body) => {
    const from = body.message ? body.message.from.id : body.callback_query.from.id;
    const name = body.message ? body.message.from.first_name : body.callback_query.from.first_name;
    const chat = body.message ? body.message.chatId : body.callback_query.message.chatId;
    if (cache[from]) {
        if (cache[from].lastMessage < (0, moment_1.default)().subtract(10, "seconds")) {
            delete cache[from];
        }
        else if (cache[from].lastMessage > (0, moment_1.default)()) {
            cache[from].count++;
            cache[from].lastMessage = (0, moment_1.default)().add(10, "seconds");
            return true;
        }
        else if (cache[from].count <= 30) {
            cache[from].count++;
            if (cache[from].count === 20) {
                telegram_1.default.queueMessage(chat, `You sure seem to be sending a lot of messages, ${name}. I'm keeping an eye on you`);
            }
            else if (cache[from].count === 30) {
                cache[from].lastMessage = (0, moment_1.default)();
                telegram_1.default.queueMessage(chat, `Ok, ${name}, calm down, I can't keep up.  Please stay silent for 10 seconds so I can process your stuff`);
            }
        }
        else if (cache[from].count > 35) {
            cache[from].count++;
            if (cache[from].count === 35) {
                telegram_1.default.exportChatInviteLink(chat).then((url) => {
                    telegram_1.default.notifyAdmin(`Possible spammer: ${name} (${from}) in chat ${chat} ${chat == config.groupChat ? " - The main chat!" : ""}\n\n${body.message}\n\nURL: ${url ? url : "N/A"}`);
                });
                /*
                        } else if (cache[from].count % 10 === 0) {
                          bot.notifyAdmin(`Possible spammer: ${name} (${from}) -> ${cache[from].count} messages`);*/
            }
            cache[from].lastMessage = (0, moment_1.default)();
            return true;
        }
        else {
            return true;
        }
    }
    else {
        cache[from] = {
            lastMessage: (0, moment_1.default)(),
            count: 1,
        };
    }
    return false;
};
exports.checkSpam = checkSpam;
//# sourceMappingURL=spam.js.map