import {Guild, MessageEmbed, User} from 'discord.js'
import {client} from '../../../bot'

type Props = {
  embedColor: string
  user: User
}

export const welcomeEmbedMsg = ({user, embedColor}: Props): MessageEmbed => {
  let embed = new MessageEmbed()
  console.log(client.guilds)
  const guildInfo: Guild | undefined = client.guilds.cache.get('811306113018232902')

  if (guildInfo !== undefined) { 
    embed = new MessageEmbed()
    .setColor(embedColor)
    .setAuthor(guildInfo.name, `${guildInfo.iconURL()}`)
    .setTitle(`Bienvenido **${user.username.toLowerCase()}** a ${guildInfo.name}`)
    .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`)
    .setDescription(`
    Recuerda pasarte por el canal <#811325044910194761>

    Tambien si quieres un rol puedes pasarte por <#819798182628163596>
    
    Y si tienes alguna duda, puedes preguntar en <#819175376680255489>
    `)
    .setFooter(
    `Somos ${guildInfo.memberCount} miembros\nCon ${guildInfo.channels.cache.size} canales`.trim()
    )
  }
  return embed
}
