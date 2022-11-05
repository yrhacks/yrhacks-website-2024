import fetch from "isomorphic-unfetch";

var md5 = require("md5");

export default async (req, res) => {
  const { email } = req.body;

  console.log({ email });

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    const SUBSCRIBER_HASH = md5(email.toLowerCase());

    const data = {
      email_address: email,
      status: "subscribed",
    };

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${SUBSCRIBER_HASH}`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "PUT",
      }
    );
    if (response.status >= 400) {
      return res.status(400).json({
        error: `An error was encountered. Email us at yorkregionhacks@gmail.com and we'll subscribe you the old fashioned way.`,
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
