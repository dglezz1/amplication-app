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
import { ScrapingBotWhereUniqueInput } from "./ScrapingBotWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class ScrapingBotFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => ScrapingBotWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ScrapingBotWhereUniqueInput)
  @Field(() => ScrapingBotWhereUniqueInput, { nullable: false })
  where!: ScrapingBotWhereUniqueInput;
}

export { ScrapingBotFindUniqueArgs as ScrapingBotFindUniqueArgs };