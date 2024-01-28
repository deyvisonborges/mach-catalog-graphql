import { ObjectType, Field } from '@nestjs/graphql'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'
import { ProductModelProps } from 'src/core/artifacts/product/product.model'
import { ProductTypeObject } from './product-type.object'

@ObjectType()
export class ProductObject implements ProductModelProps {
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

  @Field(() => ProductTypeObject)
  productType: ProductTypeModelProps
}
