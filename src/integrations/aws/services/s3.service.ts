import { CreateBucketCommand, S3Client } from '@aws-sdk/client-s3'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AwsS3Service {
  private bucketName: string
  private bucketKey: string
  private bucketBody: string
  private s3Client: S3Client

  async createBucket() {
    try {
      await this.s3Client.send(
        new CreateBucketCommand({
          Bucket: `${this.bucketName}-${Date.now()}`
        })
      )
    } catch (error) {}
  }
}
