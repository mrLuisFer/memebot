import { Message, MessageEmbed } from 'discord.js'
import { getRandomEmbedColor } from '../../utils/embedColors'

export const helpCommand = (msg: Message): void => {
  const embedColor: string = getRandomEmbedColor()

  const embedDescription: string = `
  **Lista de Comandos:**

  **!help** - Retorna esta lista de comandos.

  **!reddit** - Retorna um post aleatório do subreddit do usuário.

  **!anime** - Busca el nombre de algun anime que coloques.
  
  **!npm** - Retorna info de un package de npm que coloques.

  **!avatar** - Retorna tu avatar o el de algun usuario.

  **Sugerencia**: Utiliza el flag **--help** en cada uno de los comandos para ver una sublista de los comandos disponibles
  `.trim()

  const clientAvatar: string = msg.author?.displayAvatarURL({ format: 'png' })
  const embed = new MessageEmbed()
    .setAuthor(`Comando pedido por ${msg.author.username}`, clientAvatar)
    .setTitle('Help Command')
    .setColor(embedColor)
    .setDescription(embedDescription)
    .setImage(
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlsZfm4MvUCtCYmi028pzq-6uE1asqvRxDGg&usqp=CAU' ||
        ''
    )

  msg.channel.send({ embed })
}
