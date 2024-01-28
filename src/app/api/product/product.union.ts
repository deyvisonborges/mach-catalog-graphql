import { createUnionType } from '@nestjs/graphql'
import { SimpleProductObject } from './objects/simple-product.object'
import { VirtualProductObject } from './objects/virtual-product.object'

export const ProductsUnion = createUnionType({
  name: 'Products',
  types: () => [SimpleProductObject, VirtualProductObject] as const,
  resolveType: value => {
    if (value.product.productType.name)
      return SimpleProductObject || VirtualProductObject
    return null
  }
})
