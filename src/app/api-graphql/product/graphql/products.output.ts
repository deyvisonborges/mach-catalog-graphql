import { Field, Float, ObjectType } from '@nestjs/graphql'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'
import { ProductTypeOutput } from '../../product-type/graphql/product-type.output'
import { CategoryOutput } from '../../category/graphql/category.output'
import { CategoryModelProps } from 'src/core/artifacts/category/category.model'
import { ProductModelPropsAdapter } from 'src/core/artifacts/product/product.model.adapter'

@ObjectType()
export class ProductsOutput implements ProductModelPropsAdapter {
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

  @Field(() => String, { nullable: true })
  size?: string

  @Field(() => Float, { nullable: true })
  weight?: number

  @Field(() => String, { nullable: true })
  material?: string

  @Field(() => String, { nullable: true })
  downloadLink?: string
}
