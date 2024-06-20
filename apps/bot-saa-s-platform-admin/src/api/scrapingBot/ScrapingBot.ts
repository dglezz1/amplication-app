import { Bot } from "../bot/Bot";

export type ScrapingBot = {
  bot?: Bot | null;
  createdAt: Date;
  id: string;
  schedule: Date | null;
  targetUrl: string | null;
  updatedAt: Date;
};
