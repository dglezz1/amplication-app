import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ScrapingBotWhereInput = {
  bot?: BotWhereUniqueInput;
  id?: StringFilter;
  schedule?: DateTimeNullableFilter;
  targetUrl?: StringNullableFilter;
};
