import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductCreatorVariants } from '../product.creator.contract'
import { ProductCreator } from '../product.creator'
import { BaseRepositoryContract } from 'src/core/common/base/repository.contract.base'

export type CreateProductInput = ProductCreatorVariants

export class CreateProductService
  implements BaseServiceContract<CreateProductInput, ProductCreatorVariants>
{
  constructor(
    private readonly productCreator: ProductCreator,
    private readonly repository: BaseRepositoryContract<ProductCreatorVariants>
  ) {}

  async execute(input: CreateProductInput): Promise<ProductCreatorVariants> {
    // const v = new VirtualProduct({} as VirtualProduct)
    // const s = new SimpleProduct({} as SimpleProduct)
    // await this.productCreator.createProduct(s)
    const createdProduct = await this.productCreator.createProduct(input)
    await this.repository.createOne(createdProduct)
    return createdProduct
  }
}
