import { EventEmitter2 } from '@nestjs/event-emitter'

export interface DomainEventType {
  aggregateId: string
  occurredOn: string
  eventVersion: string
}

export abstract class DomainEvent {
  events: Set<DomainEventType> = new Set<DomainEventType>()
  mediator = new EventEmitter2()

  applyEvent(event: DomainEventType) {
    this.events.add(event)
    this.mediator.emit(event.constructor.name, event)
  }
}
