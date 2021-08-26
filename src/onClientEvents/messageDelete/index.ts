import { Message, MessageEmbed, PartialMessage } from 'discord.js'

type Props = {
  message: Message | PartialMessage
}

export const onMessageDelete = ({ message }: Props) => {
  console.log(message)

  const embed = new MessageEmbed().setTitle('Un mensaje ha sido eliminado!')

  message.channel.send(embed)
}
