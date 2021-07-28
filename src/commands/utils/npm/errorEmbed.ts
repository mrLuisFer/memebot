import { MessageEmbed } from 'discord.js'

const solution: string = 'Revisa que hayas escrito bien el nombre del paquete'
export const errorEmbed: MessageEmbed = new MessageEmbed()
  .setColor('#F8485E')
  .setTitle('Paquete no encontrado')
  .setAuthor('npm', 'https://pbs.twimg.com/profile_images/1285630920263966721/Uk6O1QGC_400x400.jpg')
  .setImage(
    'https://images-ext-1.discordapp.net/external/RBrBPOqtBk1IeYXMDmiKjkj-QYQvWj0IVmB0-9Q8Y5A/https/media.giphy.com/media/iJCo9daAP0xugHhhfb/giphy.gif'
  )
  .setDescription(solution)
