import { Message } from 'discord.js'
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
  const user = msg?.mentions?.users.first()
  if (firstArg === '--help' || firstArg === '--h' || firstArg?.startsWith('--')) {
    msg.channel.send(helpMsg({ embedColor }))
  } else if (user !== undefined && user !== null) {
    const embed = welcomeEmbedMsg({ user, embedColor })
    msg.channel.send(embed)
  } else if (firstArg === '--canva') {
    welcomeCanvaMsg()
  } else {
    msg.channel.send('Por favor menciona a un usuario')
  }
}
