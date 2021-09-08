import { Message, MessageEmbed, PartialMessage, User } from 'discord.js'
import { getRandomEmbedColor } from '../../utils/embedColors'

type Props = {
  message: Message | PartialMessage
}

export const onMessageDelete = ({ message }: Props) => {
  console.log(message)
  const embedColor: string = getRandomEmbedColor()

  const msgAuthor: User = message?.author!

  if (message !== undefined && message !== null) {
    const embed: MessageEmbed = new MessageEmbed()
      .setTitle('Un mensaje ha sido eliminado!')
      .setAuthor(
        `${msgAuthor.username}#${msgAuthor.discriminator}`,
        `${msgAuthor.displayAvatarURL()}`
      )
      .setColor(embedColor)
      .setDescription(
        `
        El mensaje borrado fue:
        \`\`\`${message.content}\`\`\`

        **Owner:** <@${msgAuthor.id}>

        **Usaba everyone?** ${message.mentions.everyone ? 'Si' : 'No'}

        **Es un bot?**: ${msgAuthor.bot ? 'Si' : 'No'}
        `
      )

    message.channel.send(embed)
  }
}
