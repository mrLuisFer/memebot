import { Client, Message } from 'discord.js'
import { config } from './config'
import { presence } from './utils/botPresence'
import { init } from './commands'

const client: Client = new Client()

client.on('ready', () => {
  console.log(`Bot is ready as ${client?.user?.tag}!`)
  presence(client)
})

client.on('message', (message: Message) => {
  if (
    !message.content.startsWith(config.prefix) ||
    message.author.bot ||
    message.author === client.user
  )
    return

  const args: string[] = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command: string = args?.shift()?.toLowerCase() || ''

  console.log(command)

  init(command, args, message)
})

client.login(config.token)
