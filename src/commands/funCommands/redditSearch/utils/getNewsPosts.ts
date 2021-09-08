import { getCustomSubRedditNews } from '../redditApiReq'
import { getRandomNumber } from '../../redditSearch'
import { apiEmbed } from '../apiEmbed'
import { getRandomEmbedColor } from '../../../../utils/embedColors'
import { Message } from 'discord.js'

type Props = {
  arg: string
  msg: Message
}

export const getNewsPosts = async ({ arg, msg }: Props): Promise<void> => {
  const embedColor: string = getRandomEmbedColor()

  if (arg.length > 0) {
    const results = await getCustomSubRedditNews(arg)
    const randomId: number = getRandomNumber(results)
    const data = results[randomId]?.data

    const embed = apiEmbed(data, embedColor)
    msg.channel.send(embed)
  } else {
    msg.reply('Coloca un subReddit valido para buscar')
  }
}
