import { MessageEmbed } from 'discord.js'
import fetch from 'node-fetch'
import { MsgWithArgs } from '../../../types/msgArgs'
import { errorEmbed } from './errorEmbed'

export const npm = async ({ msg, args }: MsgWithArgs) => {
  if (args.length > 0) {
    const arg: string = args.join('-')
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
      msg.channel.send(errorEmbed)
    }
  } else {
    msg.channel.send(errorEmbed)
  }
}
