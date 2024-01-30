import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/app/database/prisma/prisma.service'
import { SimpleProductRepositoryContract } from 'src/core/artifacts/simple-product/repository/simple-product.repository.contract'
import { SimpleProductModelProps } from 'src/core/artifacts/simple-product/simple-product.model'

@Injectable()
export class SimpleProductPrismaRepository
  implements SimpleProductRepositoryContract
{
  constructor(private readonly prismaService: PrismaService) {}

  async createOne(
    entity: SimpleProductModelProps
  ): Promise<SimpleProductModelProps> {
    return await this.prismaService.simpleProduct.create({
      data: {
        material: entity.material,
        size: entity.size,
        weight: entity.weight,
        productId: entity.productId
      }
    })
  }
  createMany(
    entity: SimpleProductModelProps[]
  ): Promise<SimpleProductModelProps[]> {
    throw new Error('Method not implemented.')
  }
  update(entity: SimpleProductModelProps): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(entityId: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findById(entityId: string): Promise<SimpleProductModelProps> {
    throw new Error('Method not implemented.')
  }
  findAll(): Promise<SimpleProductModelProps[]> {
    throw new Error('Method not implemented.')
  }
}
