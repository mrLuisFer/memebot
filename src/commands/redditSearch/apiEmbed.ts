import { MessageEmbed } from 'discord.js'

export const apiEmbed = (data: any, embedColor: string): MessageEmbed => {
  const img: string = data.url_overridden_by_dest

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
    .setImage(img || data.url)
    .setFooter('Si no carga la imagen, es porque posiblemente sea un video')

  return embed
}
