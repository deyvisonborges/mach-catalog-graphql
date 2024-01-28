import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductTypesUnion } from '../product.constants'
import { ProductRepositoryContract } from '../repository/product.repository.contract'
import { SimpleProductRepositoryContract } from '../../simple-product/repository/simple-product.repository.contract'
import { VirtualProductRepositoryContract } from '../../virtual-product/repository/virtual-product.repository.contract'
import { ProductTypeRepositoryContract } from '../../product-type/repository/product-type.repository.contract'

export class FindAllProductsService
  implements BaseServiceContract<void, ProductTypesUnion[]>
{
  constructor(
    private readonly productRepository: ProductRepositoryContract,
    private readonly productTypeReposutory: ProductTypeRepositoryContract,
    private readonly simpleProductRepository: SimpleProductRepositoryContract,
    private readonly virtualProductRepository: VirtualProductRepositoryContract
  ) {}

  async execute(): Promise<any[]> {
    const [products, productType, productSimple, productVirtual] =
      await Promise.all([
        this.productRepository.findAll(),
        this.productTypeReposutory.findAll(),
        this.simpleProductRepository.findAll(),
        this.virtualProductRepository.findAll()
      ])

    const productsAndTypes = products.map(product => {
      const type = productType.find(p => p.id === product.id)
      const simpleProduct = productSimple.find(p => p.id === product.id)
      const virtualProduct = productVirtual.find(p => p.id === product.id)

      return {
        ...product,
        type: type ? type.name : '',
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

    console.log(productsAndTypes)
    return productsAndTypes
  }
}
