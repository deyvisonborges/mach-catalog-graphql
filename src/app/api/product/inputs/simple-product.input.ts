import { Field, Float, InputType } from '@nestjs/graphql'
import { ProductModelProps } from 'src/core/artifacts/product/product.model'
import { SimpleProductModelProps } from 'src/core/artifacts/simple-product/simple-product.model'
import { ProductInput } from './product.input'

@InputType()
export class SimpleProductInput implements SimpleProductModelProps {
  @Field(() => String, { description: 'Define a product size' })
  size: string

  @Field(() => Float, { description: 'Define a product weight' })
  weight: number

  @Field(() => String, { description: 'Define product material' })
  material: string

  @Field(() => ProductInput)
  product: ProductModelProps
}
