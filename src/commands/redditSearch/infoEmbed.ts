import { MessageEmbed } from 'discord.js'
import { config } from '../../config'

export const infoEmbed = (embedColor: string): MessageEmbed => {
  const embed: MessageEmbed = new MessageEmbed()
    .setTitle('Reddit Command')
    .setColor(embedColor)
    .setDescription(
      `
  Puedes ejecutar el comando \`!reddit \`
      con alguna de las siguientes flags:

      \`${config.prefix}reddit --sr <redditName>\`  Devuelve post random del subReddit que coloques      
      
      \`${config.prefix}reddit --help\` - Muestra informacion acerca del comando *(obvio)*
      \`--h\`

      \`${config.prefix}reddit --random\` - Devuelve un post random de un subReddit random
      \`--r\`

      \`${config.prefix}reddit --sug\` - Te muestra sugerencias de subreddits que puedes utilizar

      \`${config.prefix}reddit --news <redditName>\` - Muestra los posts mas nuevos del subreddit que coloques
      \`--n\`

      \`${config.prefix}reddit \` - Asi solo muestra posts random de un subReddit por defecto
      `.trim()
    )
    .setFooter('redditName: string'.trim())

  return embed
}
