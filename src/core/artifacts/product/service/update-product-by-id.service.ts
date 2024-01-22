import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductVariantType } from '../product.creator.contract'
import { BaseModelProps } from 'src/core/common/base/model.base'
import { SimpleProductProps } from '../variants/simple-product.model'
import { ProductRepositoryContract } from '../repositories/product.repository.contract'
import { FindProductByIdService } from './find-product-by-id.service'

export type UpdateProductByIdInput = Partial<
  Omit<ProductVariantType, keyof BaseModelProps> & { id: string }
>

type Output = ProductVariantType
export class UpdateProductByIdService
  implements BaseServiceContract<UpdateProductByIdInput, Output>
{
  constructor(
    private readonly productRepository: ProductRepositoryContract,
    private readonly findProductByIdService: FindProductByIdService
  ) {}

  async execute(input: UpdateProductByIdInput): Promise<Output> {
    const product = await this.findProductByIdService.execute({ id: input.id })

    switch (product.type) {
      case 'SIMPLE_PRODUCT':
        return await this.updateSimpleProduct(
          product as SimpleProductProps,
          input as SimpleProductProps
        )
      default:
        throw new Error(
          `BadRequest: Fail to update because type: ${input.type}`
        )
    }
  }

  private async updateSimpleProduct(
    oldProduct: SimpleProductProps,
    newProduct: SimpleProductProps
  ): Promise<SimpleProductProps> {
    const updatedSimpleProduct: Omit<SimpleProductProps, keyof BaseModelProps> =
      {
        ...oldProduct,
        costPrice: this.updateProperty(
          newProduct.costPrice,
          oldProduct.costPrice
        ),
        description: this.updateProperty(
          newProduct.description,
          oldProduct.description
        ),
        material: this.updateProperty(newProduct.material, oldProduct.material),
        name: this.updateProperty(newProduct.name, oldProduct.name),
        promotionalPrice: this.updateProperty(
          newProduct.promotionalPrice,
          oldProduct.promotionalPrice
        ),
        salePrice: this.updateProperty(
          newProduct.salePrice,
          oldProduct.salePrice
        ),
        size: this.updateProperty(newProduct.size, oldProduct.size),
        sku: this.updateProperty(newProduct.sku, oldProduct.sku),
        thumbnail: this.updateProperty(
          newProduct.thumbnail,
          oldProduct.thumbnail
        ),
        weight: this.updateProperty(newProduct.weight, oldProduct.weight)
      }

    await this.productRepository.update({ ...updatedSimpleProduct })
    return updatedSimpleProduct
  }

  private updateProperty<T>(
    newValue: T,
    oldValue: T | undefined
  ): T | undefined {
    return newValue !== undefined ? newValue : oldValue
  }
}
