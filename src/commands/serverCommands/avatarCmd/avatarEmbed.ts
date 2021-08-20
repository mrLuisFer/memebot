import { MessageEmbed } from 'discord.js'

type Props = {
  user: any
  embedColor: string
}

export const avatarEmbed = ({ user, embedColor }: Props): MessageEmbed => {
  const userAvatar: string = user?.displayAvatarURL({ size: 1024, dynamic: true })
  const authorEmbed: MessageEmbed = new MessageEmbed()
    .setTitle(`Avatar de ${user?.username}`)
    .setColor(embedColor)
    .setAuthor(user.username, userAvatar)
    .setImage(userAvatar)
    .setURL(`${user.avatarURL({ format: 'png' })}`)

  return authorEmbed
}
