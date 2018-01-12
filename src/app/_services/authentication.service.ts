import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tokenNotExpired } from 'angular2-jwt';

import { IRole, IUser } from '../_models/user';

@Injectable()
export class AuthenticationService {
    public token: string;
    public isLoggedIn = false;

    public user: IUser;

    constructor(private http: HttpClient, private router: Router) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    /**
     * Get authenticated user.
     */
    public getAuthenticatedUser() {

        // If user is already saved
        if (this.user) {
            return this.user;
        }

        // Else, let's check local storage
        let user = JSON.parse(localStorage.getItem('currentUser'));

        if (user.user) {
            return user.user;
        }

        return false;
    }

    /**
     * Make the requet to the API.
     * If all OK, we will save user info, including is token, on local storage.
     */
    public login(email: string, password: string) {

        return this.http.post('auth/login', {email: email, password: password})
            .map((response: any) => {

                // login successful if there's a jwt token in the response
                let token = response.access_token;
                let roles = response.user.roles;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user
                    // logged in between page refreshes.
                    localStorage.setItem('currentUser', JSON.stringify({
                      user: response.user,
                      roles: response.user.roles
                    }));

                    localStorage.setItem('token', token);

                    // return true to indicate successful login
                    this.isLoggedIn = true;

                    // Save user data
                    this.user = response.user;

                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }

            }, errorResponse => {
                console.log(errorResponse);
                return Observable.of(false);
            });
    }

    /**
     * Remove local storage.
     */
    public logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this.isLoggedIn = false;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');

        // Redirect user to login page
        this.router.navigate(['/login']);

    }

    /**
     * Check if a user has a valid token on local storage.
     */
    public userIsLoggedIn(): any {

        // Ger roles from local storage.
        let user = JSON.parse(localStorage.getItem('currentUser'));

        let isValid = tokenNotExpired('token');

        if (!isValid) {
            this.isLoggedIn = false;
            return this.isLoggedIn;
        }

        this.isLoggedIn = true;

        return this.isLoggedIn ? user.user : false;
    }

    /**
     * This will retrieve a new token.
     * Used when we get a 401. We getr a new token from the server and
     * update the header.
     */
    public refreshToken() {
        return this.http.get('auth/refresh');
    }

    /**
     * Get user roles from local storage.
     */
    public getRoles(): Array<IRole> {

        // Ger roles from local storage.
        let roles = JSON.parse(localStorage.getItem('currentUser'));

        // If we have roles saved on local storage.
        if (roles) {
            return roles.roles;
        }

        return null;
    }

    /**
     * Get user roles from local storage on a arrys with roles name inside
     */
    public getUserRolesArray(): Array<string> {

        // Ger roles from local storage.
        let roles = JSON.parse(localStorage.getItem('currentUser'));

        // If we don't have roles saved on local storage.
        if (!roles) {
            return null;
        }

        // If we have roles
        let rolesA: Array<string> = [];

        // Get user roels from object
        for (let key in roles.roles) {
           rolesA.push(roles.roles[key].name);
        }

        return rolesA;
    }

    /**
     * Send user e-mail. User should receive an e-mail with a link to reset
     * his password.
     */
    public passwordResetEmail(email: string): Observable<any> {

        return this.http
            .post('auth/password/email', email);

    }

    /**
     * Reset user forgotten password.
     *
     * User should fill his e-mail, password and confirm his password.
     * A hidden input is sent as well with a token (received from the e-mail button).
     */
    public passwordReset(form: {
        email: string,
        password: string,
        password_confirmation: string,
        token: string
    }): Observable<any> {

        return this.http
            .post('auth/password/reset', form);

    }

}
