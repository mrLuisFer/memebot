import { Message, MessageEmbed } from 'discord.js'
import fetch from 'node-fetch'
import { getRandomEmbedColor } from '../../utils/embedColors'
import { baseUrl } from './index'

export const searchAnime = async (msg: Message, arg: string) => {
  const endpoint: string = `${baseUrl}/search/anime?q=${arg}&limit=1`

  const res = await fetch(endpoint)
  const data = await res.json()

  if (data.results.length > 0 || data.results !== undefined) {
    const embedColor = getRandomEmbedColor()
    const results = data.results[0]
    try {
      const startDate = new Date(results.start_date).toDateString()
      const endDate = new Date(results.end_date).toDateString()

      const embed: MessageEmbed = new MessageEmbed()
        .setTitle(`📦 ${results.title}`)
        .setColor(embedColor)
        .setDescription(
          `
        📝 Description:
        **${results.synopsis}**

        📎 Url:
        ${results.url}

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

      msg.channel.send(embed)
    } catch (err) {
      console.log(err)
    }
  }
}
