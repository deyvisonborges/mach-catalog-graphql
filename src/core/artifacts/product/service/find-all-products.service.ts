import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductRepositoryContract } from '../repository/product.repository.contract'
import { SimpleProductRepositoryContract } from '../../simple-product/repository/simple-product.repository.contract'
import { VirtualProductRepositoryContract } from '../../virtual-product/repository/virtual-product.repository.contract'
import { ProductModelProps } from '../product.model'
import { ProductTypeRepositoryContract } from '../../product-type/repository/product-type.repository.contract'
import { ProductTypeModelProps } from '../../product-type/product-type.model'
import { CategoryModelProps } from '../../category/category.model'
import { ProductCategoryRepositoryContract } from 'src/core/common/repositories/product-category/product-category.repository.contract'

export type FindAllProductsServiceOutput = Omit<
  ProductModelProps,
  'productTypeId'
> & {
  productType: ProductTypeModelProps
  categories: CategoryModelProps[]
}

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
    const [products, productTypes, simpleProducts, virtualProducts] =
      await Promise.all([
        this.productRepository.findAll(),
        this.productTypeRepository.findAll(),
        this.simpleProductRepository.findAll(),
        this.virtualProductRepository.findAll()
      ])

    const resolvedProducts: FindAllProductsServiceOutput[] = await Promise.all(
      products.map(async product => {
        const { productTypeId, ...productWithoutTypeId } = product
        const correspondingType = productTypes.find(
          type => type.id === productTypeId
        )
        if (!correspondingType) {
          throw new Error(
            `Corresponding product type not found for Product with productTypeId: ${product.productTypeId}`
          )
        }

        const categories =
          await this.productCategoryRepository.findCategoriesByProductId(
            product.id
          )

        const simpleProduct = simpleProducts.find(
          p => p.productId === product.id
        )
        const virtualProduct = virtualProducts.find(
          p => p.productId === product.id
        )

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

    console.log(resolvedProducts)

    return resolvedProducts
  }
}
