import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ScrapingBotListRelationFilter } from "../scrapingBot/ScrapingBotListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BotWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
  platform?: "Option1";
  scrapingBots?: ScrapingBotListRelationFilter;
  user?: UserWhereUniqueInput;
};
