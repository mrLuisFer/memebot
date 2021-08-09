import { Message, MessageEmbed } from 'discord.js'
import { getRandomEmbedColor } from '../../utils/embedColors'

type Props = {
  msg: Message
  args: string[]
}

export const avatarCmd = ({ msg, args }: Props) => {
  const embedColor: string = getRandomEmbedColor()

  if (args[0].length > 1) {
    const user = msg.mentions.users.first()
    const authorEmbed: MessageEmbed = new MessageEmbed()
      .setTitle(`Avatar de ${user}`)
      .setColor(embedColor)

    return msg.channel.send(authorEmbed)
  } else {
    const clientAvatar: string = msg.author?.displayAvatarURL({ format: 'png' })
    const authorEmbed: MessageEmbed = new MessageEmbed()
      .setTitle(`Avatar de ${msg.author.username}`)
      .setColor(embedColor)
      .setImage(clientAvatar)

    return msg.channel.send(authorEmbed)
  }
}
