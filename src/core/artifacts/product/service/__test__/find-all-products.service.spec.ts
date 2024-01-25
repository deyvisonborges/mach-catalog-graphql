import { ProductInMemoryRepository } from '../../repositories/product.in-memory.repository'
import { SimpleProduct } from '../../variants/virtual-product/simple-product.model'
import { VirtualProduct } from '../../variants/virtual-product.model'
import { FindAllProductsService } from '../find-all-products.service'

describe('Product Service', () => {
  let productRepository: ProductInMemoryRepository
  let productService: FindAllProductsService

  beforeEach(() => {
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

    productRepository.createMany([simpleProduct, virtualProduct])

    const allProducts = await productService.execute()

    expect(allProducts.length).toBe(2)
  })
})
