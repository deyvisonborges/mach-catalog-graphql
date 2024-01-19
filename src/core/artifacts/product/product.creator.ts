import { BaseModelProps } from 'src/core/common/base/model.base'
import { ProductTypeConstant } from './product.constants'
import {
  SimpleProduct,
  SimpleProductProps
} from './variants/simple-product.concrete'
import {
  VirtualProduct,
  VirtualProductProps
} from './variants/virtual-product.concrete'

type Product = SimpleProduct | VirtualProduct

export class ProductCreator {
  public createProduct<T extends ProductTypeConstant>(
    type: T,
    config: T extends 'SIMPLE_PRODUCT'
      ? Omit<SimpleProductProps, keyof BaseModelProps>
      : T extends 'VIRTUAL_PRODUCT'
      ? Omit<VirtualProductProps, keyof BaseModelProps>
      : never
  ): Product {
    switch (type) {
      case 'SIMPLE_PRODUCT':
        return new SimpleProduct(config as SimpleProductProps)
      case 'VIRTUAL_PRODUCT':
        return new VirtualProduct(config as VirtualProductProps)
      default:
        throw new Error('Invalid product type')
    }
  }
}
