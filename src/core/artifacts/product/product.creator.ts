import { BaseModelProps } from 'src/core/common/base/model.base'
import { ProductTypeConstant } from './product.constants'

import {
  SimpleProduct,
  SimpleProductProps
} from './variants/simple-product.model'
import {
  VirtualProduct,
  VirtualProductProps
} from './variants/virtual-product.model'
import { ProductVariantType } from './product.creator.contract'

type ProductType = {
  simpleProduct: SimpleProductProps
  virtualProduct: VirtualProductProps
}

export class ProductCreator {
  public createProduct<T extends ProductTypeConstant>(
    config: T extends 'SIMPLE_PRODUCT'
      ? Omit<SimpleProductProps, keyof BaseModelProps>
      : T extends 'VIRTUAL_PRODUCT'
      ? Omit<VirtualProductProps, keyof BaseModelProps>
      : never
  ): ProductVariantType {
    switch (config.type) {
      case 'SIMPLE_PRODUCT':
        return new SimpleProduct(config as SimpleProductProps)
      case 'VIRTUAL_PRODUCT':
        return new VirtualProduct(config as VirtualProductProps)
      default:
        throw new Error('Invalid product type')
    }
  }

  // static create<K extends keyof ProductType>(
  //   type: K,
  //   props: Omit<ProductType[K], 'type'>
  // ) {
  //   return ProductCreator.create(type, { ...props, type: type })
  // }
}
