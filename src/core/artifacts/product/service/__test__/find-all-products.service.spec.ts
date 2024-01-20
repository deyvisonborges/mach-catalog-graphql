import { ProductInMemoryRepository } from '../../repositories/product.in-memory.repository'
import { SimpleProductInMemoryRepository } from '../../variants/simple-product/repository/simple-product.in-memory.repository'
import { SimpleProduct } from '../../variants/simple-product/simple-product.model'
import { VirtualProductInMemoryRepository } from '../../variants/virtual-product/repository/virtual-product.in-memory.repository'
import { VirtualProduct } from '../../variants/virtual-product/virtual-product.model'
import { FindAllProductsService } from '../find-all-products.service'

describe('Product Service', () => {
  let simpleProductRepository: SimpleProductInMemoryRepository
  let virtualProductRepository: VirtualProductInMemoryRepository
  let productRepository: ProductInMemoryRepository
  let productService: FindAllProductsService

  beforeEach(() => {
    simpleProductRepository = new SimpleProductInMemoryRepository()
    virtualProductRepository = new VirtualProductInMemoryRepository()
    productRepository = new ProductInMemoryRepository()
    productService = new FindAllProductsService(productRepository)
  })

  it('should get all products from the repository', async () => {
    const simpleProduct = new SimpleProduct({} as SimpleProduct).create(
      {} as SimpleProduct
    )
    const virtualProduct = new VirtualProduct({} as VirtualProduct).create(
      {} as VirtualProduct
    )

    const s = await simpleProductRepository.createOne(simpleProduct)
    const v = await virtualProductRepository.createOne(virtualProduct)

    productRepository.createMany([s, v])

    const allProducts = await productService.execute()

    expect(allProducts.length).toBe(2)
  })
})
