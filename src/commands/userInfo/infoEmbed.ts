import { MessageEmbed } from 'discord.js'
import { config } from '../../config'

export const infoEmbed = (embedColor: string): MessageEmbed => {
  const embed: MessageEmbed = new MessageEmbed()
    .setTitle('User Info Command')
    .setColor(embedColor)
    .setDescription(
      `
    Este comando es sencillo :)
    Solo escribe el comando junto con el nombre de un usuario y te dará su información.

    \`${config.prefix}user <mencion>\` - Muestra informacion del usuario que menciones.

    \`${config.prefix}user --help\` - Te muestra este mensaje de ayuda.

  `.trim()
    )
    .setFooter('mencion: User | string')

  return embed
}
