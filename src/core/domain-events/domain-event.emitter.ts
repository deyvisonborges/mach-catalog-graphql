import { EventEmitter2 } from '@nestjs/event-emitter'
import { DomainEventType } from './domain-event.type'

export class EventEmitter {
  events: Set<DomainEventType> = new Set<DomainEventType>()
  mediator = new EventEmitter2()

  emit(event: DomainEventType) {
    this.events.add(event)
    this.mediator.emit(event.constructor.name, event)
  }
}
