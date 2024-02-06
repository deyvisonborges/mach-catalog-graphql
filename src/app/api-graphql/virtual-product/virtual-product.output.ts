import { Field, ObjectType } from '@nestjs/graphql'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'
import { VirtualProductModelProps } from 'src/core/artifacts/virtual-product/virtual-product.model'
import { ProductTypeOutput } from '../product-type/graphql/product-type.output'
import { CategoryOutput } from '../category/graphql/category.output'
import { CategoryModelProps } from 'src/core/artifacts/category/category.model'

type Ouput = Omit<VirtualProductModelProps, 'productTypeId'> & {
  productType: ProductTypeModelProps
}

@ObjectType()
export class VirtualProductOutput implements Ouput {
  @Field(() => String)
  downloadLink: string

  @Field(() => ProductTypeOutput)
  productType: ProductTypeModelProps

  @Field(() => String)
  name: string

  @Field(() => String)
  description: string

  @Field(() => String)
  sku: string

  @Field()
  salePrice: number

  @Field()
  costPrice: number

  @Field()
  promotionalPrice: number

  @Field(() => String)
  thumbnail: string

  @Field(() => [CategoryOutput], { nullable: true })
  categories: CategoryModelProps[]
}
