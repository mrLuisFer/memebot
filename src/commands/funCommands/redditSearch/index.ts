import { Message } from 'discord.js'
import { getRandomEmbedColor } from '../../../utils/embedColors'
import { infoEmbed } from './infoEmbed'
import { sugEmbed } from './sugEmbed'

// Utils
import { getNewsPosts } from './utils/getNewsPosts'
import { getRandomPosts } from './utils/getRandomPosts'
import { getSubredditPosts } from './utils/getSubredditPosts'
import { getPosts } from './utils/getPosts'

export function getRandomNumber(array: any[]): number {
  const n: number = Math.round(Math.random() * array.length)
  return n
}

type Props = {
  msg: Message
  arg: string
  firstArg: string
}
export const getRandomMeme = async ({ msg, arg, firstArg }: Props) => {
  const embedColor: string = getRandomEmbedColor()
  if (firstArg === '--sr') {
    getSubredditPosts({ msg, arg })
  } else if (firstArg === '--n' || firstArg === '--news') {
    getNewsPosts({ arg, msg })
  } else if (firstArg === '--random' || firstArg === '--r') {
    getRandomPosts({ msg })
  } else if (firstArg === '--sug' || firstArg === '--list') {
    msg.channel.send(sugEmbed(msg, embedColor))
  } else if (firstArg === '--help' || firstArg?.startsWith('--') || firstArg === '--h') {
    msg.channel.send(infoEmbed(embedColor))
  } else {
    getPosts({ msg })
  }
}
