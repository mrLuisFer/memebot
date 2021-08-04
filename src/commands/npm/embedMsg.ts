import { MessageEmbed } from 'discord.js'

export const embedMsg = (data: any, embedColor: string): MessageEmbed => {
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
    .setColor(embedColor)
    .setThumbnail('https://media.giphy.com/media/gHnBLyeYE6hboT3t3o/giphy.gif')

  return embed
}
