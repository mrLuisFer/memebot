import { MessageEmbed } from 'discord.js'

export const infoEmbed = (embedColor: string): MessageEmbed => {
  const embed = new MessageEmbed().setColor(embedColor)

  return embed
}
