import { Field, ObjectType } from '@nestjs/graphql'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'
import { SimpleProductModelProps } from 'src/core/artifacts/simple-product/simple-product.model'
import { ProductTypeOutput } from '../../product-type/graphql/product-type.output'
import { CategoryModelProps } from 'src/core/artifacts/category/category.model'
import { CategoryOutput } from '../../category/graphql/category.output'

type Ouput = Omit<SimpleProductModelProps, 'productTypeId'> & {
  productType: ProductTypeModelProps
}

@ObjectType()
export class SimpleProductOutput implements Ouput {
  @Field(() => ProductTypeOutput)
  productType: ProductTypeModelProps

  @Field(() => String)
  size: string

  @Field()
  weight: number

  @Field()
  material: string

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

  @Field(() => [CategoryOutput], { nullable: true })
  categories: CategoryModelProps[]
}
