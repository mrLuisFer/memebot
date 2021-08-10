import { MessageEmbed } from 'discord.js'
import { config } from '../../config'
import { getRandomGif } from '../../gifs/animeGifs'

export const infoEmbed = (embedColor: string): MessageEmbed => {
  const randomAnimeGif: string = getRandomGif()
  console.log(randomAnimeGif)
  const embed: MessageEmbed = new MessageEmbed()
    .setTitle('Avatar Command')
    .setColor(embedColor)
    .setDescription(
      `
  Puedes ejecutar el comando de las siguientes maneras:

  \`${config.prefix}avatar\` - Retorna tu propio avatar

  \`${config.prefix}avatar <username>\` - Retorna el avatar del usuario que coloques
`.trim()
    )
    .setImage(randomAnimeGif)
  return embed
}
