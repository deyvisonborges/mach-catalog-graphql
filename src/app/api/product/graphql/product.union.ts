import { createUnionType } from '@nestjs/graphql'
import { SimpleProductObject } from '../../simple-product/graphql/simple-product.object'
import { VirtualProductObject } from '../../virtual-product/graphql/virtual-product.object'
import { ProductTypeConstant } from 'src/core/artifacts/product/product.constants'

export const ProductsUnion = createUnionType({
  name: 'Products',
  types: () => [SimpleProductObject, VirtualProductObject] as const,
  resolveType: value => {
    const type: ProductTypeConstant = null
    if (value.product.productType.name) {
      switch (type) {
        case `SIMPLE_PRODUCT`:
          return SimpleProductObject
        case `VIRTUAL_PRODUCT`:
          return VirtualProductObject
        default:
          return null
      }
    }
    return null
  }
})
