import { Test, TestingModule } from '@nestjs/testing'
import { SimpleProductResolver } from './simple-product.resolver'
import { SimpleProductService } from './simple-product.service'

describe('SimpleProductResolver', () => {
  let resolver: SimpleProductResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimpleProductResolver, SimpleProductService]
    }).compile()

    resolver = module.get<SimpleProductResolver>(SimpleProductResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
