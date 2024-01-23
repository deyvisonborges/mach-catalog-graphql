import { InMemoryBaseRepository } from 'src/core/common/base/in-memory-repository.base'
import { ProductImageProps } from '../product-image.model'
import { ProductImageRepositoryContract } from './product-image.repository.contract'

export class ProductImageInMemoryRepository
  extends InMemoryBaseRepository<ProductImageProps>
  implements ProductImageRepositoryContract {}
