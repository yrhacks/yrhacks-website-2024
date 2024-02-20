// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
export const config = { runtime: 'experimental-edge' };

type Data = {
  message: string;
};

const nodemailer = require("nodemailer");
const EMAIL = process.env.EMAIL_USERNAME;
const PASSWORD = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
  secure: true,
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    const mailData = {
      from: email,
      to: "yrhacks@gapps.yrdsb.ca",
      subject: `[Website] Message from ${name} - ${email}`,
      text: message,
    };

    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) {
        console.log("error:", err);
        res.status(400).json({ message: "Invalid Request" });
      }
      res.status(200).json({ message: "Email sent successfully!" });
    });
  } else {
    res.status(400).json({ message: "Invalid Request" });
  }
}
