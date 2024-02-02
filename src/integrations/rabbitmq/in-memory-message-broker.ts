import { DomainEventType } from 'src/core/domain-events/domain-event.type'
import { RabbitMQMessageBrokerProps } from './rabbitmq.message-broker'

export class InMemoryMessageBroker implements RabbitMQMessageBrokerProps {
  private handlers: { [key: string]: (event: DomainEventType) => void } = {}

  async publish(event: DomainEventType): Promise<void> {
    const handler = this.handlers[event.constructor.name]
    if (handler) {
      handler(event)
    }
  }
}
