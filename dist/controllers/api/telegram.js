"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegramRoute = void 0;
const telegram_1 = __importStar(require("../../connections/telegram"));
const models_1 = require("../../models");
const express_1 = require("express");
const users_1 = require("./users");
exports.telegramRoute = (0, express_1.Router)();
exports.telegramRoute.post("/:id/link", async (req, res) => {
    if ((0, users_1.checkUser)(req.params.id, res)) {
        const data = req.body;
        if ((0, telegram_1.verifyTelegramUser)(data)) {
            res.sendStatus(401);
        }
        else {
            const user = await models_1.User.findOne({ _id: res.locals.user._id });
            if (!user)
                res.sendStatus(400);
            else {
                user.telegramId = data.id;
                await user.save();
                await models_1.Player.updateMany({ id: data.id }, { $set: { user: user._id } });
                console.log(user.username + " linked their Telegram account");
                telegram_1.default.notifyAdmin(user.username + " linked their Telegram account (ID: " + user._id + ")");
                res.sendStatus(200);
            }
        }
    }
});
//# sourceMappingURL=telegram.js.map