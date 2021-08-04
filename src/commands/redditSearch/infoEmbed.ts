import { MessageEmbed } from 'discord.js'

export const infoEmbed = (embedColor: string): MessageEmbed => {
  const embed: MessageEmbed = new MessageEmbed().setTitle('Reddit Command').setColor(embedColor)

  return embed
}
