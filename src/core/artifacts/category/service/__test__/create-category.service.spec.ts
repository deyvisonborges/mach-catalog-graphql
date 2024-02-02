import { CategoryInMemoryRepository } from '../../repository/category.in-memory.repository'
import { CreateCategoryService } from '../create-category.service'

describe(`CreateCategoryService / Unit test`, () => {
  let repository: CategoryInMemoryRepository
  let service: CreateCategoryService

  beforeEach(() => {
    repository = new CategoryInMemoryRepository()
    service = new CreateCategoryService(repository)
  })

  it(`should create a category`, async () => {
    const spyInsert = jest.spyOn(repository, `createOne`)

    await service.execute({
      name: `Some name`,
      description: `Some description`
    })

    expect(spyInsert).toHaveBeenCalledTimes(1)

    await service.execute({
      name: `Other name`,
      description: `Other description`
    })

    expect(spyInsert).toHaveBeenCalledTimes(2)
  })
})
