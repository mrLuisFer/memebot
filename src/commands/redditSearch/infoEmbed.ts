import { MessageEmbed } from 'discord.js'

export const infoEmbed = (embedColor: string): MessageEmbed => {
  const embed: MessageEmbed = new MessageEmbed()
    .setTitle('Reddit Command')
    .setColor(embedColor)
    .setDescription(
      `
  Puedes ejecutar el comando \`!reddit \`
      con alguna de las siguientes flags:

      \`--sr <redditName>\`  Devuelve post random del subReddit que coloques      
      
      \`--help\` - Muestra informacion acerca del comando *(obvio)*
      \`--h\`

      \`--random\` - Devuelve un post random de un subReddit random
      \`--r\`

      \`--sug\` - Te muestra sugerencias de subreddits que puedes utilizar

      \`--news <redditName>\` - Muestra los posts mas nuevos del subreddit que coloques
      \`--n\`

      \`!reddit \` - Asi solo muestra posts random de un subReddit por defecto
      `.trim()
    )
    .setFooter('redditName: string'.trim())

  return embed
}
