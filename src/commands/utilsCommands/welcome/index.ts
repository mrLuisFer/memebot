import { Message } from 'discord.js'

type Props = {
  msg: Message
  firstArg: string
}

export const welcome = ({ msg, firstArg }: Props) => {
  console.log('bienvenido prro')
}
