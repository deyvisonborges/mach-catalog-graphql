import { ProductTypeConstant } from './product.constants'
import { ProductModelProps } from './product.model'
import { SimpleProduct, SimpleProductProps } from './simple-product.model'

export class ProductAbstractFactory {
  createProduct<T extends ProductModelProps>(
    type: ProductTypeConstant,
    config?: T
  ): T {
    switch (type) {
      case 'SIMPLE_PRODUCT':
        return new SimpleProduct(
          config as unknown as SimpleProductProps
        ) as unknown as T
      default:
        throw new Error(`Unsupported product type: ${type}`)
    }
  }
}
