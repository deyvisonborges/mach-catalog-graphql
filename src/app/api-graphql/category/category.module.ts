import { Module } from '@nestjs/common'
import { CategoryResolver } from './graphql/category.resolver'
import { categoryProviders } from './category.providers'
import { PrismaModule } from '../../../app/database/prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  providers: [CategoryResolver, ...categoryProviders]
})
export class CategoryModule {}
