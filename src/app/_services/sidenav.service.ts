import { Injectable } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult } from '@angular/material';

import { IMenu } from '../_models/_shared';

@Injectable()
export class SidenavService {

  /**
   * Menu links
   */
  public sections: IMenu[] = [
    {
      label: 'Contact',
      route: 'contact',
      permission: null,
      icon: 'email'
    },
  ];

  private sidenav: MatSidenav;

  /**
   * Setter for sidenav.
   *
   * @param {MatSidenav} sidenav
   */
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  /**
   * Open this sidenav, and return a Promise that will resolve when
   * it's fully opened (or get rejected if it didn't).
   *
   * @returns Promise<MatDrawerToggleResult>
   */
  public open(): Promise<MatDrawerToggleResult> {
    return this.sidenav.open();
  }

  /**
   * Close this sidenav, and return a Promise that will resolve when it's
   * fully closed (or get rejected if it didn't).
   *
   * @returns Promise<MatDrawerToggleResult>
   */
  public close(): Promise<MatDrawerToggleResult> {
    return this.sidenav.close();
  }

  /**
   * Toggle this sidenav. This is equivalent to calling open() when it's already opened,
   * or close() when it's closed.
   *
   * @param {boolean} isOpen  Whether the sidenav should be open.
   *
   * @returns {Promise<MatDrawerToggleResult>}
   */
  public toggle(isOpen?: boolean): Promise<MatDrawerToggleResult> {
    return this.sidenav.toggle(isOpen);
  }
}
