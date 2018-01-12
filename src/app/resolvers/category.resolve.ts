import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ContextService } from '../_services/index';

import { ICategory } from '../_models/audit';

@Injectable()
export class CategoryResolve implements Resolve<ICategory> {

  constructor(private contextService: ContextService) {}

  public resolve(route: ActivatedRouteSnapshot) {
    return this.contextService.getParentCategories();
  }
}
