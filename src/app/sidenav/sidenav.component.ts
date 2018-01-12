import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { SidenavService, AuthenticationService, UserService } from '../_services/index';
import { IMenu } from '../_models/_shared';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'sidenav'.
   */
  selector: 'sidenav-menu',  // <sidenav-menu></sidenav-menu>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './sidenav.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './sidenav.component.html'
})
export class SidenavComponent implements OnInit {

  public pageTitle: string;
  public logoUrl: string;

  @ViewChild('sidenav') public sidenav: any;

  /**
   * TypeScript public modifiers
   */
  constructor(
    private sidenavService: SidenavService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthenticationService,
    private _userService: UserService
  ) {
  }


  public ngOnInit() {

    // This will get the data property from each route and update toolbar title
    this._router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this._activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => this.pageTitle = event['title']);

    // Set sidenav here to be able to toggle it from everywhere
    this.sidenavService.setSidenav(this.sidenav);
  }

  /**
   * Logout the user form the user menu.
   */
  public logout() {
    this._authService.logout();
  }

  /**
   * Delete user account.
   */
  public deleteAccount() {

    // Get user
    let user = this._authService.getAuthenticatedUser();

    // Make the request to delete user account
    this._userService.deleteOwnUser(user.id).subscribe((response) => {

      console.log(response);

      // After delete the user, we should logout it.
      this._authService.logout();

    }, (errorResponse) => {
      console.log(errorResponse);
    });
  }
}
