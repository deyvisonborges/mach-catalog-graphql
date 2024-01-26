import { ProductVariantType } from '../product.creator.contract'
import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductRepositoryContract } from '../repositories/product.repository.contract'

export class FindAllProductsService
  implements BaseServiceContract<void, ProductVariantType[]>
{
  constructor(private readonly productRepository: ProductRepositoryContract) {}

  async execute(): Promise<ProductVariantType[]> {
    return await this.productRepository.findAll()
  }
}
