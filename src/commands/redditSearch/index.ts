import { Message } from 'discord.js'
import { getData } from './redditApiReq'
import { getRandomEmbedColor } from '../../utils/embedColors'
import { apiEmbed } from './apiEmbed'

type Props = {
  msg: Message
  arg: string
}

export const getRandomMeme = async ({ msg, arg }: Props) => {
  const apiResults = await getData()
  const randomApiResults: number = Math.round(Math.random() * apiResults.length)

  const data = apiResults[randomApiResults].data

  const embedColor: string = getRandomEmbedColor()

  const embed = apiEmbed(data, embedColor)
  return msg.channel.send(embed)
}
