import { Message } from 'discord.js'
import fetch from 'node-fetch'
import { baseUrl } from './index'
import { getEmbedResult } from './utils/embedResult'

export const searchAnime = async (msg: Message, arg: string, embedColor: string) => {
  const endpoint: string = `${baseUrl}/search/anime?q=${arg}&limit=1`
  const res = await fetch(endpoint)
  const data = await res.json()

  if (data.results.length > 0 || data.results !== undefined) {
    try {
      const embed = getEmbedResult(data, embedColor)
      msg.channel.send(embed)
    } catch (err) {
      console.log(err)
    }
  }
}
