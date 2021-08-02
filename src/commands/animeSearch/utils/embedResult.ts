import { MessageEmbed } from 'discord.js'

export const getEmbedResult = (data: any, embedColor: string) => {
  const results = data.results[0]

  const startDate: string = new Date(results.start_date).toDateString()
  const endDate: string = new Date(results.end_date).toDateString()

  const embed: MessageEmbed = new MessageEmbed()
    .setTitle(`📦 ${results.title}`)
    .setColor(embedColor)
    .setDescription(
      `
        📝 Description:
        **${results.synopsis}**

        📎 Url:
        **${results.url}**

        📅 Date:
        **${startDate} - ${endDate}**
        `
    )
    .setImage(results.image_url)
    .setURL(results.url)
    .addFields(
      {
        name: '📺 Type:',
        value: results.type,
        inline: true,
      },
      {
        name: '💬 Episodes:',
        value: results.episodes,
        inline: true,
      },
      {
        name: '⭐ Score:',
        value: results.score,
        inline: true,
      },
      {
        name: '🔥 Rated:',
        value: results.rated,
        inline: true,
      }
    )

  return embed
}
