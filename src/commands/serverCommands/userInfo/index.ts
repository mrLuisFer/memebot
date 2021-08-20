import { Message } from 'discord.js'
import { getRandomEmbedColor } from '../../../utils/embedColors'
import { userEmbed } from './userEmbed'
import { infoEmbed } from './infoEmbed'

type Props = {
  msg: Message
  firstArg: string
}

export const userInfo = async ({ msg, firstArg }: Props) => {
  const embedColor: string = getRandomEmbedColor()
  const user = msg?.mentions?.users.first()
  if (firstArg === '--help' || firstArg === '--h' || firstArg?.startsWith('--')) {
    msg.channel.send(infoEmbed(embedColor))
  } else if (user !== undefined && user !== null) {
    const embed = await userEmbed(user, embedColor)

    msg.channel.send(embed)
  } else {
    msg.channel.send('Por favor menciona a un usuario')
  }
}
