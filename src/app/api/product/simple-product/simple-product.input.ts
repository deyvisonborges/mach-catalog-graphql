import { Field, Float, InputType } from '@nestjs/graphql'
import { ProductInput } from '../product.input.base'

@InputType()
export class SimpleProductInput extends ProductInput {
  @Field(() => String, { description: 'Define a product size' })
  size: string

  @Field(() => Float, { description: 'Define a product weight' })
  weight: number

  @Field(() => String, { description: 'Define product material' })
  material: string
}
