import { MessageEmbed } from 'discord.js'

export const apiEmbed = (data: any, embedColor: string): MessageEmbed => {
  let embed: MessageEmbed = new MessageEmbed().setTitle('Un error')
  try {
    const apiData = data === undefined ? { url: '', thumbnail: '' } : data
    const img: string =
      apiData?.url !== null || apiData?.url !== undefined ? apiData.url : apiData.thumbnail

    const msgEmbed = new MessageEmbed()
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
      .setFooter('Si no carga la imagen, es porque posiblemente sea un video')

    embed = msgEmbed
  } catch (error) {
    console.log(error)
  }
  return embed
}
