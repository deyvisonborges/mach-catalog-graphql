import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { ConfigEnvSchema } from '../app/config/config.types'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class JwtGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService<ConfigEnvSchema>
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context)

    const request = ctx.getContext().req
    const token = this.extractTokenFromHeader(request)

    if (!token) throw new UnauthorizedException(`Token not found`)

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'test'
      })

      request['user'] = payload
      return true
    } catch {
      throw new UnauthorizedException()
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers?.['authorization']?.split(' ') ?? []
    return type === `Bearer` ? token : undefined
  }
}
