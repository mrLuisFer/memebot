import { Message } from 'discord.js'
import { npm } from './utils/npm'

export const init = (command: string, args: string[], message: Message): void => {
  const COMMANDS: any = {
    ping: console.log('Pong'),
    npm: npm({ args: args, msg: message }),
  }

  /* eslint-disable no-unused-expressions */
  COMMANDS[command]
}
