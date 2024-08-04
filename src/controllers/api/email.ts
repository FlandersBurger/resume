import { Request, Response, Router } from "express";
import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export const emailRoute = Router();

//https://www.google.com/recaptcha/api/siteverify
emailRoute.post("/", async (req: Request, res: Response) => {
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
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
