import { ObjectType, Field } from '@nestjs/graphql'
import { CategoryModelProps } from 'src/core/artifacts/category/category.model'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'
import { ProductModelPropsAdapter } from 'src/core/artifacts/product/product.model.adapter'
import { ProductTypeOutput } from '../../product-type/graphql/product-type.output'
import { CategoryOutput } from '../../category/graphql/category.output'

@ObjectType()
export class ProductObject implements ProductModelPropsAdapter {
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

  @Field(() => ProductTypeOutput)
  productType: ProductTypeModelProps

  @Field(() => [CategoryOutput])
  categories: CategoryModelProps[]

  @Field(() => String)
  id?: string

  @Field(() => Boolean)
  active?: boolean

  @Field(() => Date)
  createdAt?: Date

  @Field(() => Date)
  updatedAt?: Date
}
