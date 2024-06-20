import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  bot?: BotWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  sentAt?: DateTimeNullableFilter;
};
