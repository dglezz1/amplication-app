/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BotWhereUniqueInput } from "./BotWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteBotArgs {
  @ApiProperty({
    required: true,
    type: () => BotWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BotWhereUniqueInput)
  @Field(() => BotWhereUniqueInput, { nullable: false })
  where!: BotWhereUniqueInput;
}

export { DeleteBotArgs as DeleteBotArgs };
