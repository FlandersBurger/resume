"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketServer = void 0;
const lodash_1 = require("lodash");
const ws_1 = __importDefault(require("ws"));
const clients = [];
class WebSocketServer {
    constructor(server) {
        var wss = new ws_1.default.Server({ server: server });
        wss.on("connection", function (ws) {
            clients.push(ws);
            ws.on("message", function (message) {
                console.log("received: %s", message);
            });
            ws.on("close", function () {
                (0, lodash_1.remove)(clients, ws);
            });
        });
    }
    broadcast(topic, data) {
        var json = JSON.stringify({ topic: topic, data: data });
        clients.forEach(function (client) {
            client.send(json);
        });
    }
}
exports.WebSocketServer = WebSocketServer;
//# sourceMappingURL=websockets.js.map