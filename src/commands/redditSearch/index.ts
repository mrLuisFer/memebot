import { Message } from 'discord.js'
import { getData, getCustomSubRedditData } from './redditApiReq'
import { getRandomEmbedColor } from '../../utils/embedColors'
import { apiEmbed } from './apiEmbed'

type Props = {
  msg: Message
  arg: string
  firstArg: string
}

function getRandomNumber(array: any[]): number {
  const n: number = Math.round(Math.random() * array.length)
  return n
}

export const getRandomMeme = async ({ msg, arg, firstArg }: Props) => {
  const embedColor: string = getRandomEmbedColor()

  if (firstArg === '--sr') {
    const results = await getCustomSubRedditData(arg)
    const randomId: number = getRandomNumber(results)
    const data = results[randomId].data
    const embed = apiEmbed(data, embedColor)

    msg.channel.send(embed)
  } else {
    const results = await getData()
    const randomId: number = getRandomNumber(results)
    const data = results[randomId].data

    const embed = apiEmbed(data, embedColor)
    msg.channel.send(embed)
  }
}
