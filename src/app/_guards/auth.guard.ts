import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthenticationService } from '../_services/index';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthenticationService) {}

    /**
     * Check if the user has access to this route.
     */
    canActivate() {

        // Check if the user as a token saved on local storage and if is valid.
        if (localStorage.getItem('token')) {

            let isValid = tokenNotExpired('token');

            if (!isValid) {

                // Try to refresh the token
                this.authService.refreshToken().subscribe((data: any) => {

                    // Update local storage
                    if (data.access_token !== '') {
                        localStorage.setItem('token', data.access_token);
                        return true;
                    } else {
                        // If something happen when trying to refresh the token,
                        // redirect user to login page.
                        this.authService.logout();
                        this.router.navigate(['/']);
                        return false;
                    }
                },
                error => {
                  console.log(error);
                  this.router.navigate(['/login']);
                  return false;
                });

            } else {
                return true;
            }

        } else {

            // not logged in so redirect to login page
            this.router.navigate(['/login']);
            return false;
        }
    }
}