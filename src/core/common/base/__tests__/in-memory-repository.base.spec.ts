import { UUID } from '../../valueobjects/uuid.vo'
import { InMemoryBaseRepository } from '../in-memory-repository.base'

type StubProps = {
  id?: string
  name: string
  description: string
}

class StubModel implements StubProps {
  id?: string
  name: string
  description: string

  constructor(props: StubProps) {
    Object.assign(props)
  }
}

describe('Common/Base/InMemoryBaseRepository', () => {
  let inMemoryRepository: InMemoryBaseRepository<StubModel>

  beforeEach(() => {
    inMemoryRepository = new InMemoryBaseRepository()
  })

  it('must create a one entity', async () => {
    const data = await inMemoryRepository.createOne({
      name: 'some name',
      description: 'some description'
    })

    expect(data).toEqual({
      name: data.name,
      description: data.description
    })
  })

  it('must create many entities', async () => {
    const entities = [
      new StubModel({
        name: 'some name 001',
        description: 'some description 001'
      }),
      new StubModel({
        name: 'some name 002',
        description: 'some description 002'
      })
    ]

    await inMemoryRepository.createMany(entities)

    expect(inMemoryRepository.items.length).toBe(2)
    expect(inMemoryRepository.items[0]).toBe(entities[0])
    expect(inMemoryRepository.items[1]).toBe(entities[1])
  })

  it('must update a unique entity', async () => {
    const createdEntity = await inMemoryRepository.createOne({
      id: new UUID().get(),
      name: `before name`,
      description: `before description`
    })

    const updatedEntity = {
      id: createdEntity.id,
      name: 'after name',
      description: 'after description'
    }

    await inMemoryRepository.update(updatedEntity)

    expect(inMemoryRepository.items.length).toBe(1)
    expect(inMemoryRepository.items[0]).toBe(updatedEntity)
  })

  it('must delete a single entity', async () => {
    const createdEntity = await inMemoryRepository.createOne({
      id: new UUID().get(),
      name: `before name`,
      description: `before description`
    })

    expect(inMemoryRepository.items.length).toBe(1)
    await inMemoryRepository.delete(createdEntity.id)
    expect(inMemoryRepository.items.length).toBe(0)
  })

  it('must return a single entity by id', async () => {
    const createdEntity = await inMemoryRepository.createOne({
      id: new UUID().get(),
      name: `before name`,
      description: `before description`
    })

    const result = await inMemoryRepository.findById(createdEntity.id)

    expect(inMemoryRepository.items.length).toBe(1)
    expect(result).toBe(createdEntity)
  })

  it('must return a entity list', async () => {
    const entities = [
      new StubModel({
        name: 'some name 001',
        description: 'some description 001'
      }),
      new StubModel({
        name: 'some name 002',
        description: 'some description 002'
      })
    ]

    await inMemoryRepository.createMany(entities)
    const result = await inMemoryRepository.findAll()

    expect(result.length).toBe(2)
  })
})
