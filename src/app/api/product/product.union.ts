import { createUnionType } from '@nestjs/graphql'
import { SimpleProductObject } from './objects/simple-product.object'
import { VirtualProductObject } from './objects/virtual-product.object'

export const ProductsUnion = createUnionType({
  name: 'ProductsUnion',
  types: () => [SimpleProductObject, VirtualProductObject],
  resolveType: value => {
    if (value instanceof SimpleProductObject) return SimpleProductObject
    if (value instanceof VirtualProductObject) return VirtualProductObject
    return null
  }
})
