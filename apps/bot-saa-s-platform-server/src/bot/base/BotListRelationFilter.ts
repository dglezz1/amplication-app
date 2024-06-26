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
import { BotWhereInput } from "./BotWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BotListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BotWhereInput,
  })
  @ValidateNested()
  @Type(() => BotWhereInput)
  @IsOptional()
  @Field(() => BotWhereInput, {
    nullable: true,
  })
  every?: BotWhereInput;

  @ApiProperty({
    required: false,
    type: () => BotWhereInput,
  })
  @ValidateNested()
  @Type(() => BotWhereInput)
  @IsOptional()
  @Field(() => BotWhereInput, {
    nullable: true,
  })
  some?: BotWhereInput;

  @ApiProperty({
    required: false,
    type: () => BotWhereInput,
  })
  @ValidateNested()
  @Type(() => BotWhereInput)
  @IsOptional()
  @Field(() => BotWhereInput, {
    nullable: true,
  })
  none?: BotWhereInput;
}
export { BotListRelationFilter as BotListRelationFilter };
