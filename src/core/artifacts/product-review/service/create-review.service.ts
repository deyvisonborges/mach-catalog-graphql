import { BaseModelProps } from 'src/core/common/base/model.base'
import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductReviewProps } from '../product-review.model'
import { ProductReviewRepositoryContract } from '../repository/product-review.repository.contract'

export type CreateProductReviewInput = Omit<
  ProductReviewProps,
  keyof BaseModelProps
>

export type CreateProductReviewOutput = ProductReviewProps

export class CreateProductReviewService
  implements
    BaseServiceContract<CreateProductReviewInput, CreateProductReviewOutput>
{
  constructor(private readonly repository: ProductReviewRepositoryContract) {}

  async execute(input: CreateProductReviewInput): Promise<ProductReviewProps> {
    return await this.repository.createOne(input)
  }
}
