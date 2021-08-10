import { Message, MessageEmbed } from 'discord.js'
import { getRandomEmbedColor } from '../../utils/embedColors'
import { client } from '../../bot'

export const repo = (msg: Message) => {
  const embedColor: string = getRandomEmbedColor()

  const username = client.user?.username
  const embed: MessageEmbed = new MessageEmbed()
    .setTitle(`Repositorio de ${username}`)
    .setColor(embedColor)
    .setAuthor(username, `${client.user?.displayAvatarURL()}`)
    .setImage('https://media.giphy.com/media/dxn6fRlTIShoeBr69N/giphy.gif')
    .setDescription(
      `
    El repositorio del Bot se encuentra en GitHub:
    **https://github.com/mrLuisFer/memebot**

    Si no sabes usar Git puedes revisar estas guias que te ayudaran a hacerlo:
    **https://git-guia.netlify.app/**

    **https://rogerdudler.github.io/git-guide/index.es.html**
    `.trim()
    )

  msg.channel.send(embed)
}
