import { Message, MessageEmbed } from 'discord.js'
import { getData } from './redditApiReq'
import { getRandomEmbedColor } from '../../utils/embedColors'

type Props = {
  msg: Message
}

export const getRandomMeme = async ({ msg }: Props) => {
  const apiResults = await getData()
  const randomApiResults: number = Math.round(Math.random() * apiResults.length)

  const data = apiResults[randomApiResults].data

  const embedColor: string = getRandomEmbedColor()

  const img: string = data.url_overridden_by_dest
  console.log(img)

  const embed = new MessageEmbed()
    .setAuthor(data.subreddit_name_prefixed)
    .setColor(embedColor)
    .setTitle(data.title)
    .addFields([
      { name: '**🐧 Author:**', value: data.author_fullname, inline: true },
      { name: '**📎 Url**', value: data.url, inline: true },
      { name: '.', value: '.' },
      { name: '**👍 Likes:**', value: data.ups, inline: true },
      { name: '**💬 Comments:**', value: data.num_comments, inline: true },
    ])
    .setImage(img)
  return msg.channel.send(embed)
}
