/* eslint-disable import/first */
require('dotenv').config()

const botToken: string | undefined = process.env.BOT_TOKEN
const redditToken: string | undefined = process.env.REDDIT_TOKEN

export const config = {
  token: botToken,
  redditToken,
  status: ['Reddit', 'Shiposts'],
  prefix: '!',
}
