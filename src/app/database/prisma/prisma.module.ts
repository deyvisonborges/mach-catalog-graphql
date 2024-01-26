import { Module } from '@nestjs/common'
import { ConfigModule } from 'src/app/config/config.module'
import { PrismaService } from './prisma.service'

@Module({
  imports: [ConfigModule],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
