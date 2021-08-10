import { Message, MessageEmbed } from 'discord.js'
import { config } from '../../config'
import { getRandomEmbedColor } from '../../utils/embedColors'

export const userInfo = async (msg: Message) => {
  const user = msg.mentions.users.first()
  console.log(user)
  const embedColor: string = getRandomEmbedColor()

  if (user !== undefined && user !== null) {
    const timeStamp = user?.createdTimestamp
    const dateObject = new Date(timeStamp)

    const dateFormat = dateObject.toLocaleString()

    const embed = new MessageEmbed()
      .setTitle(`📒 ${user?.username} info`)
      .setAuthor(user?.tag, `${user?.displayAvatarURL()}`)
      .setColor(embedColor)
      .setDescription(
        `
        \n
      🥐 User: **${await user?.fetch()}**
      
      ⚡ ID: **${user?.id}**

      📜 Discriminator: **#${user?.discriminator}**

      🤖 Es un Bot?: **${user?.bot ? 'Yes' : 'No'}**

      🌛 Created: **${dateFormat}**

      Si quieres ver el avatar completo utilizar el comando:
      **${config.prefix}avatar**
      `.trim()
      )
      .setThumbnail(`${user?.displayAvatarURL()}`)
    msg.channel.send(embed)
  } else {
    msg.channel.send('Por favor menciona a un usuario')
  }
}
