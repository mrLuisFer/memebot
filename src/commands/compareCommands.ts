import { Message } from 'discord.js'
import { npm } from './npm'
import { anime } from './animeSearch'
import { getRandomMeme } from './redditSearch'
import { helpCommand } from './helpCommand'
// In case one command needs the client
// import {client} from '../bot'

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
  }
}