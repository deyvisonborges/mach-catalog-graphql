import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductRepositoryContract } from '../repository/product.repository.contract'
import { SimpleProductRepositoryContract } from '../../simple-product/repository/simple-product.repository.contract'
import { VirtualProductRepositoryContract } from '../../virtual-product/repository/virtual-product.repository.contract'
import { ProductTypeRepositoryContract } from '../../product-type/repository/product-type.repository.contract'
import { ProductTypeModelProps } from '../../product-type/product-type.model'
import { ProductCategoryRepositoryContract } from 'src/core/common/repositories/product-category/product-category.repository.contract'
import { ProductModelPropsAdapter } from '../product.model.adapter'

export type FindAllProductsServiceOutput = ProductModelPropsAdapter

export class FindAllProductsService
  implements BaseServiceContract<void, FindAllProductsServiceOutput[]>
{
  constructor(
    private readonly productRepository: ProductRepositoryContract,
    private readonly simpleProductRepository: SimpleProductRepositoryContract,
    private readonly virtualProductRepository: VirtualProductRepositoryContract,
    private readonly productTypeRepository: ProductTypeRepositoryContract,
    private readonly productCategoryRepository: ProductCategoryRepositoryContract
  ) {}

  async execute(): Promise<FindAllProductsServiceOutput[]> {
    const [products, productTypes] = await Promise.all([
      this.productRepository.findAll(),
      this.productTypeRepository.findAll()
    ])

    const productTypeMap = new Map<string, ProductTypeModelProps>()
    productTypes.forEach(type => productTypeMap.set(type.id, type))

    const resolvedProducts: FindAllProductsServiceOutput[] = await Promise.all(
      products.map(async product => {
        const { productTypeId, ...productWithoutTypeId } = product
        const correspondingType = productTypeMap.get(productTypeId)
        if (!correspondingType) {
          throw new Error(
            `Corresponding product type not found for Product with productTypeId: ${product.productTypeId}`
          )
        }

        const categories =
          await this.productCategoryRepository.findCategoriesByProductId(
            product.id
          )

        const [simpleProduct, virtualProduct] = await Promise.all([
          this.simpleProductRepository.findByProductId(product.id),
          this.virtualProductRepository.findByProductId(product.id)
        ])

        return {
          ...productWithoutTypeId,
          productType: correspondingType,
          categories: categories,
          ...(simpleProduct && {
            weight: simpleProduct.weight,
            material: simpleProduct.material,
            size: simpleProduct.size
          }),
          ...(virtualProduct && {
            downloadLink: virtualProduct.downloadLink
          })
        }
      })
    )

    return resolvedProducts
  }
}
