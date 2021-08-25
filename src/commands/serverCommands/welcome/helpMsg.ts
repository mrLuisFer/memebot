import { MessageEmbed } from 'discord.js'
import { config } from '../../../config'
import { getRandomGif } from '../../../gifs/animeGifs'

type Props = {
  embedColor: string
}

export const helpMsg = ({ embedColor }: Props): MessageEmbed => {
  const randomGif: string = getRandomGif()

  const embed: MessageEmbed = new MessageEmbed()
    .setTitle('Welcome Command')
    .setColor(embedColor)
    .setDescription(
      `
    Sencillo!\n
    Menciona al nuevo usuario para mostrar un mensaje de bienvenida al servidor **:D**
    \`\`\`${config.prefix}welcome <usuario>\`\`\`
    `
    )
    .setFooter('usuario: User')
    .setImage(`${randomGif}`)

  return embed
}
