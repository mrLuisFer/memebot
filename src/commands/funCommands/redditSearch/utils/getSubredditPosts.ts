import { getCustomSubRedditData } from '../redditApiReq'
import { getRandomNumber } from '../../redditSearch'
import { Message, TextChannel } from 'discord.js'
import { apiEmbed } from '../apiEmbed'
import { getRandomEmbedColor } from '../../../../utils/embedColors'

type Props = {
  msg: Message | TextChannel | any
  arg: string
}

export const getSubredditPosts = async ({ msg, arg }: Props) => {
  const isNsfw: boolean = msg.channel.nsfw
  const embedColor: string = getRandomEmbedColor()

  if (!isNsfw) {
    msg.reply('El contenido necesita estar en un canal nsfw')
  } else {
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
}
