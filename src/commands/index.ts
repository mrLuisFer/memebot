import { Message } from 'discord.js'
import { npm } from './npm'
import { anime } from './animeSearch'

export const init = (command: string, args: string[], message: Message): void => {
  switch (command) {
    case 'npm':
      npm({ msg: message, args })
      break
    case 'ping':
      console.log('Pong')
      break
    case 'anime':
      anime({ msg: message, args })
      break
  }
}
