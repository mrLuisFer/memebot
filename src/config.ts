/* eslint-disable import/first */
require('dotenv').config()

const botToken: string | undefined = process.env.BOT_TOKEN
// const redditToken: string | undefined = process.env.REDDIT_TOKEN
const botPrefix: string = 'm.'

export const config = {
  token: botToken,
  status: [
    'Reddit',
    'Shiposts',
    'Anime',
    'Discord',
    'YouTube',
    'Twitch',
    'Netflix',
    'Github',
    `Prefix: ${botPrefix}`,
    'Pornhub',
  ],
  prefix: botPrefix,
}
