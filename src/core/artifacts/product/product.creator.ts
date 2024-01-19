import { BaseModelProps } from 'src/core/common/base/model.base'
import { ProductTypeConstant } from './product.constants'

import {
  SimpleProduct,
  SimpleProductProps
} from './variants/simple-product/simple-product.model'
import {
  VirtualProduct,
  VirtualProductProps
} from './variants/virtual-product/virtual-product.model'

type Product = SimpleProduct | VirtualProduct

export class ProductCreator {
  public createProduct<T extends ProductTypeConstant>(
    config: T extends 'SIMPLE_PRODUCT'
      ? Omit<SimpleProductProps, keyof BaseModelProps>
      : T extends 'VIRTUAL_PRODUCT'
      ? Omit<VirtualProductProps, keyof BaseModelProps>
      : never
  ): Product {
    switch (config.type) {
      case 'SIMPLE_PRODUCT':
        return new SimpleProduct(config as SimpleProductProps)
      case 'VIRTUAL_PRODUCT':
        return new VirtualProduct(config as VirtualProductProps)
      default:
        throw new Error('Invalid product type')
    }
  }
}
