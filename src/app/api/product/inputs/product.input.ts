import { Field, InputType } from '@nestjs/graphql'
import { ProductModelProps } from 'src/core/artifacts/product/product.model'
import { ProductTypeInput } from './product-type.input'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'

@InputType()
export class ProductInput implements ProductModelProps {
  @Field()
  name: string

  @Field()
  description: string

  @Field()
  sku: string

  @Field()
  salePrice: number

  @Field()
  costPrice: number

  @Field()
  promotionalPrice: number

  @Field()
  thumbnail: string

  @Field(() => ProductTypeInput)
  productType: ProductTypeModelProps
}
