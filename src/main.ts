import helmet from 'helmet'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(
    /**
     * When using helmet, @apollo/server (4.x), and the Apollo Sandbox,
     * there may be a problem with CSP on the Apollo Sandbox.
     * To solve this issue configure the CSP as shown below:
     */
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        directives: {
          imgSrc: [
            `'self'`,
            'data:',
            'apollo-server-landing-page.cdn.apollographql.com'
          ],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
          manifestSrc: [
            `'self'`,
            'apollo-server-landing-page.cdn.apollographql.com'
          ],
          frameSrc: [`'self'`, 'sandbox.embed.apollographql.com']
        }
      }
    })
  )
  await app.listen(3000)
}
bootstrap()
