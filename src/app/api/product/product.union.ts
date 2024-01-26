import { createUnionType } from '@nestjs/graphql'
import { SimpleProductObject } from './simple-product/simple-product.object'
import { VirtualProductObject } from './virtual-product/virtual-product.object'

export const ProductsUnion = createUnionType({
  name: 'ProductsUnios',
  types: () => [SimpleProductObject, VirtualProductObject],
  resolveType: value => {
    if (value instanceof SimpleProductObject) return SimpleProductObject
    if (value instanceof VirtualProductObject) return VirtualProductObject
    return null
  }
})
