import { Injectable } from '@nestjs/common'
import { RoleEnum } from './roles.constant'

interface IsAuthorizedParams {
  currentRole: RoleEnum
  requiredRole: RoleEnum
}

@Injectable()
export class AccessContorlService {
  private hierarchies: Array<Map<string, number>> = []
  private priority = 1

  constructor() {
    this.buildRoles([RoleEnum.CUSTOMER, RoleEnum.ADMIN])
    this.buildRoles([RoleEnum.MANAGER, RoleEnum.ADMIN])
  }

  /**
   * The buildRoles method allows for creating a role hierarchy between specified set of roles.
   * Roles have to be specified from least privileged user to the most priviliged one
   * @param roles Array that contains list of roles
   */
  private buildRoles(roles: RoleEnum[]) {
    const hierarchy: Map<string, number> = new Map()
    roles.forEach(role => {
      hierarchy.set(role, this.priority)
      this.priority++
    })
    this.hierarchies.push(hierarchy)
  }

  public isAuthorized({ currentRole, requiredRole }: IsAuthorizedParams) {
    for (const hierarchy of this.hierarchies) {
      const priority = hierarchy.get(currentRole)
      const requiredPriority = hierarchy.get(requiredRole)
      if (priority && requiredPriority && priority >= requiredPriority) {
        return true
      }
    }
    return false
  }
}

// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { Observable } from 'rxjs';
// import { ROLE_KEY } from 'src/decorators/roles.decorator';
// import { Role } from 'src/enums/role.enum';
// import { AccessContorlService } from 'src/shared/access-control.service';

// export class TokenDto {
//   id: number;
//   role: Role;
// }

// @Injectable()
// export class RoleGuard implements CanActivate {
//   constructor(
//     private reflector: Reflector,
//     private accessControlService: AccessContorlService,
//   ) {}

//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLE_KEY, [
//       context.getHandler(),
//       context.getClass(),
//     ]);

//     const request = context.switchToHttp().getRequest();
//     const token = request['token'] as TokenDto;

//     for (let role of requiredRoles) {
//       const result = this.accessControlService.isAuthorized({
//         requiredRole: role,
//         currentRole: token.role,
//       });

//       if (result) {
//         return true;
//       }
//     }

//     return false;
//   }
// }
