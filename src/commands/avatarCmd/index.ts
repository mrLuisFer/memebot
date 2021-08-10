import { Message } from 'discord.js'
import { getRandomEmbedColor } from '../../utils/embedColors'
import { avatarEmbed } from './avatarEmbed'

type Props = {
  msg: Message
  firstArg: string
}

export const avatarCmd = ({ msg, firstArg }: Props) => {
  const embedColor: string = getRandomEmbedColor()
  console.log(firstArg)

  if (firstArg?.length > 1) {
    const user = msg.mentions.users.first()
    if (user !== undefined) {
      const embed = avatarEmbed({ embedColor, user })
      msg.channel.send(embed)
    } else {
      msg.reply('Usuario no encontrado')
    }
  } else {
    const msgAuthor = msg.author
    const embed = avatarEmbed({ embedColor, user: msgAuthor })
    msg.channel.send(embed)
  }
}
