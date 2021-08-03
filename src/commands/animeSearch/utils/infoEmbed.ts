import { MessageEmbed } from 'discord.js'

const infoEmbed = (color: string) => {
  const embed: MessageEmbed = new MessageEmbed()
    .setTitle('**Anime Command**')
    .setColor(color)
    .setDescription(
      `
    Puedes seguir alguno de estas flags:

    \`!anime <name>\` - busca el nombre de un anime

    \`!anime --m <name>\` - para buscar manga
    \`!anime --manga <name>\` - para buscar manga

    📝 Example:
    \`!anime naruto\`
    `.trim()
    )
  return embed
}

export default infoEmbed
