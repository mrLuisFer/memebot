import { Message } from 'discord.js'
import fetch from 'node-fetch'
import { getRandomEmbedColor } from '../../../utils/embedColors'
import { resultEmbed } from './resultEmbed'
import { infoEmbed } from './infoEmbed'

type Props = {
  msg: Message
  argsFiltered: string
  firstArg: string
}

export const pokemon = async ({ msg, argsFiltered, firstArg }: Props) => {
  const embedColor: string = getRandomEmbedColor()

  console.log(`${argsFiltered}`)

  if (firstArg === '--help' || firstArg?.startsWith('--')) {
    return msg.channel.send(infoEmbed(embedColor))
  }

  if (argsFiltered?.length > 1) {
    const baseApiUrl = `https://pokeapi.co/api/v2/pokemon/${argsFiltered}`

    const res = await fetch(baseApiUrl)
    console.log(res)
    if (res.status !== 200) {
      return msg.reply('Pokemon no encontrado')
    } else {
      const data = await res.json()
      if (data !== undefined) {
        return msg.channel.send(resultEmbed(data, embedColor, msg))
      }
    }
  } else {
    msg.reply('Escribe un Pokemon')
  }
}
