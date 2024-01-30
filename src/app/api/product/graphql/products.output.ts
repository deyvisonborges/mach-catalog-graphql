import { Field, Float, ObjectType } from '@nestjs/graphql'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'
import { FindAllProductsServiceOutput } from 'src/core/artifacts/product/service/find-all-products.service'
import { ProductTypeObject } from '../../product-type/graphql/product-type.object'

@ObjectType()
export class ProductsOutput implements FindAllProductsServiceOutput {
  @Field(() => String)
  size: string

  @Field(() => Float)
  weight: number

  @Field(() => String)
  material: string

  @Field(() => String)
  name: string

  @Field(() => String)
  description: string

  @Field(() => String)
  sku: string

  @Field(() => Float)
  salePrice: number

  @Field(() => Float)
  costPrice: number

  @Field(() => Float)
  promotionalPrice: number

  @Field(() => String)
  thumbnail: string

  @Field(() => String)
  downloadLink: string

  @Field(() => ProductTypeObject)
  productType: ProductTypeModelProps
}
