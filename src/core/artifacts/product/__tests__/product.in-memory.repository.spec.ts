import { ProductTypeConstant } from '../product.constants'
import { ProductCreator } from '../product.creator'
import { ProductInMemoryRepository } from '../repositories/product.in-memory.repository'

describe('Artifact Product / InMemoryRepository', () => {
  let productRepository: ProductInMemoryRepository
  let productCreator: ProductCreator

  beforeEach(() => {
    productCreator = new ProductCreator()
    productRepository = new ProductInMemoryRepository()
  })

  it('should return all products with type `simple product`', async () => {
    const type: ProductTypeConstant = 'SIMPLE_PRODUCT'

    const product = {
      costPrice: 10,
      description: 'some description',
      name: 'some name',
      promotionalPrice: 10,
      salePrice: 10,
      sku: 'some sku',
      thumbnail: 'some thumb',
      material: 'linho',
      size: '12',
      type,
      weight: 12
    }

    const createdProduct = productCreator.createProduct(product)
    await productRepository.createOne(createdProduct)
    await productRepository.findProductByType(type)
  })
})
