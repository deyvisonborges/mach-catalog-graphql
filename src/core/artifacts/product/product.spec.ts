import { ProductCreator } from './product.creator'
import { VirtualProductProps } from './variants/virtual-product.concrete'
import { SimpleProductProps } from './variants/simple-product.concrete'

describe('Test Factory Creator', () => {
  let creator: ProductCreator

  beforeEach(() => {
    creator = new ProductCreator()
  })

  it('should create a virtual product', () => {
    const virtualProduct = creator.createProduct('VIRTUAL_PRODUCT', {
      downloadLink: 'http://link'
    } as VirtualProductProps)

    console.log('virtual', virtualProduct)

    // Add assertions as needed
    expect(virtualProduct).toBeDefined()
  })

  it('should create a simple product', () => {
    const simpleProduct = creator.createProduct('SIMPLE_PRODUCT', {
      material: 'linho',
      weight: 300
    } as SimpleProductProps)

    console.log('simple product', simpleProduct)

    // Add assertions as needed
    expect(simpleProduct).toBeDefined()
  })
})
