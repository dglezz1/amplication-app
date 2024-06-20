import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";

export type ScrapingBotUpdateInput = {
  bot?: BotWhereUniqueInput | null;
  schedule?: Date | null;
  targetUrl?: string | null;
};
