import { Canvacord } from 'canvacord'
import { Message, MessageAttachment } from 'discord.js'

type YoutubeCardProps = {
  msg: Message
}
export const youtubeCard = async ({ msg }: YoutubeCardProps) => {
  const opts = {
    username: msg.author.username,
    avatar:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-kK2MFoGYgK0%2FXrW8t7lXRpI%2FAAAAAAAADZU%2FN5UA-NaVaIIg_rjl1h-zn7Dn9R4FcCBAgCLcBGAsYHQ%2Fs1600%2Fdiscord-logo.jpg&f=1&nofb=1',
    content: `@${msg.author.id}`,
  }

  const card = await Canvacord.youtube(opts)
  const msgAttachment = new MessageAttachment(card)
  msg.channel.send(msgAttachment)
}
