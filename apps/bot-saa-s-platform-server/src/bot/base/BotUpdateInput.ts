/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MessageUpdateManyWithoutBotsInput } from "./MessageUpdateManyWithoutBotsInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumBotPlatform } from "./EnumBotPlatform";
import { ScrapingBotUpdateManyWithoutBotsInput } from "./ScrapingBotUpdateManyWithoutBotsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class BotUpdateInput {
  @ApiProperty({
    required: false,
    type: () => MessageUpdateManyWithoutBotsInput,
  })
  @ValidateNested()
  @Type(() => MessageUpdateManyWithoutBotsInput)
  @IsOptional()
  @Field(() => MessageUpdateManyWithoutBotsInput, {
    nullable: true,
  })
  messages?: MessageUpdateManyWithoutBotsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumBotPlatform,
  })
  @IsEnum(EnumBotPlatform)
  @IsOptional()
  @Field(() => EnumBotPlatform, {
    nullable: true,
  })
  platform?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => ScrapingBotUpdateManyWithoutBotsInput,
  })
  @ValidateNested()
  @Type(() => ScrapingBotUpdateManyWithoutBotsInput)
  @IsOptional()
  @Field(() => ScrapingBotUpdateManyWithoutBotsInput, {
    nullable: true,
  })
  scrapingBots?: ScrapingBotUpdateManyWithoutBotsInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { BotUpdateInput as BotUpdateInput };
