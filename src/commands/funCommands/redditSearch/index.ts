import { Message } from 'discord.js'
import { getData, getCustomSubRedditData } from './redditApiReq'
import { getRandomEmbedColor } from '../../../utils/embedColors'
import { apiEmbed } from './apiEmbed'
import { infoEmbed } from './infoEmbed'
import { sugEmbed } from './sugEmbed'

// Utils
import { getNewsPosts } from './utils/getNewsPosts'
import { getRandomPosts } from './utils/getRandomPosts'

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
    getRandomPosts({ msg })
  } else if (firstArg === '--sug' || firstArg === '--list') {
    msg.channel.send(sugEmbed(msg, embedColor))
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
