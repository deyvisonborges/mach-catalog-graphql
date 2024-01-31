import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common'
import { UploaderService } from './uploader.service'
import { FileInterceptor } from '@nestjs/platform-express'
import { createClient } from '@supabase/supabase-js'

@Controller('uploader')
export class UploaderController {
  constructor(private readonly uploaderService: UploaderService) {}

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
    return null
  }
}
