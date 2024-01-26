import { Field, InputType } from '@nestjs/graphql'
import { ProductInput } from '../product.input.base'

@InputType()
export class SimpleProductInput extends ProductInput {
  @Field()
  size: string

  @Field()
  weight: number

  @Field()
  material: string
}
