import { MsgWithArgs } from '../../types/msgArgs'
import { searchAnime } from './searchAnime'

export const baseUrl: string = 'https://api.jikan.moe/v3'
export const anime = async ({ msg, args }: MsgWithArgs): Promise<void> => {
  if (args.length > 0) {
    const arg: string = args.join('-')

    if (args[0] === '--p') {
      console.log('Character')
    } else {
      searchAnime(msg, arg)
    }
  } else {
    console.log('Empty')
  }
}
