import { MessageEmbed } from 'discord.js'

export const apiEmbed = (data: any, embedColor: string): MessageEmbed => {
  let embed: MessageEmbed = new MessageEmbed()
    .setTitle('Un error ocurrio al ejecutar el comando :(')
    .setColor(embedColor)
    .setImage('https://media.giphy.com/media/l46Czzp0KEHSO7OdG/giphy.gif')

  if (data !== undefined && data !== null) {
    try {
      const apiData = data === undefined ? { url: '', thumbnail: '' } : data
      const img: string =
        apiData?.url !== null || apiData?.url !== undefined ? apiData.url : apiData.thumbnail
      console.log(img)

      const msgEmbed = new MessageEmbed()
        .setAuthor(data?.subreddit_name_prefixed)
        .setColor(embedColor)
        .setTitle(data?.title)
        .addFields([
          { name: '**🐧 Author:**', value: data?.author_fullname, inline: true },
          { name: '**📎 Url**', value: data?.url, inline: true },
          { name: '**👍 Likes:**', value: data?.ups, inline: true },
          { name: '**💬 Comments:**', value: data?.num_comments, inline: true },
        ])
        .setImage(img)
        .setFooter('Si no carga la imagen, es porque posiblemente sea un video')

      embed = msgEmbed
    } catch (error) {
      console.log(error)
    }
  }

  return embed
}
