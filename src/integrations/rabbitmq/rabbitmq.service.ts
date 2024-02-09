import { AmqpConnection } from '@golevelup/nestjs-rabbitmq'
import { Injectable } from '@nestjs/common'

@Injectable()
export class RabbitMQService {
  private amqp: AmqpConnection
  private channel = null

  async connect() {
    setTimeout(async () => {
      try {
        const connection = await this.amqp.connection('amqp://rabbitmq:5672')
        this.channel = await connection.createChannel()
        await this.channel.assertQueue('products')
        console.log('RabbitMQ connected')
      } catch (err) {
        console.error('Failed to connect to RabbitMQ:', err.message)
      }
    }, 20000) // delay 10 seconds to wait for RabbitMQ to start
  }

  async publishMessage(queue, message) {
    if (!this.channel) {
      console.error('No RabbitMQ channel available.')
      return
    }

    try {
      await this.channel.sendToQueue(
        queue,
        Buffer.from(JSON.stringify(message))
      )
    } catch (err) {
      console.log(err)
    }
  }

  async consumeMessage(queue, callback) {
    if (!this.channel) {
      console.error('No RabbitMQ channel available.')
      return
    }

    try {
      await this.channel.consume(queue, message => {
        const content = message.content.toString()
        const parsedContent = JSON.parse(content)
        callback(parsedContent)
        this.channel.ack(message)
      })
    } catch (err) {
      console.log(err)
    }
  }
}
