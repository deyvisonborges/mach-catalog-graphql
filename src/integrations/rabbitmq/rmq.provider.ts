import { Provider } from '@nestjs/common'
import { RabbitMQService } from './rabbitmq.service'

export const RMQ_PROVIDER_CONFIG: Provider<any> = {
  provide: RabbitMQService,
  useFactory: async () => {
    const service = new RabbitMQService()
    await service.connect()
    return service
  }
}
