import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductRepositoryContract } from '../repository/product.repository.contract'
import { SimpleProductRepositoryContract } from '../../simple-product/repository/simple-product.repository.contract'
import { VirtualProductRepositoryContract } from '../../virtual-product/repository/virtual-product.repository.contract'
import { ProductTypeRepositoryContract } from '../../product-type/repository/product-type.repository.contract'
import { ProductModelProps } from '../product.model'
import { BaseModelProps } from 'src/core/common/base/model.base'
import { SimpleProductModelProps } from '../../simple-product/simple-product.model'
import { VirtualProductModelProps } from '../../virtual-product/virtual-product.model'

export type FindAllProductsServiceOutput =
  | (Omit<ProductModelProps, keyof BaseModelProps> &
      Omit<SimpleProductModelProps, keyof BaseModelProps>)
  | Omit<VirtualProductModelProps, keyof BaseModelProps>

export class FindAllProductsService
  implements BaseServiceContract<void, FindAllProductsServiceOutput[]>
{
  constructor(
    private readonly productRepository: ProductRepositoryContract,
    private readonly productTypeReposutory: ProductTypeRepositoryContract,
    private readonly simpleProductRepository: SimpleProductRepositoryContract,
    private readonly virtualProductRepository: VirtualProductRepositoryContract
  ) {}

  async execute(): Promise<FindAllProductsServiceOutput[]> {
    const [products, productType, productSimple, productVirtual] =
      await Promise.all([
        this.productRepository.findAll(),
        this.productTypeReposutory.findAll(),
        this.simpleProductRepository.findAll(),
        this.virtualProductRepository.findAll()
      ])

    const productsAndTypes = products.map(product => {
      const simpleProduct = productSimple.find(p => p.id === product.id)
      const virtualProduct = productVirtual.find(p => p.id === product.id)

      return {
        ...product,
        ...(simpleProduct && {
          weight: simpleProduct.weight,
          material: simpleProduct.material,
          size: simpleProduct.size
        }),
        ...(virtualProduct && {
          downloadLink: virtualProduct.downloadLink
        }),
        ...(product.product.productType && {})
      }
    })

    return productsAndTypes
  }
}
