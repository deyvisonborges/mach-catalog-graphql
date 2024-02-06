import { createUnionType } from '@nestjs/graphql'
import { SimpleProductOutput } from '../../simple-product/graphql/simple-product.output'
import { VirtualProductOutput } from '../../virtual-product/graphql/virtual-product.output'

function getPropertyValue(obj1, dataToRetrieve) {
  return dataToRetrieve
    .split('.') // split string based on `.`
    .reduce(function (o, k) {
      return o && o[k] // get inner property if `o` is defined else get `o` and return
    }, obj1) // set initial value as object
}

const types = {
  SIMPLE_PRODUCT: SimpleProductOutput,
  VIRTUAL_PRODUCT: VirtualProductOutput
}

export const ProductsUnion = createUnionType({
  name: 'Products',
  types: () => [SimpleProductOutput, VirtualProductOutput] as const,
  resolveType: value => {
    const type = getPropertyValue(value, 'productType').name
    return types[type] || null
  }
})
