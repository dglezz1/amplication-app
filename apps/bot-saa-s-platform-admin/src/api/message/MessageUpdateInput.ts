import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";

export type MessageUpdateInput = {
  bot?: BotWhereUniqueInput | null;
  content?: string | null;
  sentAt?: Date | null;
};
