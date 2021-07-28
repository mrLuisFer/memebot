import { Client } from "discord.js";
import { config } from "../config";

export const presence = (client: Client) => {
  setInterval(() => {
    const botStatus: string[] = config.status;
    const statusId: number = Math.floor(Math.random() * botStatus.length);
    const statusName: string = botStatus[statusId];

    client?.user?.setPresence({
      status: "online",
      activity: {
        name: `${statusName}`,
        type: "WATCHING",
      },
    });
  }, 5000);
};
