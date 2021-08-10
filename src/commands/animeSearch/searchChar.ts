import { Message, MessageEmbed } from 'discord.js'
import fetch from 'node-fetch'
import { baseUrl } from './index'
import { getRandomErrorGif } from '../../gifs/errorGifs'

export const searchChar = async (msg: Message, arg: string, embedColor: string) => {
  const url: string = `${baseUrl}/search/people?q=${arg}&limit=1`
  const res = await fetch(url)
  const data = await res.json()

  if (data.results.length > 0 || data.results !== undefined) {
    try {
      const result = data.results[0]

      if (result !== undefined) {
        const embed: MessageEmbed = new MessageEmbed()
          .setTitle(result?.name)
          .setColor(embedColor)
          .setImage(result.image_url !== undefined && result.image_url)
          .setDescription(
            `
        📎 Character Url:
        ${result.url}
        `.trim()
          )
          .setURL(result.url)

        msg.channel.send(embed)
      } else {
        const gifError: string = getRandomErrorGif()
        const embedError = new MessageEmbed()
          .setTitle(`Error al buscar ${arg}`)
          .setDescription('No se encontro el resultado en la **API** :c')
          .setColor(embedColor)
          .setImage(gifError)

        msg.channel.send(embedError)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
