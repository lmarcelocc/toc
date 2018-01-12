import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { RoleService } from '../_services/index';

import { IRole } from '../_models/user';

@Injectable()
export class RoleResolve implements Resolve<IRole> {

  constructor(private rolesService: RoleService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.rolesService.geRoles();
  }
}
