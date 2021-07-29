import { Message } from 'discord.js'
import fetch from 'node-fetch'
import { baseUrl } from './index'
import { getEmbedResult } from './utils/embedResult'

export const searchManga = async (msg: Message, arg: string, embedColor: string) => {
  const url: string = `${baseUrl}/search/manga?q=${arg}&limit=1`
  const res = await fetch(url)
  const data = await res.json()

  console.log(data)

  if (data.results.length > 0 || data.results !== undefined) {
    try {
      const embed = getEmbedResult(data, embedColor)
      msg.channel.send(embed)
    } catch (err) {
      console.log(err)
    }
  }
}
