import { MessageEmbed } from 'discord.js'

export const infoEmbed = (embedColor: string): MessageEmbed => {
  const embedDescription: string = `
  Para buscar un paquete de npm solo coloca el nombre del paquete despues del comando
  
  **Ejemplo:**
  \`!npm react\`

  Si colocas espacios automaticamente se separaran por **-**
  \`!npm react redux\`  \`react-redux\`


  \`--help\` - Muestra ayuda acerca del comando npm
  `

  const embed: MessageEmbed = new MessageEmbed()
    .setTitle('NPM Command')
    .setColor(embedColor)
    .setDescription(embedDescription)
    .setImage('https://codigoonclick.com/wp-content/uploads/2019/05/npm-nodejs.jpeg')

  return embed
}
