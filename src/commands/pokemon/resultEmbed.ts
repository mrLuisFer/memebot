import { Message, MessageEmbed } from 'discord.js'

type PokeFields = {
  name: string
  value: string
  inline?: boolean
}

const getRandomNumber = (array: any): number => {
  const n: number = Math.floor(Math.random() * array?.length)

  return n
}

export const resultEmbed = (data: any, embedColor: string, msg: Message): MessageEmbed => {
  const randomMoveId: number = getRandomNumber(data?.moves)
  const randomFormId: number = getRandomNumber(data?.forms)

  const fields: Array<PokeFields> = [
    { name: 'Name:', value: data.name, inline: true },
    { name: 'Type:', value: data?.types[0]?.type.name, inline: true },
    { name: 'Specie:', value: data?.species?.name, inline: true },
    { name: 'Height:', value: data?.height + 'm', inline: true },
    { name: 'Weight:', value: data?.weight + 'kg', inline: true },
    { name: 'Base Exp:', value: data?.base_experience + 'xp', inline: true },
    { name: 'Randome Movement:', value: data?.moves[randomMoveId].move.name, inline: true },
    { name: 'Forms:', value: data?.forms[randomFormId]?.name + '', inline: true },
  ]

  const embed = new MessageEmbed()
    .setTitle(`Pokemon - ${data.name}`)
    .setColor(embedColor)
    .setThumbnail(data.sprites.front_default)
    .setAuthor(msg.author.username, `${msg.author.displayAvatarURL()}`)
    .setURL(`https://pokeapi.co/api/v2/pokemon/${data.name}`)
    .addFields(fields)

  return embed
}
