import {
  GetObjectAclCommand,
  GetObjectCommand,
  S3Client
} from '@aws-sdk/client-s3'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import * as AWS from 'aws-sdk'

/**
 * @export
 * @class AwsS3Service
 */
@Injectable()
export class AwsS3Service {
  private readonly _s3Client = new S3Client()

  private readonly _region: string
  private readonly _bucketKey: string
  private readonly _bucketName: string
  private readonly _credentials: string

  async getObject() {
    try {
      const { Body } = await this._s3Client.send(
        new GetObjectCommand({
          Bucket: this._bucketName,
          Key: this._bucketKey
        })
      )

      return JSON.parse(await Body.transformToString())
    } catch (error) {
      throw new HttpException(
        {
          statusCode: error.statusCode,
          message: 'error',
          data: error
        },
        HttpStatus.BAD_REQUEST
      )
    }
  }
}
