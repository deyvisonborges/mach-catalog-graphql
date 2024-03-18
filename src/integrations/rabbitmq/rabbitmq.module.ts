import { Global, Module } from '@nestjs/common'
import { ConfigModule } from 'src/app/config/config.module'
import { RabbitMQFakeConsumer } from './rabbitmq.fake-consumer'
import { RabbitMQService } from './rabbitmq.service'

@Global()
@Module({
  imports: [ConfigModule],
  providers: [RabbitMQFakeConsumer, RabbitMQService],
  exports: [RabbitMQService]
})
export class RabbitmqModule {}
