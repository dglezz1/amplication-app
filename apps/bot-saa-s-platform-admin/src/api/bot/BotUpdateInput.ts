import { MessageUpdateManyWithoutBotsInput } from "./MessageUpdateManyWithoutBotsInput";
import { ScrapingBotUpdateManyWithoutBotsInput } from "./ScrapingBotUpdateManyWithoutBotsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BotUpdateInput = {
  messages?: MessageUpdateManyWithoutBotsInput;
  name?: string | null;
  platform?: "Option1" | null;
  scrapingBots?: ScrapingBotUpdateManyWithoutBotsInput;
  user?: UserWhereUniqueInput | null;
};
