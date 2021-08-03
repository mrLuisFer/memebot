import { MsgWithArgs } from '../../types/msgArgs'
import { getRandomEmbedColor } from '../../utils/embedColors'
import { searchAnime } from './searchAnime'
import { searchManga } from './searchManga'
import { searchChar } from './searchChar'
import infoEmbed from './utils/infoEmbed'

export const baseUrl: string = 'https://api.jikan.moe/v3'

export const anime = async ({ msg, args = [], arg }: MsgWithArgs): Promise<void> => {
  const randomEmbedColor: string = getRandomEmbedColor()
  if (args?.length > 0) {
    const firstArg: string = args[0]

    if (firstArg === '--m' || firstArg === '--manga') {
      searchManga(msg, arg, randomEmbedColor)
    } else if (firstArg === '--p' || firstArg === '--people') {
      searchChar(msg, arg, randomEmbedColor)
    } else if (args[0].startsWith('--')) {
      const embed = infoEmbed(randomEmbedColor)
      msg.channel.send(embed)
    } else {
      searchAnime(msg, arg, randomEmbedColor)
    }
  } else {
    const embed = infoEmbed(randomEmbedColor)
    msg.channel.send(embed)
  }
}
