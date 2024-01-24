export class Numerable {
  private readonly id: number
  private static idCounter = 1

  constructor() {
    this.id = Numerable.getNextId()
  }

  private static getNextId(): number {
    const nextId = Numerable.idCounter++
    if (nextId > Number.MAX_SAFE_INTEGER) {
      throw new InvalidNumerabledError('Exceeded maximum allowed ID')
    }
    return nextId
  }

  get() {
    return this.id
  }
}

export class InvalidNumerabledError extends Error {
  constructor(message?: string) {
    super(message || 'Invalid Numerable ID')
    this.name = 'InvalidNumerabledError'
  }
}
