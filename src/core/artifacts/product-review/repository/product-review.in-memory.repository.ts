import { InMemoryBaseRepository } from '../../../common/base/in-memory-repository.base'
import { ProductReviewProps } from '../product-review.model'
import { ProductReviewRepositoryContract } from './product-review.repository.contract'

export class ProductImageInMemoryRepository
  extends InMemoryBaseRepository<ProductReviewProps>
  implements ProductReviewRepositoryContract {}
