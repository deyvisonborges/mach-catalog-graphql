import { AmqpConnection } from '@golevelup/nestjs-rabbitmq'
import { DomainEventType } from '../../core/domain-events/domain-event.type'
import { domainsEventsConfig } from 'src/core/domain-events/events'

export type RabbitMQMessageBrokerProps = {
  publish(event: DomainEventType): Promise<void>
}

export class RabbitMQMessageBroker implements RabbitMQMessageBrokerProps {
  constructor(private readonly connection: AmqpConnection) {}

  async publish(event: DomainEventType): Promise<void> {
    const config = domainsEventsConfig[event.constructor.name]
    await this.connection.publish(config.exchange, config.routingKey, event)
  }
}
