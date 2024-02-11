import { BaseModelProps } from 'src/core/common/base/model.base'
import {
  VirtualProductModel,
  VirtualProductModelProps
} from '../virtual-product/virtual-product.model'
import {
  SimpleProductModel,
  SimpleProductModelProps
} from '../simple-product/simple-product.model'

type Product = SimpleProductModel | VirtualProductModel
type ProductTypeConstant = 'simple' | 'virtual' | 'configurable'

export class ProductFactory {
  public createProduct<T extends ProductTypeConstant>(
    type: T,
    config: T extends 'simple'
      ? Omit<SimpleProductModelProps, keyof BaseModelProps>
      : T extends 'virtual'
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
