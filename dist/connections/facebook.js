"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_1 = __importDefault(require("../http-client"));
class Facebook {
    constructor(token) {
        this.queueMessage = async (chat_id, message) => {
            var request_body = {
                recipient: {
                    id: chat_id,
                },
                message: message,
            };
            const { data } = await (0, http_client_1.default)().post("https://graph.facebook.com/v2.6/me/messages", request_body, {
                headers: { access_token: this.token },
            });
            console.log(data);
        };
        this.token = token;
    }
}
const api = new Facebook(process.env.FACEBOOK_TOKEN);
exports.default = api;
//# sourceMappingURL=facebook.js.map