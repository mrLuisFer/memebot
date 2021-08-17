import { Message } from 'discord.js'
// In case one command needs the client
// import {client} from '../bot'
import { getRandomMeme, anime, npm, pokemon } from './funCommands'
import { avatarCmd, helpCommand, repo, userInfo } from './utilsCommands'

type Props = {
  args: string[]
  argsFiltered: string
  argsJoined: string
  command: string
  firstArg: string
  message: Message
}

export const compareCommand = ({
  args,
  argsFiltered,
  argsJoined,
  command,
  firstArg,
  message,
}: Props): void => {
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
    case 'help':
    case 'h':
      helpCommand(message)
      break
    case 'avatar':
      avatarCmd({ msg: message, firstArg })
      break
    case 'repo':
      repo(message)
      break
    case 'user':
      userInfo({ msg: message, firstArg })
      break
    case 'pokemon':
      pokemon({ msg: message, argsFiltered, firstArg })
      break
    case 'welcome':
    case 'w':
      console.log('Welcome')
      break
    default:
      helpCommand(message)
      break
  }
}
