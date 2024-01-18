import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductAbstractFactory } from './product.abstract-factory'
import { ProductModelProps } from './product.model'

export class CreateProductService implements BaseServiceContract<null, null> {
  constructor(
    private readonly productAbstractFactory: ProductAbstractFactory
  ) {}

  execute(input: null): Promise<null> {
    this.productAbstractFactory.createProduct(
      `SIMPLE_PRODUCT`,
      {} as ProductModelProps
    )
    return null
  }
}
