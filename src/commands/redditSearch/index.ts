import { Message } from 'discord.js'
import {
  getData,
  getCustomSubRedditData,
  getCustomSubRedditNews,
  getRandomPosts,
} from './redditApiReq'
import { getRandomEmbedColor } from '../../utils/embedColors'
import { apiEmbed } from './apiEmbed'
import { infoEmbed } from './infoEmbed'

function getRandomNumber(array: any[]): number {
  const n: number = Math.round(Math.random() * array.length)
  return n
}

type Props = {
  msg: Message
  arg: string
  firstArg: string
}
export const getRandomMeme = async ({ msg, arg, firstArg }: Props) => {
  const embedColor: string = getRandomEmbedColor()
  if (firstArg === '--sr') {
    if (arg.length > 0) {
      const results = await getCustomSubRedditData(arg)
      const randomId: number = getRandomNumber(results)
      const data = results[randomId]?.data
      const embed = apiEmbed(data, embedColor)

      msg.channel.send(embed)
    } else {
      msg.reply('Coloca un subReddit valido para buscar')
    }
  } else if (firstArg === '--n' || firstArg === '--news') {
    if (arg.length > 0) {
      const results = await getCustomSubRedditNews(arg)
      const randomId: number = getRandomNumber(results)
      const data = results[randomId]?.data

      msg.channel.send(data)
    } else {
      console.log('Hanling error in --news')
      msg.reply('Coloca un subReddit valido para buscar')
    }
  } else if (firstArg === '--random' || firstArg === '--r') {
    const results = await getRandomPosts()
    const randomId: number = getRandomNumber(results)
    const data = results[randomId]?.data

    msg.channel.send(data)
  } else if (firstArg === '--help' || firstArg?.startsWith('--') || firstArg === '--h') {
    const embed = infoEmbed(embedColor)
    msg.channel.send(embed)
  } else {
    const results = await getData()
    const randomId: number = getRandomNumber(results)
    const data = results[randomId]?.data

    const embed = apiEmbed(data, embedColor)
    msg.channel.send(embed)
  }
}
