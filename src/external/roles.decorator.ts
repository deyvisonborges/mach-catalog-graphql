import { SetMetadata } from '@nestjs/common'
import { RoleConstant } from './roles.constant'

export const ROLES_KEYS = 'roles'
export const HasRoles = (...roles: RoleConstant[]) =>
  SetMetadata(ROLES_KEYS, roles)
