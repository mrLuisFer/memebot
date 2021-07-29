import { MsgWithArgs } from '../../types/msgArgs'
import { getRandomEmbedColor } from '../../utils/embedColors'
import { searchAnime } from './searchAnime'
import { searchManga } from './searchManga'
import infoEmbed from './utils/infoEmbed'

export const baseUrl: string = 'https://api.jikan.moe/v3'

export const anime = async ({ msg, args }: MsgWithArgs): Promise<void> => {
  const randomEmbedColor = getRandomEmbedColor()
  if (args.length > 0) {
    const arg: string = args.join('-')

    if (args[0] === '--m' || args[0] === '--manga') {
      searchManga(msg, arg, randomEmbedColor)
    } else {
      searchAnime(msg, arg, randomEmbedColor)
    }
  } else {
    const embed = infoEmbed(randomEmbedColor)
    msg.channel.send(embed)
  }
}
