import { Message } from 'discord.js'
import fetch from 'node-fetch'
import { getRandomEmbedColor } from '../../utils/embedColors'
import { resultEmbed } from './resultEmbed'

type Props = {
  msg: Message
  argsFiltered: string
}

export const pokemon = async ({ msg, argsFiltered }: Props) => {
  const embedColor: string = getRandomEmbedColor()
  if (argsFiltered?.length > 1) {
    const baseApiUrl = `https://pokeapi.co/api/v2/pokemon/${argsFiltered}`

    const res = await fetch(baseApiUrl)
    console.log(res)
    if (res.status !== 200) {
      msg.reply('Pokemon no encontrado')
    } else {
      const data = await res.json()
      if (data !== undefined) {
        msg.channel.send(resultEmbed(data, embedColor, msg))
      }
    }
  } else {
    msg.reply('Escribe un Pokemon')
  }
}
