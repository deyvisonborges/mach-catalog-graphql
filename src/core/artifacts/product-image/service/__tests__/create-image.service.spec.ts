import { ProductImageInMemoryRepository } from '../../repositories/product-image.in-memory.repository'
import { CreateProductImageService } from '../create-image.service'

describe('', () => {
  let service: CreateProductImageService
  let repository: ProductImageInMemoryRepository

  beforeEach(() => {
    repository = new ProductImageInMemoryRepository()
    service = new CreateProductImageService(repository)
  })

  it('must be create a product image', async () => {
    await service.execute({
      name: 'image 001',
      description: 'image 001 descripton',
      url: 'http://images.repo'
    })

    expect(repository.items.length).toBe(1)
  })
})
