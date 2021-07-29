import { MessageEmbed } from 'discord.js'

const infoEmbed = (color: string) => {
  const embed = new MessageEmbed().setTitle('**Anime Command**').setColor(color)
  return embed
}

export default infoEmbed
