export const init = (command: string) => {
  const COMMANDS: any = {
    ping: console.log("Pong"),
  };

  COMMANDS[command];
};
