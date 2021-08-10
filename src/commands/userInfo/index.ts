import { Message } from 'discord.js'
import { getRandomEmbedColor } from '../../utils/embedColors'
import { userEmbed } from './userEmbed'

type Props = {
  msg: Message
  firstArg: string
}

export const userInfo = async ({ msg, firstArg }: Props) => {
  console.log(firstArg)
  if (firstArg === '--help' || firstArg.startsWith('--')) {
    return msg.channel.send('Help')
  } else {
    const user = msg.mentions.users.first()
    console.log(user)
    const embedColor: string = getRandomEmbedColor()

    msg.channel.send('Help?')
    if (user !== undefined && user !== null) {
      const embed = await userEmbed(user, embedColor)

      msg.channel.send(embed)
    } else {
      msg.channel.send('Por favor menciona a un usuario')
    }
  }
}
