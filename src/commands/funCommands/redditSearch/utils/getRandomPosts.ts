import { getRandomApiPosts } from '../redditApiReq'
import { getRandomEmbedColor } from '../../../../utils/embedColors'
import { getRandomNumber } from '../../redditSearch'
import { apiEmbed } from '../apiEmbed'
import { Message } from 'discord.js'

type Props = {
  msg: Message
}

export const getRandomPosts = async ({ msg }: Props): Promise<void> => {
  const embedColor: string = getRandomEmbedColor()

  const results = await getRandomApiPosts()
  const randomId: number = getRandomNumber(results)
  const data = results[randomId].data

  const embed = apiEmbed(data, embedColor)
  msg.channel.send(embed)
}
