import { BaseServiceContract } from 'src/core/common/base/service.base'
import { ProductRepositoryContract } from '../repository/product.repository.contract'
import { SimpleProductRepositoryContract } from '../../simple-product/repository/simple-product.repository.contract'
import { VirtualProductRepositoryContract } from '../../virtual-product/repository/virtual-product.repository.contract'
import { SimpleProductModelProps } from '../../simple-product/simple-product.model'
import { VirtualProductModelProps } from '../../virtual-product/virtual-product.model'
import { ProductModelProps } from '../product.model'
import { ProductTypeRepositoryContract } from '../../product-type/repository/product-type.repository.contract'
import { ProductTypeModelProps } from '../../product-type/product-type.model'

type ProductsUnion = SimpleProductModelProps & VirtualProductModelProps

export type FindAllProductsServiceOutput = Omit<
  ProductsUnion,
  'productTypeId'
> &
  ProductOutput

type ProductOutput = Omit<ProductModelProps, 'productTypeId'> & {
  productType: ProductTypeModelProps
}

export class FindAllProductsService
  implements BaseServiceContract<void, FindAllProductsServiceOutput[]>
{
  constructor(
    private readonly productRepository: ProductRepositoryContract,
    private readonly simpleProductRepository: SimpleProductRepositoryContract,
    private readonly virtualProductRepository: VirtualProductRepositoryContract,
    private readonly productTypeRepository: ProductTypeRepositoryContract
  ) {}

  async execute(): Promise<FindAllProductsServiceOutput[]> {
    const [products, productSimple, productVirtual, productTypes] =
      await Promise.all([
        this.productRepository.findAll(),
        this.simpleProductRepository.findAll(),
        this.virtualProductRepository.findAll(),
        this.productTypeRepository.findAll()
      ])

    const resolvedProducts: ProductOutput[] = products.map(product => {
      const { productTypeId, ...productWithoutTypeId } = product
      const correspondingType = productTypes.find(
        type => type.id === productTypeId
      )
      if (!correspondingType) {
        throw new Error(
          `Corresponding product type not found for Product with productTypeId: ${product.productTypeId}`
        )
      }

      return {
        ...productWithoutTypeId,
        productType: correspondingType
      }
    })

    const productsAndTypes = resolvedProducts.map(product => {
      const simpleProduct = productSimple.find(p => p.productId === product.id)
      const virtualProduct = productVirtual.find(
        p => p.productId === product.id
      )

      const productWithDetails: FindAllProductsServiceOutput = {
        name: product.name,
        description: product.description,
        thumbnail: product.thumbnail,
        salePrice: product.salePrice,
        costPrice: product.costPrice,
        promotionalPrice: product.promotionalPrice,
        sku: product.sku,
        ...(simpleProduct && {
          weight: simpleProduct.weight,
          material: simpleProduct.material,
          size: simpleProduct.size
        }),
        ...(virtualProduct && {
          downloadLink: virtualProduct.downloadLink
        }),
        productType: product.productType
      }

      return productWithDetails
    })

    return productsAndTypes
  }
}
