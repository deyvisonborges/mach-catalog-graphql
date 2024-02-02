import { DomainEventType } from 'src/core/domain-events/domain-event.type'

export class CreatedSimpleProductEvent implements DomainEventType {
  readonly aggregateId: string
  readonly occurredOn: string
  readonly eventVersion: string
}
