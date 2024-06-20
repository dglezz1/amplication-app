import { Message } from "../message/Message";
import { ScrapingBot } from "../scrapingBot/ScrapingBot";
import { User } from "../user/User";

export type Bot = {
  createdAt: Date;
  id: string;
  messages?: Array<Message>;
  name: string | null;
  platform?: "Option1" | null;
  scrapingBots?: Array<ScrapingBot>;
  updatedAt: Date;
  user?: User | null;
};
