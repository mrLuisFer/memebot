import { Message, MessageEmbed } from 'discord.js'
import { getRandomEmbedColor } from '../../utils/embedColors'

export const userInfo = async (msg: Message) => {
  const user = msg.mentions.users.first()
  console.log(user)
  const embedColor: string = getRandomEmbedColor()

  if (user !== undefined && user !== null) {
    const embed = new MessageEmbed()
      .setTitle(`${user?.username} info`)
      .setAuthor(user?.tag, `${user?.displayAvatarURL()}`)
      .setColor(embedColor)
      .setDescription(
        `
      User: ${await user?.fetch()}
      
      ID: ${user?.id}

      Discriminator: #${user?.discriminator}

      Bot? ${user?.bot ? 'Yes' : 'No'}

      `
      )
      .setThumbnail(user?.displayAvatarURL())
      .setFooter(`Created: ${user?.createdAt}`, `${user?.displayAvatarURL()}`)
    msg.channel.send(embed)
  } else {
    msg.channel.send('Por favor menciona a un usuario')
  }
}
