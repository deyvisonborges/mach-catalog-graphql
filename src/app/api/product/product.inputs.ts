import {
  Field,
  InputType,
  InterfaceType,
  ObjectType,
  createUnionType
} from '@nestjs/graphql'
import { ProductImageProps } from 'src/core/artifacts/product-image/product-image.model'
import { ProductTypeConstant } from 'src/core/artifacts/product/product.constants'
import { ProductContractProps } from 'src/core/artifacts/product/product.contract'
import { SimpleProductProps } from 'src/core/artifacts/product/variants/simple-product.model'
import { VirtualProductProps } from 'src/core/artifacts/product/variants/virtual-product.model'

@ObjectType()
export class ProductImage implements ProductImageProps {
  @Field()
  name: string

  @Field()
  description: string

  @Field()
  url: string

  @Field()
  productId?: string
}

@InterfaceType()
export abstract class Product implements ProductContractProps {
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

  @Field(() => [ProductImage])
  images: ProductImageProps[]
}

@ObjectType({ implements: Product })
export class SimpleProductObject implements Product, SimpleProductProps {
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string
  type: ProductTypeConstant
  images: ProductImageProps[]

  @Field()
  size: string

  @Field()
  weight: number

  @Field()
  material: string
}

@ObjectType({ implements: Product })
export class VirtualProductObject implements Product, VirtualProductProps {
  name: string
  description: string
  sku: string
  salePrice: number
  costPrice: number
  promotionalPrice: number
  thumbnail: string
  type: ProductTypeConstant
  images: ProductImageProps[]

  @Field()
  downloadLink: string
}

// UNIAO DOS TIPOS

export const ProductUnion = createUnionType({
  name: 'ProductUnion',
  types: () => [SimpleProductObject, VirtualProductObject] as const,
  resolveType: value => {
    if ('size' in value) {
      return SimpleProductObject
    }
    if ('downloadLink' in value) {
      return VirtualProductObject
    }
    return null
  }
})

// INPUTS

@InputType({ isAbstract: true })
export abstract class ProductInputType {
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

@InputType()
export class SimpleProductInputType extends ProductInputType {
  @Field()
  size: string

  @Field()
  weight: number

  @Field()
  material: string
}

@InputType()
export class VirtualProductInputType extends ProductInputType {
  @Field()
  downloadLink: string
}

@InputType()
export class ProductImageInput implements ProductImageProps {
  @Field()
  name: string

  @Field()
  description: string

  @Field()
  url: string

  @Field()
  productId?: string
}

@InputType()
export class CreateProductInput {
  @Field(() => SimpleProductInputType, { nullable: true })
  simpleProduct?: SimpleProductProps

  @Field(() => VirtualProductInputType, { nullable: true })
  virtualProduct?: VirtualProductProps
}
