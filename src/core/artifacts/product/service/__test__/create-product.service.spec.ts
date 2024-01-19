import { InMemoryBaseRepository } from '../../../../../core/common/base/in-memory-repository.base'
import { ProductCreator } from '../../product.creator'
import { SimpleProduct } from '../../variants/simple-product/simple-product.model'
import { VirtualProduct } from '../../variants/virtual-product/virtual-product.model'
import { CreateProductService } from '../create-product.service'
import { ProductCreatorVariants } from '../../product.creator.contract'

describe('Artifact / Product', () => {
  let service: CreateProductService
  let productCreator: ProductCreator
  let inMemoryRepository: InMemoryBaseRepository<ProductCreatorVariants>

  beforeEach(() => {
    productCreator = new ProductCreator()
    inMemoryRepository = new InMemoryBaseRepository<ProductCreatorVariants>()
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
      type: 'VIRTUAL_PRODUCT'
    })

    const sp = new SimpleProduct({
      ...base,
      material: 'linho',
      weight: 20,
      size: '20xl',
      type: 'SIMPLE_PRODUCT'
    })

    await service.execute(vp)
    await service.execute(sp)
  })
})
