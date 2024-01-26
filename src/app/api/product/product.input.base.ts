import { Field, InputType, InterfaceType } from '@nestjs/graphql'
import { ProductTypeConstant } from '../../../core/artifacts/product/product.constants'
import { ProductImageProps } from '../../../core/artifacts/product-image/product-image.model'
import { ProductContractProps } from '../../../core/artifacts/product/product.contract'
import { ProductImageObject } from './product-image/product-image.object'
import { ProductImageInput } from './product-image/product-image.inputs'

@InputType()
export class ProductInput implements ProductContractProps {
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

  @Field(() => [ProductImageInput])
  images: ProductImageProps[]
}

@InterfaceType()
export abstract class BaseProductInput implements ProductContractProps {
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

  @Field(() => [ProductImageObject])
  images: ProductImageProps[]
}
