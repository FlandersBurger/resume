"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsPauseRoute = void 0;
const express_1 = require("express");
exports.tenthingsPauseRoute = (0, express_1.Router)();
const queue_1 = __importDefault(require("@root/queue"));
const telegram_1 = __importDefault(require("@root/connections/telegram"));
exports.tenthingsPauseRoute.post("/", async (_, res) => {
    const value = await queue_1.default.get("pause");
    const pause = value === "true";
    telegram_1.default.notifyAdmin(`Pause = ${!pause}`);
    queue_1.default.set("pause", `${!pause})`);
    res.json(!pause);
});
exports.tenthingsPauseRoute.get("/", async (_, res) => {
    const value = await queue_1.default.get("pause");
    res.json(value === "true");
});
//# sourceMappingURL=pause.js.map