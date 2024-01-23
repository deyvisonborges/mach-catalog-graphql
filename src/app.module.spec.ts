import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { ConfigEnvSchema } from './app/config/config.types'

describe('AppModule', () => {
  let appModule: TestingModule

  beforeAll(async () => {
    appModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()
  })

  it('should be defined', () => {
    const app = appModule.createNestApplication()
    expect(app).toBeDefined()
  })

  it('should load environment configuration', () => {
    const configService =
      appModule.get<ConfigService<ConfigEnvSchema>>(ConfigService)

    // Replace 'NOME_DA_VARIAVEL_DE_AMBIENTE' with the actual environment variable name
    const envValue = configService.get<string>('POSTGRES_HOST')

    console.log('Valor da variável de ambiente:', envValue)
  })
})
