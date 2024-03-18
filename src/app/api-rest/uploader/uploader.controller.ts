import {
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { UploaderService } from './uploader.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { RabbitMQService } from 'src/integrations/rabbitmq/rabbitmq.service'

@Controller('uploader')
export class UploaderController {
  constructor(
    private readonly uploaderService: UploaderService,
    private readonly rmq: RabbitMQService
  ) {}

  @Get()
  async health() {
    const data = await this.rmq.consumeMessages('order-queue', msg => {
      const orderData = JSON.parse(JSON.stringify(msg))
      console.log('-- order data --', orderData)
    })
    console.log(data)
    return 'Running'
  }

  @Post('/')
  @UseInterceptors(FileInterceptor('file'))
  async uploadSingleFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 100000 }),
          new FileTypeValidator({
            fileType: 'image/jpeg'
          })
        ]
      })
    )
    file: Express.Multer.File
  ) {
    console.log(file)
    return null
  }
}
