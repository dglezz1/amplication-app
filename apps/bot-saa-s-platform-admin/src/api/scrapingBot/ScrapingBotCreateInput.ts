import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";

export type ScrapingBotCreateInput = {
  bot?: BotWhereUniqueInput | null;
  schedule?: Date | null;
  targetUrl?: string | null;
};
