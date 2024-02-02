import { CategoryModel } from '../../category.model'
import { CategoryInMemoryRepository } from '../../repository/category.in-memory.repository'

import { FindAllCategoriesService } from '../find-all-categories.service'

describe(`Retrieve All Categories Unit Tests`, () => {
  let repo: CategoryInMemoryRepository
  let service: FindAllCategoriesService

  beforeEach(() => {
    repo = new CategoryInMemoryRepository()
    service = new FindAllCategoriesService(new CategoryInMemoryRepository())
  })

  it(`should return a list of categories`, async () => {
    await repo.createOne(
      new CategoryModel({
        name: `fake name 001`,
        description: `fake description`
      })
    )

    await repo.createOne(
      new CategoryModel({
        name: `fake name 002`,
        description: `fake description`
      })
    )

    await service.execute()
  })
})
