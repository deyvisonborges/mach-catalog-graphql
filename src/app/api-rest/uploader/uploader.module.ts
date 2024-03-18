import { Module } from '@nestjs/common'
import { UploaderService } from './uploader.service'
import { UploaderController } from './uploader.controller'
import { RabbitMQService } from 'src/integrations/rabbitmq/rabbitmq.service'

@Module({
  controllers: [UploaderController],
  providers: [UploaderService, RabbitMQService]
})
export class UploaderModule {}
