import { Field, InputType } from '@nestjs/graphql'
import { BaseProductInput } from '../product.input.base'

@InputType()
export class SimpleProductInput extends BaseProductInput {
  @Field()
  size: string

  @Field()
  weight: number

  @Field()
  material: string
}
