import { getData } from '../redditApiReq'
import { apiEmbed } from '../apiEmbed'
import { getRandomNumber } from '../../redditSearch'
import { getRandomEmbedColor } from '../../../../utils/embedColors'
import { Message, MessageEmbed } from 'discord.js'

export const getPosts = async ({ msg }: { msg: Message }): Promise<void> => {
  const embedColor: string = getRandomEmbedColor()
  const results = await getData()
  const randomId: number = getRandomNumber(results)
  const data = results[randomId]?.data

  if (data?.over_18) {
    const overEmbed: MessageEmbed = new MessageEmbed()
      .setTitle('**El contenido del Post puede ser muy sensible**')
      .setColor(embedColor)
      .setImage('https://media.giphy.com/media/l46Czzp0KEHSO7OdG/giphy.gif')

    msg.channel.send(overEmbed)
  } else {
    const embed = apiEmbed(data, embedColor)
    msg.channel.send(embed)
  }
}
