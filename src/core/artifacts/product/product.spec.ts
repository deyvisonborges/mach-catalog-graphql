import { ProductCreator } from './product.creator'
import {
  SimpleProduct,
  SimpleProductProps
} from './variants/virtual-product/simple-product.model'
import {
  VirtualProduct,
  VirtualProductProps
} from './variants/virtual-product.model'

describe('Test Factory Creator', () => {
  let creator: ProductCreator

  beforeEach(() => {
    creator = new ProductCreator()
  })

  it('should create a virtual product', () => {
    const virtualProductMock = new VirtualProduct({
      downloadLink: 'http://link'
    } as VirtualProductProps)
    const virtualProduct = creator.createProduct(virtualProductMock)

    // Add assertions as needed
    expect(virtualProduct).toBeDefined()
  })

  it('should create a simple product', () => {
    const simpleProductMock = new SimpleProduct({} as SimpleProductProps)
    const simpleProduct = creator.createProduct(simpleProductMock)

    // Add assertions as needed
    expect(simpleProduct).toBeDefined()
  })
})
