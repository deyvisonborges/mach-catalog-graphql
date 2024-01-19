import { ProductTypeConstant } from './product.constants'
import {
  SimpleProduct,
  SimpleProductProps
} from './variants/simple-product.concrete'

type ReturnType = SimpleProductProps

export class ProductCreator {
  createProduct(type: ProductTypeConstant): ReturnType {
    switch (type) {
      case 'SIMPLE_PRODUCT':
        return new SimpleProduct()
      default:
        throw new Error('Invalid product type')
    }
  }
}
