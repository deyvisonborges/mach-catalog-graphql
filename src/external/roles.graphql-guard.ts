import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { RoleConstant } from './roles.constant'

@Injectable()
export class RolesGuard_ implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context)

    const requiredRoles = this.reflector.getAllAndOverride<RoleConstant[]>(
      process.env.PUBLIC_RSA_KEY,
      [context.getHandler(), context.getClass()]
    )

    if (!requiredRoles) {
      return true
    }

    const { user } = ctx.getContext().req
    return requiredRoles.some(role => user.role?.includes(role))
  }
}
