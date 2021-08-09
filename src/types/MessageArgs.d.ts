import { Message } from 'discord.js'

export type TMessageArgs = {
  command: string
  args: string[]
  message: Message
}
