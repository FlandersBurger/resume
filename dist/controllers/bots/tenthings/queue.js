"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueue = void 0;
const telegram_1 = __importDefault(require("@root/connections/telegram"));
const guesses_1 = require("./guesses");
const getQueue = () => __awaiter(void 0, void 0, void 0, function* () {
    const guessCount = yield (0, guesses_1.getCount)();
    const outgoing = yield telegram_1.default.getQueueCount();
    const { pending_update_count } = yield telegram_1.default.getWebhook();
    let message = `<b>Queue</b>\n`;
    message += `${guessCount} correct answers queued\n`;
    message += `${outgoing} outgoing messages queued (max 30/sec)\n`;
    message += `${pending_update_count} incoming messages pending in Telegram (max 100/sec)`;
    return message;
});
exports.getQueue = getQueue;
//# sourceMappingURL=queue.js.map