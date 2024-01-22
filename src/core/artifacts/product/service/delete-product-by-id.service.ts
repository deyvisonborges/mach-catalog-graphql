import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductRepositoryContract } from '../repositories/product.repository.contract'
import { FindProductByIdService } from './find-product-by-id.service'

type DeleteProductByIdInput = { id: string }

export class DeleteProductByIdService
  implements BaseServiceContract<DeleteProductByIdInput, void>
{
  constructor(
    private readonly productRepository: ProductRepositoryContract,
    private readonly findProductByIdService: FindProductByIdService
  ) {}

  async execute(input: DeleteProductByIdInput): Promise<void> {
    await this.findProductByIdService.execute({ id: input.id })
    await this.productRepository.delete(input.id)
  }
}
