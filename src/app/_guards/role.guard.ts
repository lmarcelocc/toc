import { Injectable } from '@angular/core';
import { Router, CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services/index';

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthenticationService) {}

    /**
    * @description determine if an array contains one or more items from another array.
    *
    * @param {array} haystack the array to search.
    * @param {array} arr the array providing items to check for in the haystack.
    *
    * @src https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript
    *
    * @return {boolean} true|false if haystack contains at least one item from arr.
    */
    checkIfExist (haystack, arr) {

      // If the menu doesn't have any permission defined, we show it.
      if (!arr) {
        return true;
      }

      return arr.some(function (v) {
        return haystack.indexOf(v) >= 0;
      });
    };

    /**
     * Check if the user has access to this route.
     */
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean {

        // Check if the user as a token saved on local storage and if is valid.
        if (!localStorage.getItem('currentUser')) {
            // not logged in so redirect to login page
            this.router.navigate(['/login']);
            return false;
        }

        // Get role saved on local storage
        let roles = this.authService.getUserRolesArray();

        // Get roles from route data
        let routeRoles = route.firstChild.data.roles;

        // es6 Array.prototype.includes()
        // @https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript
        if (this.checkIfExist(routeRoles, roles)) {
            return true;
        }

        return false;

    }
}