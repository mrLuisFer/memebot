import { MessageEmbed } from 'discord.js'

const solution: string = `
Revisa que hayas escrito bien el nombre del paquete

Remplaza los espacios por \`-\` (guión)
`

export const errorEmbed = (randomGif: string, embedColor: string): MessageEmbed => {
  const embed = new MessageEmbed()
    .setColor(embedColor)
    .setTitle('Paquete no encontrado')
    .setAuthor(
      'npm',
      'https://pbs.twimg.com/profile_images/1285630920263966721/Uk6O1QGC_400x400.jpg'
    )
    .setImage(randomGif)
    .setDescription(solution)

  return embed
}
