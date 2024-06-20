import { Bot } from "../bot/Bot";

export type Message = {
  bot?: Bot | null;
  content: string | null;
  createdAt: Date;
  id: string;
  sentAt: Date | null;
  updatedAt: Date;
};
