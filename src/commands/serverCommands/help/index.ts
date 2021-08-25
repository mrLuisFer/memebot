import { Message, MessageEmbed } from 'discord.js'
import { config } from '../../../config'
import { getRandomEmbedColor } from '../../../utils/embedColors'

export const helpCommand = (msg: Message): void => {
  const embedColor: string = getRandomEmbedColor()

  const embedDescription: string = `
  **Lista de Comandos:**

  **${config.prefix}help** - Retorna esta lista de comandos.

  **${config.prefix}reddit** - Retorna um post aleatório do subreddit do usuário.

  **${config.prefix}anime** - Busca el nombre de algun anime que coloques.
  
  **${config.prefix}npm** - Retorna info de un package de npm que coloques.

  **${config.prefix}avatar** - Retorna tu avatar o el de algun usuario.

  **${config.prefix}repo** - Muestra la URL del repositorio del Bot.

  **${config.prefix}ping** - Retorna el tiempo que tarda el Bot en responder.

  **${config.prefix}user** - Retorna informacion acerca del primer usuario que menciones.

  **${config.prefix}pokemon** - Busca un pokemon y devuelve su informacion

  **${config.prefix}welcome** - Envia un mensaje de bienvenida al user nuevo

  **Sugerencia**: Utiliza el flag **--help** en cada uno de los comandos para ver una lista de opciones que puedes utilizar.
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
