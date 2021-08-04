import { Message } from 'discord.js'
import { npm } from './npm'
import { anime } from './animeSearch'
import { getRandomMeme } from './redditSearch'

export const init = (command: string, args: string[], message: Message): void => {
  const argsJoined: string = args.join('-')

  // this is in case you need a flag on args[0] and need a joined second argument
  const secondArgs: string[] = args.filter((arg) => !arg.startsWith('--'))
  const argsFiltered: string = secondArgs.join('-')

  switch (command) {
    case 'npm':
      npm({ msg: message, args, arg: argsJoined })
      break
    case 'ping':
      console.log('Pong')
      break
    case 'anime':
      anime({ msg: message, args, arg: argsFiltered })
      break
    case 'reddit':
      console.info('Reddit command')
      getRandomMeme({ msg: message })
      break
  }
}
