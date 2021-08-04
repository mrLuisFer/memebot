import { Message } from 'discord.js'
import { npm } from './npm'
import { anime } from './animeSearch'
import { getRandomMeme } from './redditSearch'

export const init = (command: string, args: string[], message: Message): void => {
  const argsJoined: string = args.join('-')

  const firstArg: string = args[0]
  // this is in case you need a flag on args[0] and need a joined second argument
  const secondArgs: string[] = args.filter((arg) => !arg.startsWith('--'))
  const argsFiltered: string = secondArgs.join('-')

  console.log(`Args: ${args} \n`)
  console.log(`Arg: ${argsFiltered}`)

  switch (command) {
    case 'npm':
      npm({ msg: message, arg: argsJoined, firstArg })
      break
    case 'ping':
      console.log('Pong')
      break
    case 'anime':
      anime({ msg: message, args, arg: argsFiltered, firstArg })
      break
    case 'reddit':
    case 'r':
      console.info('Reddit command')
      getRandomMeme({ msg: message, arg: argsFiltered, firstArg })
      break
  }
}
