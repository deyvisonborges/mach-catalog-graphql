import { CreateSimpleProductInput } from './create-simple-product.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

@InputType()
export class UpdateSimpleProductInput extends PartialType(
  CreateSimpleProductInput
) {
  @Field(() => Int)
  id: number
}
