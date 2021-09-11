import { Message, User } from 'discord.js'
import { getRandomEmbedColor } from '../../../utils/embedColors'
import { welcomeEmbedMsg } from './welcomeEmbedMsg'
import { helpMsg } from './helpMsg'
import { welcomeCanvaMsg } from './welcomeCanvaMsg'

type Props = {
  msg: Message
  firstArg: string
}

export const welcome = ({ msg, firstArg }: Props) => {
  const embedColor: string = getRandomEmbedColor()
  const user: User = msg?.mentions?.users.first()!
  if (firstArg === '--help' || firstArg === '--h') {
    msg.channel.send(helpMsg({ embedColor }))
  } else if (firstArg === '--canva') {
    welcomeCanvaMsg({ msg, user })
  } else if (user !== undefined && user !== null) {
    const embed = welcomeEmbedMsg({ user, embedColor })
    msg.channel.send(embed)
  } else {
    msg.channel.send('Por favor menciona a un usuario')
  }
}
