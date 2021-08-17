import { MessageEmbed } from 'discord.js'
import { config } from '../../../../config'

const infoEmbed = (color: string, randomAnimeGif: string) => {
  const embed: MessageEmbed = new MessageEmbed()
    .setTitle('**Anime Command**')
    .setColor(color)
    .setDescription(
      `
    Puedes seguir alguno de estas flags:

    \`${config.prefix}anime <name>\` - Busca el nombre de un anime

    \`${config.prefix}anime --manga <name>\` - Para buscar algun manga
    \`${config.prefix}anime --m <name>\`

    
    \`${config.prefix}anime --people <name>\` - Para buscar algun personaje
    \`${config.prefix}anime --p <name>\`

    📝 Example:
    \`${config.prefix}anime naruto\`
    `.trim()
    )
    .setImage(randomAnimeGif)
    .setFooter('name: string')
  return embed
}

export default infoEmbed
