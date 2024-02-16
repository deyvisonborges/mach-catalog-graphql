import { Field, ObjectType } from '@nestjs/graphql'
import { CategoryModelProps } from 'src/core/artifacts/category/category.model'
import { ProductModelPropsAdapter } from 'src/core/artifacts/product/product.model.adapter'
import { ProductTypeConstant } from 'src/core/artifacts/product/product.constants'
import { SimpleProductModelProps } from 'src/core/artifacts/simple-product/simple-product.model'

@ObjectType()
export class ProductsOutput
  implements ProductModelPropsAdapter, Partial<SimpleProductModelProps>
{
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

  @Field()
  type: ProductTypeConstant

  @Field()
  categories: CategoryModelProps[]

  material?: string
  size?: string
  weight?: number
}
