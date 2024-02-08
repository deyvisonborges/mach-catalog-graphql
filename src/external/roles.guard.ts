import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { RoleConstant } from './roles.constant'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requireRole = this.reflector.getAllAndOverride<RoleConstant[]>(
      'roles',
      [context.getHandler(), context.getClass()]
    )
    if (!requireRole) return true

    const { user } = context.switchToHttp().getRequest()
    return requireRole.some(role => user?.role?.includes(role))
  }
}
