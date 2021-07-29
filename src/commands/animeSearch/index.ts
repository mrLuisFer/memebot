import { MsgWithArgs } from '../../types/msgArgs'
import { searchAnime } from './searchAnime'
import infoEmbed from './infoEmbed'
import { getRandomEmbedColor } from '../../utils/embedColors'

export const baseUrl: string = 'https://api.jikan.moe/v3'
export const anime = async ({ msg, args }: MsgWithArgs): Promise<void> => {
  const randomEmbedColor = getRandomEmbedColor()
  if (args.length > 0) {
    const arg: string = args.join('-')

    if (args[0] === '--p') {
      console.log('Character')
    } else {
      searchAnime(msg, arg, randomEmbedColor)
    }
  } else {
    const embed = infoEmbed(randomEmbedColor)
    msg.channel.send(embed)
  }
}
