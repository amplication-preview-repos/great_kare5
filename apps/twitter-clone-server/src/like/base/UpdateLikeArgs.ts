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
import { LikeWhereUniqueInput } from "./LikeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { LikeUpdateInput } from "./LikeUpdateInput";

@ArgsType()
class UpdateLikeArgs {
  @ApiProperty({
    required: true,
    type: () => LikeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LikeWhereUniqueInput)
  @Field(() => LikeWhereUniqueInput, { nullable: false })
  where!: LikeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LikeUpdateInput,
  })
  @ValidateNested()
  @Type(() => LikeUpdateInput)
  @Field(() => LikeUpdateInput, { nullable: false })
  data!: LikeUpdateInput;
}

export { UpdateLikeArgs as UpdateLikeArgs };
