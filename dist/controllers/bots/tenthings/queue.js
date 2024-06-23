"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueue = void 0;
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const guesses_1 = require("./guesses");
const getQueue = async () => {
    const guessCount = await (0, guesses_1.getCount)();
    const outgoing = await telegram_1.default.getQueueCount();
    const { pending_update_count } = await telegram_1.default.getWebhook();
    let message = `<b>Queue</b>\n`;
    message += `${guessCount} correct answers queued\n`;
    message += `${outgoing} outgoing messages queued (max 30/sec)\n`;
    message += `${pending_update_count} incoming messages pending in Telegram (max 100/sec)`;
    return message;
};
exports.getQueue = getQueue;
//# sourceMappingURL=queue.js.map