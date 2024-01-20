import { BaseRepositoryContract } from './repository.contract.base';
import { PrismaClient } from '@prisma/client';

type Stub = { id?: string };

export class PrismaBaseRepository<M extends Stub> implements BaseRepositoryContract<M> {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createOne(entity: M): Promise<M> {
    return this.prisma.model.create({ data: entity });
  }

  // Implemente os outros métodos conforme necessário usando o Prisma
}




import { ProductCreator } from '../../product.creator';
import { SimpleProduct } from '../../variants/simple-product/simple-product.model';
import { VirtualProduct } from '../../variants/virtual-product/virtual-product.model';
import { CreateProductService } from '../create-product.service';
import { PrismaBaseRepository } from 'caminho/para/PrismaBaseRepository';
import { ProductVariantType } from 'caminho/para/product.creator.contract';

describe('Artifact / Product', () => {
  let service: CreateProductService;
  let productCreator: ProductCreator;
  let prismaRepository: PrismaBaseRepository<ProductVariantType>;

  beforeEach(() => {
    productCreator = new ProductCreator();
    prismaRepository = new PrismaBaseRepository();
    service = new CreateProductService(productCreator, prismaRepository);
  });

  it('must create a product', async () => {
    const base = {
      costPrice: 10,
      description: 'some description',
      name: 'some name',
      promotionalPrice: 10,
      salePrice: 10,
      sku: 'some sku',
      thumbnail: 'some thumb',
    };

    const vp = new VirtualProduct({
      ...base,
      downloadLink: '/link',
      type: 'VIRTUAL_PRODUCT',
    });

    const sp = new SimpleProduct({
      ...base,
      material: 'linho',
      weight: 20,
      size: '20xl',
      type: 'SIMPLE_PRODUCT',
    });

    await service.execute(vp);
    await service.execute(sp);

    // Realize as asserções necessárias para verificar se os produtos foram criados e salvos corretamente no Prisma
  });
});
