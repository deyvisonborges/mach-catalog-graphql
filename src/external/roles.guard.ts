import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Observable } from 'rxjs'
import { RoleConstant } from './roles.constant'
import { ROLES_KEYS } from './roles.decorator'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<RoleConstant[]>(
      ROLES_KEYS,
      [context.getHandler(), context.getClass()]
    )

    if (!requiredRoles) return true

    const ctx = GqlExecutionContext.create(context)
    const user = ctx.getContext().req.user

    return requiredRoles.some(role => user?.roles?.includes(role))
  }
}
