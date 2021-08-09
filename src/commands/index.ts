import { compareCommand } from './compareCommands'
import type { TMessageArgs } from '../types/MessageArgs'

export const init = ({ message, command, args }: TMessageArgs): void => {
  const argsJoined: string = args.join('-')

  const firstArg: string = args[0]
  // this is in case you need a flag on args[0] and need a joined second argument
  const secondArgs: string[] = args.filter((arg) => !arg.startsWith('--'))
  const argsFiltered: string = secondArgs.join('-')

  console.log(`Args: ${args} \n`)
  console.log(`Arg: ${argsFiltered}`)

  compareCommand({ message, command, argsJoined, firstArg, args, argsFiltered })
}
