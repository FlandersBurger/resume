import { Request, Response, Router } from "express";
import { createTransport } from "nodemailer";
const config = require("@/config");

const transporter = createTransport(config.gmail);

export const emailRoute = Router();

//https://www.google.com/recaptcha/api/siteverify
emailRoute.post("/", async (req: Request, res: Response) => {
  var email = req.body;
  try {
    const info = await transporter.sendMail({
      from: email.email,
      to: config.gmail.auth.user,
      subject: email.about,
      text: JSON.stringify(email),
    });
    console.log("Email sent: " + info.response);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});
