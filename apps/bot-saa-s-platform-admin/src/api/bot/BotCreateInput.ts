import { MessageCreateNestedManyWithoutBotsInput } from "./MessageCreateNestedManyWithoutBotsInput";
import { ScrapingBotCreateNestedManyWithoutBotsInput } from "./ScrapingBotCreateNestedManyWithoutBotsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BotCreateInput = {
  messages?: MessageCreateNestedManyWithoutBotsInput;
  name?: string | null;
  platform?: "Option1" | null;
  scrapingBots?: ScrapingBotCreateNestedManyWithoutBotsInput;
  user?: UserWhereUniqueInput | null;
};
