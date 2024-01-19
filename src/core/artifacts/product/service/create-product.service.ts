import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductCreatorVariants } from '../product.creator.contract'
import { ProductCreator } from '../product.creator'

export type CreateProductInput = ProductCreatorVariants

export class CreateProductService
  implements BaseServiceContract<CreateProductInput, ProductCreatorVariants>
{
  constructor(private readonly productCreator: ProductCreator) {}

  async execute(input: CreateProductInput): Promise<ProductCreatorVariants> {
    // const v = new VirtualProduct({} as VirtualProduct)
    // const s = new SimpleProduct({} as SimpleProduct)

    // await this.productCreator.createProduct(s)
    return await this.productCreator.createProduct(input)
  }
}
