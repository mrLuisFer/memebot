import { MessageEmbed } from 'discord.js'
import { MsgWithArgs } from '../../types/msgArgs'
import fetch from 'node-fetch'

export const anime = async ({ msg, args }: MsgWithArgs): Promise<void> => {
  if (args.length > 0) {
    const arg: string = args.join('-')
    const endpoint: string = `https://api.jikan.moe/v3/search/anime?q=${arg}&limit=1`

    const res = await fetch(endpoint)
    const data = await res.json()

    console.log(data)

    if (data.results.length > 0 || data.results !== undefined) {
      const results = data.results[0]
      try {
        const embed: MessageEmbed = new MessageEmbed().setTitle(results.title).setColor('#512D6D')

        msg.channel.send(embed)
      } catch (err) {
        console.log(err)
      }
    }
  } else {
    console.log('Empty')
  }
}
