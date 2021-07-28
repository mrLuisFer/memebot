/* eslint-disable import/first */
require("dotenv").config();

const botToken: string | undefined = process.env.BOT_TOKEN;

export const config = {
  token: botToken,
  status: ["Reddit", "Shiposts"],
  prefix: "!",
};
