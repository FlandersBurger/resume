"use strict";
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
exports.emailRoute.post("/", async (req, res) => {
    const email = req.body;
    try {
        const info = await transporter.sendMail({
            from: email.email,
            to: process.env.GMAIL_USER,
            subject: email.about,
            text: JSON.stringify(email),
        });
        console.log("Email sent: " + info.response);
        res.sendStatus(200);
    }
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});
//# sourceMappingURL=email.js.map