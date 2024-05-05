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
exports.tenthingsPauseRoute = void 0;
const express_1 = require("express");
exports.tenthingsPauseRoute = (0, express_1.Router)();
const queue_1 = __importDefault(require("../../../../queue"));
const telegram_1 = __importDefault(require("../../../../connections/telegram"));
exports.tenthingsPauseRoute.post("/", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const value = yield queue_1.default.get("pause");
    const pause = value === "true";
    telegram_1.default.notifyAdmin(`Pause = ${!pause}`);
    queue_1.default.set("pause", `${!pause})`);
    res.json(!pause);
}));
exports.tenthingsPauseRoute.get("/", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const value = yield queue_1.default.get("pause");
    res.json(value === "true");
}));
//# sourceMappingURL=pause.js.map