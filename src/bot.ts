import { Client, Message, PartialMessage } from 'discord.js'
import { config } from './config'
import { presence } from './utils/botPresence'
import { init } from './commands'
import { onMessageDelete } from './onClientEvents/messageDelete'

export const client: Client = new Client()

client.on('ready', () => {
  console.log(`Bot is ready as ${client?.user?.tag}!`)
  presence(client)
  client.setMaxListeners(20)
})

client.on('message', (message: Message) => {
  if (
    !message.content.startsWith(config.prefix) ||
    message.author.client ||
    message.author === client.user
  )
    return
  const args: string[] = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command: string = args?.shift()?.toLowerCase() || ''
  console.log(`Comando -> ${command}`)
  console.log(`Client -> ${client}`)
  console.log(`Message -> ${message}`)
  init({ command, args, message })
})

client.on('guildMemberAdd', async (member) => {
  console.log(member)
})

client.on('messageDelete', async (message: Message | PartialMessage) => {
  onMessageDelete({ message })
})

client.login(config.token)
