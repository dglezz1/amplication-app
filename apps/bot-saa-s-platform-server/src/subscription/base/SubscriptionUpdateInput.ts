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
import { IsDate, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { PaymentUpdateManyWithoutSubscriptionsInput } from "./PaymentUpdateManyWithoutSubscriptionsInput";
import { EnumSubscriptionStatus } from "./EnumSubscriptionStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class SubscriptionUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => PaymentUpdateManyWithoutSubscriptionsInput,
  })
  @ValidateNested()
  @Type(() => PaymentUpdateManyWithoutSubscriptionsInput)
  @IsOptional()
  @Field(() => PaymentUpdateManyWithoutSubscriptionsInput, {
    nullable: true,
  })
  payments?: PaymentUpdateManyWithoutSubscriptionsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumSubscriptionStatus,
  })
  @IsEnum(EnumSubscriptionStatus)
  @IsOptional()
  @Field(() => EnumSubscriptionStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

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

export { SubscriptionUpdateInput as SubscriptionUpdateInput };
