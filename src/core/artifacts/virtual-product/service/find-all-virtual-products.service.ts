import { BaseServiceContract } from 'src/core/common/base/service.base'
import { VirtualProductRepositoryContract } from '../repository/virtual-product.repository.contract'
import { ProductRepositoryContract } from '../../product/repository/product.repository.contract'
import { VirtualProductModelPropsAdapter } from '../virtual-product.model.adapter'
import { ProductCategoryRepositoryContract } from 'src/core/common/repositories/product-category/product-category.repository.contract'
import { ProductTypeRepositoryContract } from '../../product-type/repository/product-type.repository.contract'
import { ProductTypeModelProps } from '../../product-type/product-type.model'

type Output = VirtualProductModelPropsAdapter[]

export class FindAllVirtualProductsService
  implements BaseServiceContract<void, Output>
{
  constructor(
    private readonly productRepository: ProductRepositoryContract,
    private readonly productCategoryRepository: ProductCategoryRepositoryContract,
    private readonly productTypeRepository: ProductTypeRepositoryContract,
    private readonly repository: VirtualProductRepositoryContract
  ) {}

  async execute(): Promise<Output> {
    const virtualProducts = await this.repository.findAll()

    const productIds = virtualProducts.map(product => product.productId)
    const products = await this.productRepository.findByIds(productIds)

    const virtualProductsData: Output = []

    for (const virtualProduct of virtualProducts) {
      const product = products.find(
        product => product.id === virtualProduct.productId
      )

      if (!product) {
        throw new Error(
          `Product not found for SimpleProduct with productId: ${virtualProduct.productId}`
        )
      }

      const categories =
        await this.productCategoryRepository.findCategoriesByProductId(
          product.id
        )
      const productType: ProductTypeModelProps =
        await this.productTypeRepository.findById(product.productTypeId)

      const virtualProductData: VirtualProductModelPropsAdapter = {
        ...product,
        downloadLink: virtualProduct.downloadLink,
        productType,
        categories
      }

      virtualProductsData.push(virtualProductData)

      return virtualProductsData
    }
  }
}
