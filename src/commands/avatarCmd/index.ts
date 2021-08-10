import { Message } from 'discord.js'
import { getRandomEmbedColor } from '../../utils/embedColors'
import { avatarEmbed } from './avatarEmbed'
import { infoEmbed } from './infoEmbed'

type Props = {
  msg: Message
  firstArg: string
}

export const avatarCmd = async ({ msg, firstArg }: Props) => {
  const embedColor: string = getRandomEmbedColor()

  if (firstArg === '--help' || firstArg === '--h' || firstArg?.startsWith('--')) {
    msg.channel.send(infoEmbed(embedColor))
  } else if (firstArg?.length > 1) {
    const user = msg.mentions.users.first()
    if (user !== undefined) {
      const embed = avatarEmbed({ embedColor, user })
      msg.channel.send(embed)
    } else {
      msg.reply(`Usuario **${firstArg}** no encontrado`)
      await msg.react('😓')
    }
  } else {
    const msgAuthor = msg.author
    const embed = avatarEmbed({ embedColor, user: msgAuthor })
    msg.channel.send(embed)
  }
}
