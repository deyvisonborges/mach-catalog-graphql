import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq'
import { Global, Module } from '@nestjs/common'
import { ConfigModule } from 'src/app/config/config.module'
import { RabbitMQFakeConsumer } from './rabbitmq.fake-consumer'

@Global()
@Module({
  imports: [
    ConfigModule,
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: process.env.RABBITMQ_CONNECTION
    })
  ],
  providers: [RabbitMQFakeConsumer],
  exports: [RabbitMQModule]
})
export class RabbitmqModule {}
