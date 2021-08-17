import { Message, MessageEmbed } from 'discord.js'
import { subredditList } from '../../../utils/subredditList'
import { getRandomGif } from '../../../gifs/animeGifs'
import { config } from '../../../config'

export const sugEmbed = (msg: Message, embedColor: string): MessageEmbed => {
  const subReddits = subredditList.map((subreddit: string) => {
    const txt = ` \`${subreddit}\``
    return txt
  })

  const randomAnimeGif: string = getRandomGif()
  const clientAvatar: string = msg.author?.displayAvatarURL({ format: 'png' })
  const embed = new MessageEmbed()
    .setTitle('Subreddits')
    .setAuthor(msg.author.username, `${clientAvatar}`)
    .setColor(embedColor)
    .setImage(randomAnimeGif)
    .setDescription(
      `
  Estos son algunos de los subreddits que puedes utilizar ${msg.author.username}:

  **${subReddits} **

  Puedes usar:
  **\`${config.prefix}reddit --sr <name>\n\`**
  `.trim()
    )
    .setFooter('name: string')

  return embed
}
