import { MessageEmbed } from 'discord.js'

export const infoEmbed = (): MessageEmbed => {
  const embed: MessageEmbed = new MessageEmbed().setTitle('Reddit Command')

  return embed
}
