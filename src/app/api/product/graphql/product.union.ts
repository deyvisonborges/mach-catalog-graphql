import { createUnionType } from '@nestjs/graphql'
import { SimpleProductObject } from '../../simple-product/graphql/simple-product.object'
import { VirtualProductObject } from '../../virtual-product/graphql/virtual-product.object'

export const ProductsUnion = createUnionType({
  name: 'Products',
  types: () => [SimpleProductObject, VirtualProductObject] as const,
  resolveType: value => {
    if (value.product.productType.name)
      return SimpleProductObject || VirtualProductObject
    return null
  }
})
