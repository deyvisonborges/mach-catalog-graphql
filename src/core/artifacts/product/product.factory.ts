import { BaseModelProps } from 'src/core/common/base/model.base'
import {
  VirtualProductModelProps,
  VirtualProductModel
} from '../virtual-product/virtual-product.model'
import {
  SimpleProductModelProps,
  SimpleProductModel
} from '../simple-product/simple-product.model'
import { ProductTypeConstant } from './product.constants'

type Product = SimpleProductModel | VirtualProductModel

export class ProductFactory {
  public createProduct<K extends ProductTypeConstant>(
    type: K,
    config: K extends 'simple'
      ? Omit<SimpleProductModelProps, keyof BaseModelProps>
      : K extends 'virtual'
      ? Omit<VirtualProductModelProps, keyof BaseModelProps>
      : never
  ): Product {
    switch (type) {
      case 'simple':
        return new SimpleProductModel(config as SimpleProductModelProps)
      case 'virtual':
        return new VirtualProductModel(config as VirtualProductModelProps)
      default:
        throw new Error('Invalid product type')
    }
  }
}
