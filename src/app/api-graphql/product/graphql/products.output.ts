import { Field, Float, ObjectType } from '@nestjs/graphql'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'
import { FindAllProductsServiceOutput } from 'src/core/artifacts/product/service/find-all-products.service'
import { ProductTypeObject } from '../../product-type/graphql/product-type.object'
import { CategoryOutput } from '../../category/graphql/category.output'
import { CategoryModelProps } from 'src/core/artifacts/category/category.model'

@ObjectType()
export abstract class ProductsOutput implements FindAllProductsServiceOutput {
  @Field(() => String, { nullable: true })
  size?: string

  @Field(() => Float, { nullable: true })
  weight?: number

  @Field(() => String, { nullable: true })
  material?: string

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

  @Field(() => String, { nullable: true })
  downloadLink?: string

  @Field(() => ProductTypeObject)
  productType: ProductTypeModelProps

  @Field(() => [CategoryOutput])
  categories: CategoryModelProps[]
}
