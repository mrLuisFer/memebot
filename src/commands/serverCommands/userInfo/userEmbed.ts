import { MessageEmbed, User } from 'discord.js'
import { config } from '../../../config'

export const userEmbed = async (user: User, embedColor: string): Promise<MessageEmbed> => {
  const timeStamp = user?.createdTimestamp
  const dateFormat = new Date(timeStamp).toDateString()

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
  return embed
}
