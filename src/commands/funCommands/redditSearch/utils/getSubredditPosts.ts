import { getCustomSubRedditData } from '../redditApiReq'
import { getRandomNumber } from '../../redditSearch'
import { Message } from 'discord.js'
import { apiEmbed } from '../apiEmbed'
import { getRandomEmbedColor } from '../../../../utils/embedColors'

type Props = {
  msg: Message
  arg: string
}

export const getSubredditPosts = async ({ msg, arg }: Props) => {
  const embedColor: string = getRandomEmbedColor()
  if (arg.length > 0) {
    const results = await getCustomSubRedditData(arg)
    const randomId: number = getRandomNumber(results)
    const data = results[randomId]?.data
    const embed = apiEmbed(data, embedColor)

    msg.channel.send(embed)
  } else {
    msg.reply('Coloca un subReddit valido para buscar')
  }
}
