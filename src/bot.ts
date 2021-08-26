import { Client, Message, PartialMessage } from 'discord.js'
import { config } from './config'
import { presence } from './utils/botPresence'
import { init } from './commands'

export const bot: Client = new Client()

bot.on('ready', () => {
  console.log(`Bot is ready as ${bot?.user?.tag}!`)
  presence(bot)
  bot.setMaxListeners(20)
})

bot.on('message', (message: Message) => {
  if (
    !message.content.startsWith(config.prefix) ||
    message.author.bot ||
    message.author === bot.user
  )
    return
  const args: string[] = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command: string = args?.shift()?.toLowerCase() || ''
  console.log(`Comando -> ${command}`)
  console.log(`Client -> ${bot}`)
  console.log(`Message -> ${message}`)
  init({ command, args, message })
})

bot.on('guildMemberAdd', async (member) => {
  console.log(member)
})

bot.on('messageDelete', (message: Message | PartialMessage) => {
  console.log(message)
})

bot.login(config.token)
