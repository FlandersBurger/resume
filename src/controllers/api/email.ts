import { Request, Response, Router } from "express";
import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

function buildHtml(email: { name: string; email: string; phone: string; about: string; message: string }) {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
          <td style="padding:8px 12px;font-size:12px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;vertical-align:top;width:80px">${label}</td>
          <td style="padding:8px 12px;font-size:14px;color:#333;vertical-align:top">${value}</td>
        </tr>`
      : "";

  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 16px">
    <tr><td align="center">
      <table width="520" cellpadding="0" cellspacing="0" style="background:#fff;border:1px solid #ddd;border-radius:6px;overflow:hidden">

        <tr>
          <td style="background:#333;padding:18px 24px">
            <span style="color:#fff;font-size:18px;font-weight:600">belgocanadian.com</span>
            <span style="color:#aaa;font-size:13px;margin-left:10px">New message</span>
          </td>
        </tr>

        <tr>
          <td style="padding:8px 0">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row("From", email.name)}
              ${row("Email", email.email ? `<a href="mailto:${email.email}" style="color:#337ab7">${email.email}</a>` : "")}
              ${row("Phone", email.phone)}
              ${row("Subject", email.about)}
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:0 12px 24px">
            <div style="border-top:1px solid #eee;padding-top:16px;font-size:14px;color:#333;line-height:1.6;white-space:pre-wrap">${email.message}</div>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export const emailRoute = Router();

emailRoute.post("/", async (req: Request, res: Response) => {
  const email = req.body;
  try {
    const info = await transporter.sendMail({
      from: email.email || process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `[belgocanadian] ${email.about}${email.name ? ` — ${email.name}` : ""}`,
      text: `From: ${email.name}\nEmail: ${email.email}\nPhone: ${email.phone}\nSubject: ${email.about}\n\n${email.message}`,
      html: buildHtml(email),
    });
    console.log("Email sent: " + info.response);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
