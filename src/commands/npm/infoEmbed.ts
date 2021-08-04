import { MessageEmbed } from 'discord.js'

export const infoEmbed = (embedColor: string): MessageEmbed => {
  const embed: MessageEmbed = new MessageEmbed().setTitle('Npm Command').setColor(embedColor)

  return embed
}
