import { MessageEmbed } from 'discord.js'

const infoEmbed = (color: string, randomAnimeGif: string) => {
  const embed: MessageEmbed = new MessageEmbed()
    .setTitle('**Anime Command**')
    .setColor(color)
    .setDescription(
      `
    Puedes seguir alguno de estas flags:

    \`!anime <name>\` - Busca el nombre de un anime

    \`!anime --manga <name>\` - Para buscar algun manga
    \`!anime --m <name>\`

    
    \`!anime --people <name>\` - Para buscar algun personaje
    \`!anime --p <name>\`

    📝 Example:
    \`!anime naruto\`
    `.trim()
    )
    .setImage(randomAnimeGif)
    .setFooter('name: string')
  return embed
}

export default infoEmbed
