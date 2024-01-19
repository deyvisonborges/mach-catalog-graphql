import { ProductCreatorVariants } from '../product.creator.contract'
import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductRepositoryContract } from '../product.repository.contract'

export class FindAllProductsService
  implements BaseServiceContract<void, ProductCreatorVariants[]>
{
  constructor(private readonly productRepository: ProductRepositoryContract) {}

  async execute(): Promise<ProductCreatorVariants[]> {
    return this.productRepository.findAll()
  }
}
