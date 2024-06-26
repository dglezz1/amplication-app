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
import { ScrapingBotWhereInput } from "./ScrapingBotWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ScrapingBotOrderByInput } from "./ScrapingBotOrderByInput";

@ArgsType()
class ScrapingBotFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ScrapingBotWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ScrapingBotWhereInput, { nullable: true })
  @Type(() => ScrapingBotWhereInput)
  where?: ScrapingBotWhereInput;

  @ApiProperty({
    required: false,
    type: [ScrapingBotOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ScrapingBotOrderByInput], { nullable: true })
  @Type(() => ScrapingBotOrderByInput)
  orderBy?: Array<ScrapingBotOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ScrapingBotFindManyArgs as ScrapingBotFindManyArgs };
