import { ProductInMemoryRepository } from '../../repositories/product.in-memory.repository'
import { ProductRepositoryContract } from '../../repositories/product.repository.contract'
import { SimpleProduct } from '../../variants/virtual-product/simple-product.model'
import { FindProductByIdService } from '../find-product-by-id.service'
import { UpdateProductByIdService } from '../update-product-by-id.service'

describe('UpdateProductByIdService', () => {
  let updateProductService: UpdateProductByIdService
  let productRepository: ProductRepositoryContract
  let findProductByIdService: FindProductByIdService

  beforeEach(() => {
    productRepository = new ProductInMemoryRepository()
    findProductByIdService = new FindProductByIdService(productRepository)
    updateProductService = new UpdateProductByIdService(
      productRepository,
      findProductByIdService
    )
  })

  it('', async () => {
    const base = {
      costPrice: 10,
      description: 'some description',
      name: 'some name',
      promotionalPrice: 10,
      salePrice: 10,
      sku: 'some sku',
      thumbnail: 'some thumb'
    }

    const vp = new SimpleProduct({
      ...base,
      material: 'linho',
      size: '12',
      type: 'VIRTUAL_PRODUCT',
      weight: 12,
      images: []
    })
    await productRepository.createOne(vp)

    const updated = await updateProductService.execute({
      id: vp.id,
      name: 'updated name'
    })

    expect(vp.name).not.toBe(updated.name)
  })
})
