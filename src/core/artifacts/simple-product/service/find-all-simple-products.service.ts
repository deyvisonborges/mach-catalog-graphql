import { ProductTypeModelProps } from '../../product-type/product-type.model'
import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductTypeRepositoryContract } from '../../product-type/repository/product-type.repository.contract'
import { SimpleProductModelPropsAdapter } from '../simple-product.model.adapter'
import { SimpleProductRepositoryContract } from '../repository/simple-product.repository.contract'
import { ProductRepositoryContract } from '../../product/repository/product.repository.contract'
import { ProductCategoryRepositoryContract } from 'src/core/common/repositories/product-category/product-category.repository.contract'

type Output = SimpleProductModelPropsAdapter[]

export class FindAllSimpleProductsService
  implements BaseServiceContract<void, Output>
{
  constructor(
    private readonly simpleProductRepository: SimpleProductRepositoryContract,
    private readonly productRepository: ProductRepositoryContract,
    private readonly productCategoryRepository: ProductCategoryRepositoryContract,
    private readonly productTypeRepository: ProductTypeRepositoryContract
  ) {}

  async execute(): Promise<Output> {
    const simpleProducts = await this.simpleProductRepository.findAll()

    const productIds = simpleProducts.map(product => product.productId)
    const products = await this.productRepository.findByIds(productIds)

    const simpleProductsData: Output = []

    for (const simpleProduct of simpleProducts) {
      const product = products.find(
        product => product.id === simpleProduct.productId
      )

      if (!product) {
        throw new Error(
          `Product not found for SimpleProduct with productId: ${simpleProduct.productId}`
        )
      }

      const categories =
        await this.productCategoryRepository.findCategoriesByProductId(
          product.id
        )
      const productType: ProductTypeModelProps =
        await this.productTypeRepository.findById(product.productTypeId)

      const simpleProductData: SimpleProductModelPropsAdapter = {
        ...product,
        material: simpleProduct.material,
        weight: simpleProduct.weight,
        size: simpleProduct.size,
        productType,
        categories
      }

      simpleProductsData.push(simpleProductData)
    }

    return simpleProductsData
  }
}
