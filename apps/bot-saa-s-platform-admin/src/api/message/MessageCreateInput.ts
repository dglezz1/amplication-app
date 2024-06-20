import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";

export type MessageCreateInput = {
  bot?: BotWhereUniqueInput | null;
  content?: string | null;
  sentAt?: Date | null;
};
