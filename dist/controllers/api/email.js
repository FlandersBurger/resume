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
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailRoute = void 0;
const express_1 = require("express");
const nodemailer_1 = require("nodemailer");
const transporter = (0, nodemailer_1.createTransport)({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
    },
});
exports.emailRoute = (0, express_1.Router)();
//https://www.google.com/recaptcha/api/siteverify
exports.emailRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var email = req.body;
    try {
        const info = yield transporter.sendMail({
            from: email.email,
            to: process.env.GMAIL_USER,
            subject: email.about,
            text: JSON.stringify(email),
        });
        console.log("Email sent: " + info.response);
        return res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}));
//# sourceMappingURL=email.js.map