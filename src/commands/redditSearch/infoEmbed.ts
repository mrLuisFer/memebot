import { MessageEmbed } from 'discord.js'

export const infoEmbed = (embedColor: string): MessageEmbed => {
  const embed: MessageEmbed = new MessageEmbed()
    .setTitle('Reddit Command')
    .setColor(embedColor)
    .setDescription(
      `
  Puedes ejecutar el comando \`!reddit \`
      con alguna de las siguientes flags:

      \`--sr <redditName>\` -> Devuelve post random del subReddit que coloques      
      
      \`--help\` -> Muestra informacion acerca del comando *(obvio)*
      \`--h\`

      \`!reddit \` -> Asi solo muestra posts random de un subReddit por defecto
      `.trim()
    )
    .setFooter(
      `
               redditName: string 
               `.trim()
    )

  return embed
}
