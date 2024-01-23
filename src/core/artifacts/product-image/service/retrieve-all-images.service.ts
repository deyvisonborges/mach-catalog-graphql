import { BaseServiceContract } from '../../../../core/common/base/service.base'
import { ProductImageProps } from '../product-image.model'
import { ProductImageRepositoryContract } from '../repositories/product-image.repository.contract'

export class RetrieveAllImages
  implements BaseServiceContract<void, ProductImageProps[]>
{
  constructor(private readonly repository: ProductImageRepositoryContract) {}

  async execute(): Promise<ProductImageProps[]> {
    const imagesWithProductId = await this.repository.findAll()
    return imagesWithProductId.filter(image => image.productId !== null)
  }
}
