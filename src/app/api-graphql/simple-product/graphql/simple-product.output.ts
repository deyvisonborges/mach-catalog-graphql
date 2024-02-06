import { Field, Float, ObjectType } from '@nestjs/graphql'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'
import { ProductTypeOutput } from '../../product-type/graphql/product-type.output'
import { CategoryModelProps } from 'src/core/artifacts/category/category.model'
import { CategoryOutput } from '../../category/graphql/category.output'
import { SimpleProductModelPropsAdapter } from 'src/core/artifacts/simple-product/simple-product.model.adapter'

@ObjectType()
export class SimpleProductOutput implements SimpleProductModelPropsAdapter {
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

  @Field(() => ProductTypeOutput)
  productType: ProductTypeModelProps

  @Field(() => [CategoryOutput])
  categories: CategoryModelProps[]
}
