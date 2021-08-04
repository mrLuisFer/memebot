import { Message, MessageEmbed } from 'discord.js'
import fetch from 'node-fetch'
import { errorEmbed } from './errorEmbed'
import { getRandomErrorGif } from '../../utils/errorGifs'

type Props = {
  msg: Message
  arg: string
}

export const npm = async ({ msg, arg }: Props) => {
  const errorGif: string = getRandomErrorGif()

  if (arg.length > 0) {
    const response = await fetch(`https://api.npms.io/v2/package/${arg}`)
    const data = await response.json()
    if (
      data !== null &&
      data !== undefined &&
      data.collected !== undefined &&
      data.collected.metadata !== undefined
    ) {
      const embed: MessageEmbed = new MessageEmbed()
        .setAuthor(
          'npm',
          'https://pbs.twimg.com/profile_images/1285630920263966721/Uk6O1QGC_400x400.jpg'
        )
        .setTitle(`📦 Package: ${data.collected.metadata.name}`)
        .setURL(
          data.collected.github?.homepage !== undefined
            ? data.collected.github?.homepage
            : data.collected.metadata.links?.homepage
        )
        .addFields(
          {
            name: 'Description:',
            value: `${data.collected.metadata.description}`,
          },
          {
            name: 'Version:',
            value: `${data.collected.metadata.version}`,
          },
          {
            name: '📜 License:',
            value: `${data.collected.metadata.license}`,
          }
        )
        .setFooter(
          `Link: ${
            data.collected.github?.homepage !== undefined
              ? data.collected.github?.homepage
              : data.collected.metadata.links?.homepage
          }`
        )
        .setColor('#F8485E')
        .setThumbnail('https://media.giphy.com/media/gHnBLyeYE6hboT3t3o/giphy.gif')
      msg.channel.send(embed)
    } else if (data.code === 'NOT_FOUND' || data.code === 'INVALID_PARAMETER') {
      msg.channel.send(errorEmbed(errorGif))
    }
  } else {
    msg.channel.send(errorEmbed(errorGif))
  }
}
