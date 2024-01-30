import { Field, ObjectType } from '@nestjs/graphql'
import { ProductTypeModelProps } from 'src/core/artifacts/product-type/product-type.model'
import { VirtualProductModelProps } from 'src/core/artifacts/virtual-product/virtual-product.model'
import { ProductTypeObject } from '../product-type/graphql/product-type.object'

type Ouput = Omit<VirtualProductModelProps, 'productTypeId'> & {
  productType: ProductTypeModelProps
}

@ObjectType()
export class VirtualProductOutput implements Ouput {
  @Field(() => String)
  downloadLink: string

  @Field(() => ProductTypeObject)
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
}
