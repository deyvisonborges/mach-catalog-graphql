import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq'
import { Global, Module } from '@nestjs/common'
import { ConfigModule } from 'src/app/config/config.module'

@Global()
@Module({
  imports: [
    ConfigModule,
    RabbitMQModule.forRoot(RabbitMQModule, {
      uri: process.env.RABBITMQ_CONNECTION
    })
  ],
  exports: [RabbitMQModule]
})
export class RabbitmqModule {}
