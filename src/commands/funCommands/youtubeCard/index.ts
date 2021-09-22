import { Canvacord } from 'canvacord'
import { Message, MessageAttachment } from 'discord.js'

type YoutubeCardProps = {
  msg: Message
  firstArg: string
  argsFiltered: string
  args: string[]
}
export const youtubeCard = async ({ msg, firstArg, argsFiltered, args }: YoutubeCardProps) => {
  const content: string = argsFiltered.replace(/-/g, ' ')

  const opts = {
    username: msg.author.username,
    avatar: `${msg.author.avatarURL({ format: 'jpg' })}`,
    content: `${args === undefined ? 'Escribe algo depues de ejecutar el comando' : content}`,
    dark: firstArg === '--dark',
  }

  const card = await Canvacord.youtube(opts)
  const msgAttachment = new MessageAttachment(card)
  msg.channel.send(msgAttachment)
}
