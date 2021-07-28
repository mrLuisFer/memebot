import { MessageEmbed } from 'discord.js'
import { getRandomErrorGif } from '../../../utils/errorGifs'

const solution: string = 'Revisa que hayas escrito bien el nombre del paquete'
const gif: string = getRandomErrorGif()
export const errorEmbed: MessageEmbed = new MessageEmbed()
  .setColor('#F8485E')
  .setTitle('Paquete no encontrado')
  .setAuthor('npm', 'https://pbs.twimg.com/profile_images/1285630920263966721/Uk6O1QGC_400x400.jpg')
  .setImage(gif)
  .setDescription(solution)
