import { Message } from 'discord.js'
import fetch from 'node-fetch'
import { errorEmbed } from './errorEmbed'
import { getRandomErrorGif } from '../../utils/gifs/errorGifs'
import { embedMsg } from './embedMsg'
import { infoEmbed } from './infoEmbed'
import { getRandomEmbedColor } from '../../utils/embedColors'

type Props = {
  msg: Message
  arg: string
  firstArg: string
}

export const npm = async ({ msg, arg, firstArg }: Props): Promise<void> => {
  const errorGif: string = getRandomErrorGif()
  const embedColor: string = getRandomEmbedColor()

  if (arg.length > 0) {
    const response = await fetch(`https://api.npms.io/v2/package/${arg.toLocaleLowerCase()}`)
    const data = await response.json()

    if (firstArg === '--help' || firstArg === '--h') {
      const embed = infoEmbed(embedColor)
      msg.channel.send(embed)
    } else if (
      data !== null &&
      data !== undefined &&
      data.collected !== undefined &&
      data.collected.metadata !== undefined
    ) {
      const embed = embedMsg(data, embedColor)
      msg.channel.send(embed)
    } else if (data.code === 'NOT_FOUND' || data.code === 'INVALID_PARAMETER') {
      msg.channel.send(errorEmbed(errorGif, embedColor))
    }
  } else {
    const embed = infoEmbed(embedColor)
    msg.channel.send(embed)
  }
}
