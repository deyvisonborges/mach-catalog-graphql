import { BaseModelProps } from '../../../../core/common/base/model.base'
import { ProductImageProps } from '../product-image.model'
import { BaseServiceContract } from '../../../../core/common/base/service.base'
import { ProductImageRepositoryContract } from '../repositories/product-image.repository.contract'

export type CreateProductImageInput = Omit<
  ProductImageProps,
  keyof BaseModelProps
>
export type CreateProductImageOutput = ProductImageProps

export class CreateProductImageService
  implements
    BaseServiceContract<CreateProductImageInput, CreateProductImageOutput>
{
  constructor(private readonly repository: ProductImageRepositoryContract) {}

  async execute(
    input: CreateProductImageInput
  ): Promise<CreateProductImageOutput> {
    return await this.repository.createOne(input)
  }
}
