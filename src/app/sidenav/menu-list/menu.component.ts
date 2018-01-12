import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import { IMenu } from '../../_models/_shared';
import { IRole } from '../../_models/user';

import { SidenavService, AuthenticationService } from '../../_services/index';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'sidenav'.
   */
  selector: 'menu-list',  // <menu-list></menu-list>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: ['./menu.component.css'],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './menu.component.html',
  /**
   * To use custom css.
   */
  encapsulation: ViewEncapsulation.None
})
export class MenuListComponent implements OnInit {

  public static updateMenu: Subject<boolean> = new Subject();

  /**
   * Set our default values
   */
  public userRoles: string[] = [];
  public menuList: IMenu[] = [];

  public subscription: Subscription;
  public isLoggedIn: boolean = false;

  private _userRolesService: IRole[] = [];

  /**
   * TypeScript public modifiers
   */
  constructor(
      private sidenavService: SidenavService,
      private authService: AuthenticationService
  ) {

    // Create a subscriber that will update every time a user logged in.
    // This way we guarantee that the menu is update if a user change his role.
    this.subscription = MenuListComponent.updateMenu.subscribe((res) => {

      this.isLoggedIn = true;

      // Clear roles
      this.userRoles = [];

      // Get user roles
      this._userRolesService = this.authService.getRoles();

      // Get user roles from object
      for (let key in this._userRolesService) {
        if (this._userRolesService[key].name) {
        this.userRoles.push(this._userRolesService[key].name);
        }
      }

      // Get menu sections
      this.menuList = this.sidenavService.sections;
    });
  }

  /**
   * On init.
   *
   * @https://angular.io/guide/lifecycle-hooks
   */
  public ngOnInit() {

    // Check if user is logged in to show/hide logout button.
    this.isLoggedIn = this.authService.userIsLoggedIn();

    // Get user roles
    this._userRolesService = this.authService.getRoles();

    // Get user roels from object
    for (let key in this._userRolesService) {
      if (this._userRolesService[key].name) {
       this.userRoles.push(this._userRolesService[key].name);
      }
    }

    this.menuList = this.sidenavService.sections;
  }

  /**
   * On destroy.
   *
   * @https://angular.io/guide/lifecycle-hooks
   */
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  /**
   * Came from template. Check if we should or not show the menu to the user
   * according with user role(s).
   */
  public havePermissions(menuPermission) {

    return this.checkIfExist(this.userRoles, menuPermission);
  }

  /**
   * Logout a user.
   */
  public logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }

  /**
   * Check if menu has submenu.
   *
   * @param menu
   */
  public hasExpandablePanel(menu: IMenu) {
    return menu.submenu;
  }

  /**
   * @description determine if an array contains one or more items from another array.
   *
   * @param {array} haystack the array to search.
   * @param {array} arr the array providing items to check for in the haystack.
   *
   * @return {boolean} true|false if haystack contains at least one item from arr.
   */
  private checkIfExist (haystack, arr) {

    // If the menu doesn't have any permission defined, we show it.
    if (!arr) {
        return true;
    }

    return arr.some(function (v) {
      return haystack.indexOf(v) >= 0;
    });
  };

}
