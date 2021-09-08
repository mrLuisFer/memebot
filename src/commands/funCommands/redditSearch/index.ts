import { Message } from 'discord.js'
import { getData, getCustomSubRedditData, getRandomPosts } from './redditApiReq'
import { getRandomEmbedColor } from '../../../utils/embedColors'
import { apiEmbed } from './apiEmbed'
import { infoEmbed } from './infoEmbed'
import { sugEmbed } from './sugEmbed'

// Utils
import { getNewsPosts } from './utils/getNewsPosts'

export function getRandomNumber(array: any[]): number {
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
    getNewsPosts({ arg, msg })
  } else if (firstArg === '--random' || firstArg === '--r') {
    const results = await getRandomPosts()
    const randomId: number = getRandomNumber(results)
    const data = results[randomId].data

    const embed = apiEmbed(data, embedColor)
    msg.channel.send(embed)
  } else if (firstArg === '--sug') {
    const embed = sugEmbed(msg, embedColor)
    msg.channel.send(embed)
  } else if (firstArg === '--help' || firstArg?.startsWith('--') || firstArg === '--h') {
    msg.channel.send(infoEmbed(embedColor))
  } else {
    const results = await getData()
    const randomId: number = getRandomNumber(results)
    const data = results[randomId]?.data

    const embed = apiEmbed(data, embedColor)
    msg.channel.send(embed)
  }
}
