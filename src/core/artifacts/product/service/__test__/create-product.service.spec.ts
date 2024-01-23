import { ProductCreator } from '../../product.creator'
import { ProductInMemoryRepository } from '../../repositories/product.in-memory.repository'
import { SimpleProduct } from '../../variants/simple-product.model'
import { VirtualProduct } from '../../variants/virtual-product.model'
import { CreateProductService } from '../create-product.service'

describe('Artifact / Product', () => {
  let service: CreateProductService
  let productCreator: ProductCreator
  let inMemoryRepository: ProductInMemoryRepository

  beforeEach(() => {
    productCreator = new ProductCreator()
    inMemoryRepository = new ProductInMemoryRepository()
    service = new CreateProductService(productCreator, inMemoryRepository)
  })

  it('must create a product', async () => {
    const base = {
      costPrice: 10,
      description: 'some description',
      name: 'some name',
      promotionalPrice: 10,
      salePrice: 10,
      sku: 'some sku',
      thumbnail: 'some thumb'
    }

    const vp = new VirtualProduct({
      ...base,
      downloadLink: '/link',
      type: 'VIRTUAL_PRODUCT',
      images: [
        { name: 'Image 001', description: 'Image description', url: '/' }
      ]
    })

    const sp = new SimpleProduct({
      ...base,
      material: 'linho',
      weight: 20,
      size: '20xl',
      type: 'SIMPLE_PRODUCT',
      images: [
        { name: 'Image 001', description: 'Image description', url: '/' }
      ]
    })

    await service.execute(vp)
    await service.execute(sp)
  })
})
