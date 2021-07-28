import { Message } from 'discord.js'

export type MsgWithArgs = {
  msg: Message
  args: string[]
}
