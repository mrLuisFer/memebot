import { getData } from '../redditApiReq'
import { apiEmbed } from '../apiEmbed'
import { getRandomNumber } from '../../redditSearch'
import { getRandomEmbedColor } from '../../../../utils/embedColors'
import { Message } from 'discord.js'

export const getPosts = async ({ msg }: { msg: Message }): Promise<void> => {
  const embedColor: string = getRandomEmbedColor()
  const results = await getData()
  const randomId: number = getRandomNumber(results)
  const data = results[randomId]?.data

  const embed = apiEmbed(data, embedColor)
  msg.channel.send(embed)
}
